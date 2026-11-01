# Testlio Freelancer & QA Platform Handbook

> **Nguồn đối chiếu:** Dữ liệu trích xuất trực tiếp từ Testlio Platform API (`https://api.testlio.com/qa-app/v1/graphql`), Testlio Freelancer App (`https://freelancer.testlio.com`), Easygenerator LMS (`elearning.easygenerator.com`), và quy chuẩn kiểm thử Testlio 2026.

---

## 1. Tổng quan Nền tảng & Cơ chế Làm việc trên Testlio

### 1.1 Khác biệt Cốt lõi giữa Testlio và uTest / Test IO
| Tiêu chí | Testlio | uTest / Test IO |
|---|---|---|
| **Mô hình trả thù lao** | **Trả tiền theo giờ (Hourly Rate)** cho các test run được lên lịch, cộng thêm thưởng bug nếu có | Trả tiền chủ yếu theo từng **bug được duyệt** (bounties) và hoàn thành test case |
| **Phân phối công việc** | Nhận lời mời tham gia Test Run cụ thể theo slot giờ (thường 1–3 giờ/run) | Tham gia tự do vào exploratory cycle theo First-Come-First-Served |
| **Vai trò & Phối hợp** | Làm việc trực tiếp dưới sự điều phối của **Test Lead (TL)** và Run Coordinator trong Rocket.Chat | Tự do săn bug và nộp báo cáo lên Issue Tracker |
| **Gating (Điều kiện nhận job)** | **Bắt buộc vượt qua Functional Regression Testing Certification (FRTC)** và hoàn tất xác minh thiết bị | Đạt huy chương uTest Academy hoặc Onboarding Test IO |
| **Tính bảo mật** | Cực kỳ nghiêm ngặt; build được phân phối qua app nội bộ Testlio hoặc TestFlight; NDA bắt buộc | Tuân thủ NDA dự án |

### 1.2 Các Vai trò trên Nền tảng
1. **Tester (Freelancer)**: Thực hiện các test case được giao trong test run, thực hiện exploratory charter, xác minh bug fix (reproduction), và báo cáo lỗi mới.
2. **Test Lead (TL)**: Quản lý run, phân chia test suite, duyệt/từ chối bug report theo thời gian thực, hỗ trợ tester qua Rocket.Chat.
3. **Run Coordinator / QA Lead**: Thiết kế chiến lược test tổng thể cho khách hàng doanh nghiệp (American Express, Microsoft, CBS, Fox, v.v.).

---

## 2. Quản lý Thiết bị & Xác minh Thiết bị (Device Verification)

### 2.1 Quy tắc Xác minh Thiết bị trên Testlio
- **Thiết bị Máy tính để bàn / Laptop (Desktop PC/Mac)**:
  - Khi thêm thiết bị Desktop (Windows PC, macOS), hệ thống Testlio tự động kích hoạt trạng thái **Verified (`isVerified: true`)** ngay lập tức mà không cần quét mã QR.
  - Cấu hình chuẩn của bạn đã được kích hoạt: **Windows PC - Windows 11 Home (64-bit)**.
- **Thiết bị Di động (Mobile Phone / Tablet)**:
  - Thiết bị di động yêu cầu xác minh danh tính thiết bị qua đường dẫn `https://assets.testlio.com/?deviceVerificationGuid=...`.
  - Mở link/quét mã QR trực tiếp trên trình duyệt của điện thoại (`Xiaomi 13T Pro - Android 15`) để ứng dụng nhận diện User-Agent và hoàn tất xác minh.
- **Quy tắc về Mạng & IP**:
  - Không sử dụng VPN/Proxy công cộng khi làm việc trên Testlio trừ khi dự án có chỉ định sử dụng VPN nội bộ của khách hàng.
  - Bật tính năng lưu log mạng (Charles Proxy / Fiddler) khi test case yêu cầu bắt traffic.

---

