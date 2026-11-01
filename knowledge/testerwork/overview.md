# TesterWork Platform Intelligence & Architecture Overview

> [!IMPORTANT]
> **Quy tắc Cách ly Nền tảng Tuyệt đối (Strict Platform Isolation)**:
> Không bao giờ nhầm lẫn quy chuẩn của TesterWork với Testlio hay uTest:
> - **Cơ chế thu nhập**: TesterWork chi trả tiền thưởng theo từng bug được duyệt + thù lao cho từng Test Case hoàn thành (hoặc test execution theo cycle), thanh toán qua **PayPal** hoặc **Upwork**.
> - **Quy chuẩn Báo cáo lỗi**: Báo cáo trực tiếp trên cổng TesterWork; bắt buộc có tiêu đề rõ ràng theo cấu trúc hành động và lỗi, các bước tái hiện (Steps to Reproduce) chi tiết từng bước, kết quả thực tế (Actual Result), kết quả mong đợi (Expected Result).
> - **Phân loại lỗi**: Functional (Chức năng), UI/Visual (Giao diện), Crash/Performance (Hiệu năng/Treo ứng dụng).

---

## 1. Thông tin Đội Thiết bị Đăng ký (Registered Device Fleet)
- **Windows PC**: Windows 11 Home — Chrome Browser
- **Xiaomi 13 Pro**: Android 15
- **Redmi C53**: Android 15

---

## 2. Tiêu chí Đánh giá Bài kiểm tra Đầu vào (Online Assessment)
- Điểm đỗ bắt buộc: **≥ 80%**.
- Số lần thi tối đa: 2 lần (nếu trượt lần 1, phải ôn lại hướng dẫn trước khi làm lần 2).
- Nội dung trắc nghiệm tập trung vào:
  1. Phân biệt Bug Chức năng (Functional) và Bug Giao diện (UI).
  2. Cách viết Steps to Reproduce rõ ràng, ai đọc cũng làm lại được.
  3. Định nghĩa đúng mức độ nghiêm trọng: Critical, Major, Minor.
  4. Quy định về thiết bị và file đính kèm (Screenshot / Video quay màn hình).

---

## 3. Bản đồ Tài nguyên TesterWork trong Repo
- `guidelines/tester_work_handbook.md`: Cẩm nang hướng dẫn toàn diện từ A-Z cho tester trên TesterWork.
- `knowledge/testerwork/assessment-prep.md`: Bộ câu hỏi & đáp án mẫu bài kiểm tra đánh giá đầu vào.
- `knowledge/testerwork/source-links.md`: Tổng hợp các liên kết chính thức tới cổng TesterWork.
