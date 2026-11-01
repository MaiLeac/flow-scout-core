# Low-cost crowdtesting bug hunter

Playwright + TypeScript, chạy trực tiếp trên Node **22.18+**. Các click, inventory, assertion, log và triage cơ bản chạy bằng code, **0 model call trong engine**. Hai subagent thật đã tham gia xây dựng các module triage/report và fixture/test; khi chạy hàng ngày, các lane dùng browser worker deterministic, không giả làm nhiều LLM agent.

## Chạy ngay trên máy này

Từ thư mục `bug-hunter`:

```powershell
.\hunt.ps1 -Demo
```

Script tự dùng Playwright có sẵn trong Codex runtime và Chrome đã cài. Demo chạy website local có lỗi filter cố ý, không phải bug thật của OneTravel.

Nếu PowerShell chặn script, dùng Node trực tiếp với dependency đã cài như phần dưới; không cần thay đổi execution policy của máy.

## Cài trên máy khác

```powershell
npm install
npx playwright install chromium
npm test
node src/cli.ts demo
```

Để dùng Chrome đã cài, đặt `browser.channel` thành `chrome`. Có thể chọn binary qua `browser.executablePath`. Khi dùng dependency có sẵn, `PLAYWRIGHT_MODULE_PATH` trỏ đến thư mục package Playwright; integration tests cũng nhận `PLAYWRIGHT_CHANNEL` hoặc `PLAYWRIGHT_EXECUTABLE_PATH`.

## Bắt đầu cycle mới

```powershell
node src/cli.ts init --url https://example.com --config configs/new-cycle.json
node src/cli.ts intake --config configs/new-cycle.json --out runs/intake-new
node src/cli.ts run --config configs/new-cycle.json
```

Hoặc ` .\hunt.ps1 -Config configs/new-cycle.json`. Mỗi lần chạy có thư mục riêng; engine từ chối ghi đè một run đã có `events.jsonl`.

Trước khi chạy, đưa overview, scope, exclusions, test data và **tất cả bước test case gốc** vào config. Agent đọc nguồn và nhập chúng một lần; crawler không gọi model để diễn giải từng click. `sources` giữ xuất xứ. Bước chưa có đủ dữ liệu/selector được ghi `manual`, không tính là đã kiểm tra. Chạy `intake` tạo Cycle Brief và checklist của toàn bộ bước đã nhập, không truy cập website.

`configs/onetravel.scout.json` là bản scope lấy từ overview đã cung cấp. Full test case và danh sách issue hiện tại chưa được nhập; nó có placeholder rõ ràng. Domain assets và read-only POST chưa được mở nên bản này **chỉ dùng để kiểm tra setup**, không đủ điều kiện kết luận website có bug. Cần cập nhật các nguồn trước khi dùng săn bug thực tế.

## Task và assertion

Mỗi task có `id`, `lane`, `feature`, `startUrl`, `required`, `steps` và tùy chọn `crawl`. Lane: `test-case`, `quick-win`, `workflow`, `deep`. Context riêng tránh nhiễu cookies/session. `resourceKey` giống nhau sẽ serialize các task dùng chung tài nguyên; engine không nhập cookie/profile cá nhân.

```json
{
  "id": "filter-recovery", "lane": "workflow", "feature": "Filter",
  "startUrl": "https://example.com/products", "required": true,
  "steps": [
    {"id":"filter", "action":"fill", "selector":"#search", "value":"Alpha", "description":"Search Alpha"},
    {"id":"clear", "action":"click", "selector":"#clear", "description":"Clear filter"},
    {"id":"restore", "action":"assert", "description":"All products return after clearing", "expected":{"type":"visible","selector":"#beta","value":true,"basis":"The UI explicitly says Clear filter restores all results","impact":"medium"}}
  ]
}
```

Selectors phải lấy từ UI thật, không đoán. Assertion hỗ trợ `visible`, `checked`, `count`, `text` (contains), `url` (contains); mọi expected phải có `basis`. Actions: `goto`, `back`, `click`, `fill`, `select`, `check`, `uncheck`, `assert`, `manual`.

Thêm `dependsOn: ["earlier-step"]` cho bước phụ thuộc. Một bước fail không tự dừng các bước độc lập; bước phụ thuộc được ghi blocked. Task bị chặn không được tính completed. `passed` cho thao tác click chỉ có nghĩa thao tác đã thực thi; chức năng đúng cần assertion có căn cứ.

## Safety và budget

