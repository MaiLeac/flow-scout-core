# TesterWork Assessment Test Preparation & Answer Key

Bộ cẩm nang và ngân hàng câu hỏi chuẩn bị cho bài kiểm tra trực tuyến (Online Assessment) trên cổng **TesterWork** (`https://testers.testerwork.com/`).

---

## 1. Nguyên tắc Trả lời Câu hỏi Đánh giá TesterWork

### 1.1 Phân biệt Loại Lỗi (Bug Types)
- **Functional Bug (Lỗi chức năng)**: Bất kỳ hành vi nào của ứng dụng hoặc website không hoạt động đúng theo logic thiết kế (ví dụ: bấm nút Mua không thêm vào giỏ, bấm Đăng nhập với mật khẩu đúng nhưng báo lỗi, tính sai tổng tiền).
- **UI / Visual Bug (Lỗi giao diện)**: Lỗi về hiển thị thẩm mỹ, bố cục, căn chỉnh lề, vỡ chữ, đè chữ, sai màu sắc mà không làm gián đoạn luồng chức năng.
- **Crash Bug (Treo / Thoát ứng dụng đột ngột)**: Ứng dụng tự động đóng hoặc màn hình trắng xóa không thể thao tác tiếp.

### 1.2 Mức độ Nghiêm trọng (Severity Levels)
1. **Critical**: Ứng dụng bị sập hoàn toàn (Crash), mất dữ liệu người dùng, hoặc chặn đứng hoàn toàn luồng chính (không thể Đăng ký, Đăng nhập, hoặc Thanh toán).
2. **Major**: Một chức năng quan trọng bị hỏng nhưng có giải pháp thay thế (workaround), hoặc chức năng phụ bị lỗi nghiêm trọng.
3. **Minor**: Lỗi nhỏ không ảnh hưởng đến trải nghiệm tổng thể (lỗi hiển thị nhỏ, icon lệch vị trí, văn bản sai ngữ pháp nhẹ).

---

## 2. Ngân hàng Câu hỏi Trắc nghiệm Mẫu (Assessment Q&A Master Key)

### Câu 1: Thế nào là một tiêu đề bug tốt trên TesterWork?
- **Đáp án đúng**: Tiêu đề phải nêu rõ: **Tính năng/Màn hình ở đâu + Hành động người dùng làm gì + Kết quả lỗi xảy ra là gì**.
- *Ví dụ chuẩn*: `[Checkout] Clicking "Pay with Card" button with valid details causes "An unexpected error occurred" popup`.

### Câu 2: Các bước tái hiện (Steps to Reproduce) cần viết như thế nào?
- **Đáp án đúng**: Bắt đầu bằng điều kiện tiên quyết (Preconditions), liệt kê từng bước bằng số thứ tự (1, 2, 3...) bắt đầu bằng động từ hành động (Open, Click, Type, Select), không gộp nhiều hành động vào một bước.

### Câu 3: Khi phát hiện một lỗi trong test cycle, bạn nên làm gì đầu tiên?
- **Đáp án đúng**: Tìm kiếm trong danh sách Known Issues / Bugs already reported của cycle để đảm bảo lỗi đó chưa được người khác báo cáo trước (tránh bị từ chối do trùng lặp - Duplicate).

### Câu 4: Khi nào một tester được phép nhận tiền thanh toán?
- **Đáp án đúng**: Sau khi test cycle kết thúc, các lỗi được Test Lead / Client phê duyệt (Approved). Thanh toán được xử lý định kỳ qua tài khoản PayPal hoặc Upwork đã liên kết.

### Câu 5: Yêu cầu về bằng chứng (Attachment) trên TesterWork là gì?
- **Đáp án đúng**: Ảnh chụp màn hình (Screenshot) cho lỗi giao diện, và Video quay màn hình (Screen recording) ghi lại toàn bộ quá trình tái hiện từ đầu đến cuối đối với lỗi chức năng và crash.
