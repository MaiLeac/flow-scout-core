# Agent Rules for Crowdtesting

Mục tiêu: tìm **bug thật, trong scope, chưa trùng**, và giao lại bằng chứng đủ để con người xác minh/nộp nhanh. Không tối ưu theo số lượng nghi vấn; tối ưu theo tỷ lệ được duyệt (`Approved` — ưu tiên `Very Valuable` và `Somewhat Valuable`).

## 0. Hệ thống tri thức & Thứ tự ưu tiên nguồn sự thật (Source-of-Truth Hierarchy)

Trước khi khám phá, sàng lọc hoặc viết báo cáo, agent phải tra cứu hệ thống [`knowledge/`](knowledge/README.md) theo thứ tự ưu tiên tuyệt đối sau:

1. **Quy định của Cycle hiện tại:** `Overview`, `Announcements`, `Issue Reporting Instructions`, `Slot / Test Case Instructions`, `Known Issues` và chỉ dẫn trực tiếp của `TTL / TE` trong Cycle Chat hoặc Info Request.
2. **Quy chuẩn nền tảng chính thức:**
   - **uTest Academy:** Các khóa học tại `https://www.utest.com/academy` ([`knowledge/academy/course-index.json`](knowledge/academy/course-index.json) & [`guidelines/utest_academy_handbook.md`](guidelines/utest_academy_handbook.md)).
   - **Testlio Platform & Academy:** Quy chuẩn làm việc theo giờ, xác minh thiết bị, chuẩn báo cáo bug và đề cương chứng chỉ FRTC ([`guidelines/testlio_handbook.md`](guidelines/testlio_handbook.md) & [`knowledge/testlio/overview.md`](knowledge/testlio/overview.md)).
   - **Test IO & Tester Work:** [`guidelines/test_io_handbook.md`](guidelines/test_io_handbook.md) và [`guidelines/tester_work_handbook.md`](guidelines/tester_work_handbook.md).
3. **Bằng chứng thực tế từ các Cycle & Issue lịch sử:** [`knowledge/cycles/cycle-index.json`](knowledge/cycles/cycle-index.json) và [`knowledge/issues/issue-index.json`](knowledge/issues/issue-index.json).
4. **Playbook & Thư viện mẫu lỗi của Repo:**
   - [`knowledge/agent-guides/discovery-playbook.md`](knowledge/agent-guides/discovery-playbook.md)
   - [`knowledge/agent-guides/triage-playbook.md`](knowledge/agent-guides/triage-playbook.md)
   - [`knowledge/agent-guides/issue-writing-playbook.md`](knowledge/agent-guides/issue-writing-playbook.md)
   - [`knowledge/agent-guides/duplicate-check-playbook.md`](knowledge/agent-guides/duplicate-check-playbook.md)
   - [`knowledge/patterns/pattern-index.json`](knowledge/patterns/pattern-index.json) & [`knowledge/rejection-lessons/rejection-index.json`](knowledge/rejection-lessons/rejection-index.json)
   - [`heuristics/BUG_LESSONS.md`](heuristics/BUG_LESSONS.md) & [`heuristics/MASTER_BUG_LIBRARY.md`](heuristics/MASTER_BUG_LIBRARY.md)

## 1. Bốn cổng bắt buộc trước khi báo cho người dùng

1. **Scope gate:** lỗi có nằm trong chức năng được phép test và không rơi vào mục cấm báo của cycle hiện tại không?
2. **Duplicate gate:** lỗi có trùng với `Issues` hoặc `Known Issues` của **cycle hiện tại** không? (Lưu ý: giống mẫu lỗi trong `knowledge/issues/` từ cycle cũ là tín hiệu tốt để ưu tiên tìm, **không phải** duplicate của cycle mới).
3. **Validity gate:** có mốc đối chiếu cụ thể để chứng minh đây là lỗi, không phải `Working as Designed` (`WAD`) không?
4. **Value gate:** nếu lỗi giống nhóm từng bị `Won't Fix` (`WNF`, như lỗi đè khung ảnh editorial trên Celine `#7292278` hoặc link phụ `'Give Us Feedback'` dưới footer `#7297917`), hạ ưu tiên và tìm lỗi chức năng trước.