- `allowedOrigins`: exact scheme + host + port cho navigation; không wildcard. `assetOrigins`: origin phụ chỉ để tải tài nguyên.
- `includePaths` và `excludePatterns`: regex phạm vi. Popup, redirect và request đều qua scope guard.
- `allowedActionNames`: chỉ button/tab/menu/checkbox khớp regex mới được tự click. Link nội bộ được inventory và duyệt trong giới hạn. Input/select không tự điền bừa; workflow phải cung cấp test data.
- Purchase/payment/booking completion, send/submit, delete, account/password changes, sensitive fields được giữ manual trong v1. GET nguy hiểm cũng bị chặn theo URL/name. Danh sách này là guardrail, không thay thế review scope vì không thể suy ra mọi side effect từ nhãn một nút.
- Mặc định chỉ GET/HEAD/OPTIONS được ra mạng. Muốn cho phép API search dùng POST, thêm `readOnlyPostRules` với URL regex có `^...$` và lý do đã kiểm tra. Không dùng wildcard để mở mọi POST. Service workers, WebSocket và downloads bị chặn.
- Nếu policy chặn request trong context, failed assertion sau đó bị hạ thành **inconclusive**. Cần manual control để loại trừ lỗi do môi trường.
- Budgets giới hạn runtime, pages, states, actions, depth, actions/state, signals, evidence và worker count. Watchdog đóng context khi hết thời gian. Teardown/report có thể mất thêm vài giây.
- Fingerprint gồm URL đã bỏ token/tham số tracking, visible text và trạng thái control. Cùng action trong cùng state không click lại; vẫn có trần cứng để tránh vòng lặp khi nội dung động.

## Output mỗi run

| File | Nội dung |
|---|---|
| `cycle-brief.md`, `cycle.json` | Scope, nguồn, checklist, config đã dùng |
| `inventory.jsonl` | Source URL, selector, role, tên lấy từ DOM label/text, destination, disabled/checked/expanded |
| `events.jsonl` | Timestamps, navigation, action, state, errors, failed requests/status, assertions, evidence |
| `browser-console.log` | Navigation và console/network messages có timestamps; log hỗ trợ, không phải full Chrome DevTools export |
| `task-queue.json`, `task-ledger.json` | Owner, lane, tiến độ từng bước, blockers, next action |
| `triage-queue.json`, `findings.jsonl`, `findings.json` | Hàng đợi và các finding đã nhóm, cập nhật khi crawler vẫn chạy |
| `metrics.json` | Thời gian, model calls, pages/states/actions, test cases completed, signals, findings |
| `report.md`, `brief.md` | Finding xếp ưu tiên, đường tái hiện đã ghi, coverage, thiếu evidence, remaining budget |
| `evidence/<task>/` | Screenshot/DOM của tín hiệu liên quan và trace của task có tín hiệu |

Triage không biến lỗi console/network hay HTTP 500 thành bug tự động. Failed assertion có expected + basis + evidence vào `needs-human-verification`; không có trạng thái tự động “ready to submit”. `currentIssues` chỉ so danh sách cycle hiện tại đã nhập; lexical match chỉ gợi ý duplicate, không chứng minh trùng hoặc không trùng. Thư viện bug cũ chỉ giúp viết hypothesis/workflow.

Log bỏ một số token/email, screenshot dùng `privateDataSelectors`. Trace và DOM text vẫn có thể chứa dữ liệu cá nhân: lưu local, xem và che thông tin trước khi gửi. Bản này chưa tự quay MP4, khoanh đỏ hoặc làm mờ mọi PII; các attachment bắt buộc vẫn cần người test hoàn thiện. Mở trace bằng `npx playwright show-trace <trace.zip>`.

## Giới hạn đã biết

- Chưa tự đọc uTest sau đăng nhập hoặc tự chuyển mọi test case natural-language thành selector. Intake là JSON được agent/người dùng kiểm tra.
- Chưa có LLM triage adapter, visual pixel comparator hoặc auto-minimizer; pipeline hiện dùng rule có giới hạn và người test quyết định. Action history là đường ngắn nhất đã ghi trong nhóm, chưa chứng minh tối thiểu.
- Accessible name trong inventory là xấp xỉ từ aria-label/label/text, không triển khai toàn bộ thuật toán accessibility name. Không dùng nó làm kết luận lỗi accessibility.
- Crawler không đảm bảo khám phá hết shadow DOM, cross-origin iframe, canvas, hover-only menu hay flow cần đăng nhập. Chúng phải là workflow hoặc manual task riêng.
- Không có bug thật nào được xác nhận chỉ bởi việc các test local pass.

Tài liệu API tham khảo: [Playwright network](https://playwright.dev/docs/network), [trace viewer](https://playwright.dev/docs/trace-viewer), [Node TypeScript](https://nodejs.org/api/typescript.html).