## 3. Hệ thống Khóa học Testlio Academy & Lộ trình Chứng chỉ (FRTC)

Testlio Academy bao gồm 19 khóa học và bài thi chuyên biệt:

```
Testlio Academy Curriculum
├── Gating Certifications (Bắt buộc để nhận dự án)
│   ├── [FRTC] Functional Regression Testing Certification
│   └── Testlio Platform Course
├── Preparation Tracks
│   ├── How to earn the Functional Regression Testing Certification?
│   ├── Issue Reporting Course
│   ├── Executing Structured Exploratory Tests
│   └── Executing Exploratory Tests
├── Specialized Domains
│   ├── Payments Testing Basics
│   ├── Localization Testing Course
│   ├── An Introduction to Analytics Testing
│   ├── An Introduction to Accessibility Testing & Accessibility Test Techniques
│   └── Usability 101 & Usability 102
├── AI & Next-Gen QA
│   ├── Beginner's Guide to AI
│   └── Intro to Testing AI-Powered Applications
└── Governance & Security
    ├── Freelancer Security & Privacy Training
    ├── Test Lead Security & Privacy Add On
    └── Test Creation
```

### 3.1 Khóa học Nền tảng: Testlio Platform Course
- **Mục tiêu**: Nắm vững luồng nhận thư mời (invitation), chấp nhận slot (accept run), bắt đầu phiên test (start session), cập nhật trạng thái test case (Pass/Fail/Blocked), và kết thúc ca làm việc (end session).
- **Quy tắc thời gian**: Luôn bấm **Start Session** đúng giờ bắt đầu của ca test và bấm **End Session** khi hết giờ hoặc hoàn thành toàn bộ test cases. Thời gian ghi nhận trên hệ thống là căn cứ tính thù lao.

### 3.2 Bài thi Quyết định: Functional Regression Testing Certification (FRTC)
- **Hình thức**: Bài kiểm tra thực hành thực tế trong môi trường web/app mô phỏng.
- **Nội dung kiểm tra**:
  1. **Thực thi Test Suite**: Đọc từng bước kiểm thử (test steps), kiểm tra đúng môi trường chỉ định, ghi nhận kết quả mong đợi (expected) và thực tế (actual).
  2. **Báo cáo Bug Hợp lệ**: Khi một bước bị thất bại (Fail), tạo bug report với video bằng chứng và log hệ thống.
  3. **Xác minh Lỗi Cũ (Issue Verification)**: Tái hiện các lỗi đã được sửa xem lỗi có còn xuất hiện không.
  4. **Exploratory Charter**: Dành 15–30 phút khám phá tự do theo phạm vi quy định để săn tìm ít nhất 1 lỗi chức năng có giá trị.

---

## 4. Chuẩn mực Viết Bug Report trên Testlio

### 4.1 Cấu trúc Tiêu đề Chuẩn (Title Syntax)
Testlio áp dụng quy tắc đặt tiêu đề nghiêm ngặt:
$$	ext{[Area / Feature / Screen]} 	ext{ Action taken} - 	ext{Defect outcome}$$

- **Ví dụ đúng**:
  - `[Checkout] Entering 16-digit card number - Cursor jumps to end of field`
  - `[Flight Results] Applying 'Carry-on bag' filter - Eligible flights disappear from listing`
  - `[Profile Settings] Tap 'Save Changes' after editing phone number - System displays 500 error`
- **Các lỗi sai tiêu đề thường gặp**:
  - Thiếu tag màn hình/chức năng ở đầu `[Area]`.
  - Dùng từ ngữ mơ hồ như `doesn't work`, `is broken`, `fails`.
  - Viết hoa toàn bộ tiêu đề (ALL CAPS).

### 4.2 Cấu trúc Các bước Tái hiện (Steps to Reproduce)
- Luôn bắt đầu từ URL gốc hoặc màn hình chính:
  1. Open target URL or launch application.
  2. Log in with provided test credentials.
  3. Navigate to [Specific Section].
  4. Perform [Action].
  5. Observe [Defect].
