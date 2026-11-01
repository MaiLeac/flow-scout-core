# Flow Scout Core

Hệ thống tri thức kiểm thử thực chứng (`knowledge/`), cẩm nang quy chuẩn (`guidelines/`), thư viện mẫu lỗi (`heuristics/`) và công cụ dò tìm tự động (`bug-hunter/`) phục vụ săn bug năng suất cao trên uTest và các nền tảng crowdtesting.

## Cấu trúc thư mục

- [`AGENT_RULES.md`](AGENT_RULES.md): Quy tắc bắt buộc cho AI agent khi săn bug, sàng lọc `WAD` / `WNF` / `DUP` và bàn giao bằng chứng.
- [`knowledge/`](knowledge/README.md): **Hệ thống tri thức uTest có cấu trúc (Phase 1 Foundation)**:
  - [`knowledge/AUDIT_AND_COVERAGE_REPORT.md`](knowledge/AUDIT_AND_COVERAGE_REPORT.md): Báo cáo kiểm toán kho lưu trữ, giải quyết mâu thuẫn tài liệu và ma trận độ phủ dữ liệu lịch sử.
  - [`knowledge/cycles/`](knowledge/cycles/cycle-index.json): Hồ sơ đầy đủ của các cycle (`562706` OneTravel, `562000` Genius Android, `562001` Celine, `academy-practice-2026` MAC Cosmetics) và 5/5 Test Case uTest Academy đã `Approved` (`#12353130`, `#12382341`, `#12406429`, `#12428334`, `#12439394`).
  - [`knowledge/issues/`](knowledge/issues/issue-index.json): Schema JSON (`issue-schema.json`) và chỉ mục 24 hồ sơ bug (`issue-index.json`) tách biệt dữ liệu gốc, phân tích của agent và bài học suy luận.
  - [`knowledge/patterns/`](knowledge/patterns/pattern-index.json): 10 mẫu lỗi (`PAT-01` đến `PAT-10`) có tỷ lệ duyệt cao (`Filter/Detail Contradiction`, `Price/Promo Mismatch`, `Reversible State Mutation`, `Calendar Lockout`, `App vs. Web Parity`, v.v.).
  - [`knowledge/rejection-lessons/`](knowledge/rejection-lessons/rejection-index.json): Phân tích chuyên sâu về `WAD`, `Won't Fix`, `Duplicate / Permutation`, `Info Request` (console log, PII, `Observe` step) và công thức tính điểm Leaderboard (`Very Valuable` = 2đ, `Somewhat Valuable` = 1đ, `WNF` = 0đ).
  - [`knowledge/academy/`](knowledge/academy/course-index.json): Chỉ mục toàn bộ các Track, Course, Lesson và URL chính thức của uTest Academy (`course-index.json`, `source-links.md`, `access-status.md`).
  - [`knowledge/agent-guides/`](knowledge/agent-guides/discovery-playbook.md): Bộ 4 Playbook thực chiến cho Agent (`discovery-playbook.md`, `triage-playbook.md`, `issue-writing-playbook.md`, `duplicate-check-playbook.md`).
- [`guidelines/`](guidelines/):
  - [`utest_academy_handbook.md`](guidelines/utest_academy_handbook.md): Sổ tay thực hành chi tiết 38 chương đối chiếu từ uTest Academy.
  - [`mobile_testing_guide.md`](guidelines/mobile_testing_guide.md): Hướng dẫn kiểm thử ứng dụng di động & thu thập log bằng `adb logcat`.
  - [`crowdtesting_hunter_guide.md`](guidelines/crowdtesting_hunter_guide.md): Nguyên tắc khám phá nhanh và bàn giao kết quả.
  - [`test_io_handbook.md`](guidelines/test_io_handbook.md), [`test_io_cheatsheet.md`](guidelines/test_io_cheatsheet.md), [`tester_work_handbook.md`](guidelines/tester_work_handbook.md): Sổ tay quy chuẩn cho Test IO và Tester Work.
- [`heuristics/`](heuristics/):
  - [`BUG_LESSONS.md`](heuristics/BUG_LESSONS.md): Các bài học rút ra từ thực tế duyệt/từ chối bug.
  - [`MASTER_BUG_LIBRARY.md`](heuristics/MASTER_BUG_LIBRARY.md): Thư viện 10 phép thử lỗi chức năng có tỷ lệ duyệt cao.
- [`bug-hunter/`](bug-hunter/README.md): Công cụ dòng lệnh (TypeScript + Playwright) hỗ trợ quét tự động, kiểm tra chính sách scope và đối chiếu trùng lặp (`currentIssues` / `knownIssues`).

## Khởi chạy nhanh `bug-hunter`

```powershell
cd bug-hunter
npm install
npm test
./hunt.ps1 -Config ./configs/onetravel.scout.json
```