Nếu chưa qua cả 4 cổng, chỉ ghi là `hypothesis` hoặc `low-priority candidate`, không trình bày như bug đã xác nhận.

## 2. Thứ tự làm việc trong một cycle mới

1. Đọc `Overview`, `In Scope`, `Out of Scope`, `Do Not Report`, `Known Issues`, yêu cầu thiết bị/ngôn ngữ và yêu cầu bằng chứng.
2. Mở danh sách `Issues` hiện tại của cycle để biết:
   - lỗi nào đã có người báo (nạp vào `currentIssues` của `bug-hunter/configs/<cycle>.scout.json`),
   - nhóm lỗi nào đang được `Approved` (`Very Valuable` / `Somewhat Valuable`),
   - nhóm nào bị `Rejected (WAD)` hoặc `Approved (WNF)`.
3. Chọn 2–3 phép thử từ [`knowledge/patterns/pattern-index.json`](knowledge/patterns/pattern-index.json) và [`heuristics/MASTER_BUG_LIBRARY.md`](heuristics/MASTER_BUG_LIBRARY.md) khớp với chức năng thật của sản phẩm.
4. Thực hiện phép thử theo đường ngắn nhất từ trang chủ/màn hình chính.
5. Khi thấy nghi vấn:
   - kiểm tra lại điều kiện đầu vào,
   - kiểm tra mốc đối chiếu (trang chi tiết vs. bộ lọc danh sách, giá trước/sau khi thêm-xóa, mobile web vs. native app cùng mạng),
   - rút gọn bước tái hiện (mỗi bước 1 hành động, **không** dùng `Observe` làm bước riêng trên uTest),
   - kiểm tra lại danh sách `Issues` của cycle trước khi kết luận.

## 3. Quy tắc trung thực với nguồn dữ liệu

- Chỉ gọi một bug là `Approved`, `Approved (WNF)`, `Rejected (WAD)`, `New` khi đã thấy trạng thái đó trong nguồn thực tế.
- Nếu chỉ thấy danh sách issue mà chưa mở được chi tiết từng bug, phải ghi rõ đó là suy luận từ tiêu đề (`list_level_summary`).
- Không suy đoán tâm lý reviewer. Mọi kết luận phải gắn với: quy định cycle, hành vi sản phẩm quan sát được, hoặc trạng thái review đã xác nhận.

## 4. Định dạng bàn giao một bug khả thi

- **Title:** đúng mẫu của cycle (`OS/Device - Area - Issue Description`).
- **Classification:** `Type` | `Severity` | `Frequency` | `Source` (`Exploratory` ngoài TC; `Structured` trong TC) | `Environment`.
- **Why it is valid:** mốc đối chiếu cụ thể trên chính sản phẩm chứng minh hành vi hiện tại mâu thuẫn với thông tin/chức năng của sản phẩm.
- **Why it is not WAD/OOS/Duplicate:** 1–3 dòng đối chiếu với scope và issue list hiện tại.
- **Shortest steps:** đánh số từ trang chủ/app launch, mỗi bước một thao tác, tuyệt đối không có bước `Observe` đứng riêng.
- **Exact test data:** ngày, từ khoá, sản phẩm/chuyến/khách sạn, bộ lọc, tiền tệ, locale.
- **Evidence checklist:** đúng loại file mà cycle yêu cầu (screenshot có URL bar + khung đỏ, video `.mp4` tắt mic từ trang chủ, console log có `Preserve log` + `Show timestamps` bắt đầu bằng `Navigated to <homepage>`, hoặc `adb logcat -v threadtime`, đã che mọi PII kể cả tên giả).