- **Mỗi bước chỉ chứa duy nhất một hành động.**

### 4.3 Quy chuẩn Video & Hình ảnh Bằng chứng (Attachments)
1. **Video ghi màn hình (Screen Recording)**:
   - **Bắt buộc** đối với tất cả bug Functional trên Testlio.
   - Bắt đầu ghi từ lúc mở trang/app hoặc trước khi thực hiện hành động lỗi 1–2 bước.
   - Hiển thị rõ con trỏ chuột (desktop) hoặc chấm chạm màn hình (mobile touches).
   - Video phải liền mạch, không được cắt ghép (no edits), không tua nhanh, không che khuất thanh địa chỉ URL.
2. **Ảnh chụp màn hình (Screenshots)**:
   - Khoanh đỏ (red callout/box) vào khu vực bị lỗi.
   - Không chèn mũi tên nguệch ngoạc hoặc che khuất dữ liệu quan trọng.
3. **Device Logs**:
   - Đối với lỗi crash, lỗi mạng 5xx hoặc blank screen: bắt buộc đính kèm log console (DevTools export `.log` hoặc `.har`) hoặc mobile log (`adb logcat`).

---

## 5. Quy tắc Tránh Bị Từ Chối (Rejection & Duplicate Hygiene)

1. **Kiểm tra Known Issues & Triển khai Tránh Duplicate**:
   - Trước khi nộp bug trong bất kỳ run nào, luôn mở tab **Issues** của run và danh sách **Known Issues** do Test Lead ghim.
   - Nếu lỗi đã được người khác báo trong cùng run: **tuyệt đối không nộp lại**.
2. **Xử lý Request for Information (RFI) từ Test Lead**:
   - Khi TL gắn cờ thông báo cần thêm thông tin, tester phải phản hồi qua chat hoặc cập nhật bug trong vòng **15–30 phút**.
   - Nếu không phản hồi kịp trước khi run kết thúc, bug sẽ bị từ chối tự động.
3. **Phân biệt Rõ Tính năng theo Thiết kế (WAD) vs Lỗi**:
   - Kiểm tra kỹ tài liệu PRD hoặc hướng dẫn của run trước khi báo cáo các vấn đề về nội dung (content) hoặc quy tắc nghiệp vụ.

---

## 6. Hướng dẫn Từng Lĩnh vực Chuyên sâu

### 6.1 Payment Testing
- Luôn kiểm tra thẻ test do Testlio cung cấp trong phần Test Run Details.
- Đối với real payment tests: Testlio sẽ hoàn tiền (reimbursement) cho các giao dịch thật được chỉ định trong vòng 24–48h. Lưu giữ biên lai điện tử (invoice/receipt email).

### 6.2 Localization Testing (L10N)
- Phân biệt 3 loại lỗi bản địa hóa:
  - **Linguistic**: Dịch sai nghĩa, sai ngữ pháp, văn phong không tự nhiên.
  - **Cosmetic / Layout**: Chữ bị tràn khung (text truncation), đè chữ (overlap) do độ dài tiếng Việt / tiếng Tây Ban Nha dài hơn tiếng Anh.
  - **Functional L10N**: Sai định dạng ngày tháng, tiền tệ, không hỗ trợ bàn phím có dấu (UTF-8 encoding issues).

### 6.3 Accessibility Testing (A11Y)
- Kiểm thử theo tiêu chuẩn WCAG 2.1 cấp độ AA:
  - Kiểm tra điều hướng hoàn toàn bằng bàn phím (`Tab`, `Shift+Tab`, `Enter`, `Space`).
  - Kiểm tra độ tương phản màu sắc (Color Contrast Ratio tối thiểu 4.5:1 cho văn bản thường).
  - Kiểm tra khả năng đọc của trình đọc màn hình (TalkBack trên Android, NVDA trên Windows).
