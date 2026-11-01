# Testlio Pre-certification Knowledge Quiz — Master Cheat Sheet & Prompt for Gemini Live

> **Tài liệu nạp vào Gemini / Gemini Live**: Cung cấp toàn bộ ngân hàng câu hỏi, đáp án chuẩn xác 100% và nguyên lý cốt lõi của kỳ thi Testlio Pre-certification Quiz trên Coderbyte.

---

## I. 10 CÂU HỎI THỰC TẾ TRÊN ĐỀ THI CODERBYTE (KÈM ĐÁP ÁN CHÍNH XÁC)

### Câu 1: Primary purpose of regression testing
- **Question**: What is the primary purpose of regression testing?
- **Đáp án đúng**: **To confirm that previously working functionality still works after changes**
- *(Giải thích: Mục đích chính của regression testing là xác nhận các tính năng cũ trước đây vẫn hoạt động tốt sau khi có thay đổi code mới).*

### Câu 2: Type of defects regression testing aims to catch
- **Question**: What type of defects does regression testing primarily aim to catch?
- **Đáp án đúng**: **Errors caused by recent code changes that impact existing functionality**
- *(Giải thích: Bắt các lỗi do thay đổi code gần đây gây ảnh hưởng tiêu cực tới các tính năng hiện có).*

### Câu 3: Search function update prioritization
- **Question**: A search function on an e-commerce site was updated. What should you prioritize in regression testing?
- **Đáp án đúng**: **Ensuring that users can still search for and locate products accurately**
- *(Giải thích: Ưu tiên cốt lõi là đảm bảo người dùng vẫn tìm kiếm và định vị chính xác sản phẩm).*

### Câu 4: Invoice calculation bug fix approach
- **Question**: A developer fixed a bug that caused incorrect calculations in an invoice system. What is the best regression testing approach?
- **Đáp án đúng**: **Retest the entire invoice calculation process to ensure all related functionality works correctly**
- *(Giải thích: Phải test lại toàn bộ quy trình tính hóa đơn để đảm bảo các tính năng tính toán liên quan không bị sai lệch).*

### Câu 5: Irrelevant test case for playlist creation
- **Question**: You are testing a new feature on a music streaming app that allows users to create playlists. Which of the following is NOT a relevant test case for this feature?
- **Đáp án đúng**: **Verify that the app's audio quality is good**
- *(Giải thích: Chất lượng âm thanh thuộc tính năng nghe nhạc/media player, KHÔNG liên quan đến tính năng tạo playlist).*

### Câu 6: Key information in an effective bug report
- **Question**: What key information should be included in a bug report to ensure it is effective?
- **Đáp án đúng**: **Title, description, steps to reproduce, expected results, actual results, and environment details**
- *(Giải thích: Báo cáo bug hiệu quả bắt buộc có đủ: Tiêu đề, mô tả, các bước tái hiện, kết quả mong đợi, kết quả thực tế, và chi tiết môi trường/thiết bị).*

### Câu 7: Purpose of screenshots and screen recordings
- **Question**: What is the purpose of including screenshots or screen recordings in a bug report?
- **Đáp án đúng**: **To provide visual evidence that helps developers understand the issue more clearly and replicate it more easily**
- *(Giải thích: Cung cấp bằng chứng trực quan giúp lập trình viên hiểu rõ lỗi và dễ dàng tái hiện lại).*

### Câu 8: Definition and importance of logs
- **Question**: What is a log in the context of software testing, and why is it important to attach logs to bug reports?
- **Đáp án đúng**: **A log is a detailed record of system events and errors, and provides developers a crucial context for diagnosing and fixing issues**
- *(Giải thích: Log là bản ghi chi tiết các sự kiện và lỗi hệ thống, cung cấp bối cảnh quan trọng để lập trình viên chẩn đoán và sửa lỗi).*

### Câu 9: Essential device details for Testlio profile
- **Question**: Which of the following device details is essential to provide when adding a device to your Testlio profile?
- **Đáp án đúng**: **Device model, operating system version, and browser information**
- *(Giải thích: Thông tin thiết bị bắt buộc gồm: Model máy, phiên bản hệ điều hành (OS), và thông tin trình duyệt).*

### Câu 10: Updating availability / Vacation mode
- **Question**: If you need to change your availability or make yourself unavailable temporarily, what is the recommended way to update this in Testlio?
- **Đáp án đúng**: **Update the availability settings directly in your profile and update the “Vacation mode” with specific dates**
- *(Giải thích: Cập nhật trực tiếp trong mục Availability ở hồ sơ và bật Vacation Mode với ngày cụ thể).*

---

## II. CÂU HỎI DỰ PHÒNG & QUY TẮC CỐT LÕI CỦA TESTLIO (NẾU ĐỀ HOÁN ĐỔI CÂU)

### 1. Về Trạng thái Test Case (Test Case Statuses)
- **Khi nào đánh dấu `Blocked`?**: Khi một lỗi xuất hiện ở các bước trước khiến bạn không thể thực hiện bước kiểm thử hiện tại (*An earlier defect prevents you from executing the step*). Phải đính kèm ID của bug gây chặn.
- **Khi nào đánh dấu `Failed`?**: Khi kết quả thực tế trên màn hình sai lệch so với kết quả mong đợi trong test step (*Actual result contradicts expected result*), và phải tạo một bug report hợp lệ.
- **Khi nào đánh dấu `Passed`?**: Khi toàn bộ hành vi và kết quả thực tế trùng khớp hoàn toàn với mong đợi (*Actual result perfectly matches expected result*).
- **Có được tự ý sửa Test Step không?**: **KHÔNG (No)**. Nếu step mơ hồ hoặc sai, comment vào test case và báo Test Lead qua Rocket.Chat.

### 2. Về Quy chuẩn Tiêu đề Bug (Issue Title Format)
- **Cú pháp bắt buộc**: **`[Feature/Area] User action - Error description`**
- *Ví dụ đúng*: `[Checkout] Clicking Place Order with valid card - Infinite loading spinner appears`
- *Ví dụ sai*: `Button not working`, `Checkout issue`, `[Bug] Can not buy`.

### 3. Về Quản lý Phiên test (Session Management & Payouts)
- **Khi nào bấm "Start Session"?**: Đúng giờ hẹn bắt đầu của test run (*At the scheduled start time of the assigned run*).
- **Khi nào bấm "End Session"?**: Ngay khi hoàn thành việc test (*Immediately/promptly after testing finishes*). Quên bấm sẽ bị Test Lead điều chỉnh cắt giờ thừa.
- **Không tham gia được ca test thì làm gì?**: Từ chối lời mời càng sớm càng tốt (*Decline invitation as early as possible*) để nhường slot cho tester khác.
- **Phản hồi Test Lead (RFI - Request for Information)**: Phải trả lời nhanh nhất có thể, lý tưởng trong **15 – 30 phút** trước khi ca test đóng.
- **Lịch thanh toán thu nhập (Payouts)**: Testlio thanh toán định kỳ vào **thứ Năm hàng tuần (weekly on Thursdays)** qua Payoneer / PayPal / Wise.

### 4. Về Bảo mật Dữ liệu (Data Security & PII)
- **Dữ liệu cá nhân (PII)**: Luôn phải che mờ (blur/mask) các thông tin nhạy cảm (email cá nhân, số thẻ tín dụng, số điện thoại thật).
- **Bản build của khách hàng**: Tuyệt đối không chia sẻ file APK/IPA hoặc thông tin dự án ra bên ngoài.
