# Testlio Certification & Exam Preparation Guide

## 1. Khóa học Nền tảng: Testlio Platform Course
Khóa học trực tuyến trên Easygenerator (`af244b50-5b09-459b-9715-8deb89227303`).

### Bộ Câu hỏi & Đáp án Chuẩn (Course Q&A Master Key)

#### Phần 1: Navigation & Session Management
- **Q1: When should you click "Start Session"?**
  - **Đáp án đúng**: Exact scheduled start time of your assigned test run, or as soon as you begin testing if open-ended.
- **Q2: What happens if you forget to click "End Session"?**
  - **Đáp án đúng**: Your session may be automatically timed out and extra unworked time will be adjusted by the Test Lead. Always end session promptly when testing finishes.
- **Q3: What should you do if you cannot attend an assigned test run?**
  - **Đáp án đúng**: Decline the invitation as early as possible so another tester can take the slot, or inform the Test Lead via Rocket.Chat.

#### Phần 2: Test Case Execution & Statuses
- **Q4: What is the correct status when a test step cannot be performed because of a bug earlier in the flow?**
  - **Đáp án đúng**: `Blocked`. Provide the issue ID of the blocking defect in the comments.
- **Q5: When should a test case be marked as `Failed`?**
  - **Đáp án đúng**: When the actual outcome on the screen contradicts the expected result stated in the test step, and an approved bug report is submitted.
- **Q6: Can you edit test case steps yourself?**
  - **Đáp án đúng**: No. If test steps are outdated or unclear, comment in the test case and notify the Test Lead.

#### Phần 3: Bug Reporting & Review
- **Q7: What is the mandatory title format on Testlio?**
  - **Đáp án đúng**: `[Feature/Area] User action - Error description` (e.g. `[Sign Up] Submitting empty form - No validation messages appear`).
- **Q8: What type of attachment is mandatory for all functional bugs?**
  - **Đáp án đúng**: Screen recording video showing full screen, user interaction pointers, and the failure happening in real time.
- **Q9: How quickly must you respond to a Test Lead's Request for Information (RFI)?**
  - **Đáp án đúng**: As quickly as possible, ideally within 15–30 minutes, before the test run closes.

---

## 2. Kỳ thi Chứng chỉ: Functional Regression Testing Certification (FRTC)

### 2.1 Tiêu chí Đánh giá của Ban giám khảo Testlio (Grading Rubric)
1. **Thực hiện đúng 100% Test Case**:
   - Đọc kỹ từng precondition (xóa cache, chế độ ẩn danh, đúng phiên bản build).
   - Kiểm tra kỹ từng assertion mong đợi, không bấm Pass qua loa.
2. **Chất lượng Video Bằng chứng**:
   - Video phải có độ phân giải tối thiểu 720p.
   - Thể hiện rõ thao tác con trỏ hoặc chạm màn hình.
   - Không được cắt xén, không có tiếng ồn nền nhạy cảm.
3. **Exploratory Testing Charter**:
   - Sử dụng các heuristic `H-01` đến `H-13` (kiểm tra mask nhập liệu, rò rỉ session giữa các tài khoản, biên giỏ hàng, và điều kiện lọc).
   - Báo cáo ít nhất 1 bug chức năng hợp lệ với độ nghiêm trọng từ Medium trở lên.

### 2.2 Các Bẫy Dẫn tới Rớt Chứng chỉ (Auto-Fail Traps)
- Báo cáo lỗi trùng với Known Issues được liệt kê sẵn trong đề bài.
- Báo cáo lỗi Visual/Chính tả khi đề bài chỉ cho phép báo lỗi Functional.
- Video bị lỗi gián đoạn hoặc không quay toàn màn hình.
- Đặt tiêu đề sai quy chuẩn (thiếu tag `[Area]`).
