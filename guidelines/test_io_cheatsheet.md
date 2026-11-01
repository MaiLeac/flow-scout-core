# Test IO — Flashcards Cheat Sheet

Tra cứu thuật ngữ khi đọc giao diện hoặc diễn đạt thao tác. Tổng hợp trực tiếp **21 thẻ Actions and Movements + 11 thẻ Standard Feature Descriptions**, kiểm tra cả đầu và cuối hai bộ ngày **10/10/2026**. Tên thẻ giữ theo nguồn; nghĩa tiếng Việt được diễn giải ngắn. Cột ví dụ là ví dụ tự soạn để tham khảo cách dùng từ.

## Nguồn

- [Actions and Movements in Testing Flashcards](https://testio.typeform.com/to/A066urjI)
- [Standard Feature Descriptions Flashcards](https://testio.typeform.com/to/jqju8MVv)
- Hai liên kết nằm trong **Dashboard → Available Opportunities** của Test IO. Các URL ở đây đã bỏ tham số định danh tester.

## 1. Actions and Movements — 21 thẻ

| Tên thẻ / từ khóa tiếng Anh                                                        | Nghĩa và cách phân biệt                                                                                                                                                                                               | Ví dụ dùng từ tiếng Anh                                                |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Background and Foreground of an App** — background, foreground, minimize, resume | **Backgrounding:** đưa ứng dụng xuống nền/thu nhỏ, chưa đóng ứng dụng. **Foregrounding:** đưa chính ứng dụng đang ở nền trở lại phía trước.                                                                           | Put the app in the background. / Bring the app back to the foreground. |
| **Click**                                                                          | Bấm nút chuột trái để kích hoạt một hành động.                                                                                                                                                                        | Click the "Save" button.                                               |
| **Right-click** — context menu                                                     | Bấm chuột phải để mở menu ngữ cảnh.                                                                                                                                                                                   | Right-click the image to open the context menu.                        |
| **Copy and Paste** — copy, paste                                                   | Sao chép nội dung rồi dán vào vị trí khác. Windows: Ctrl+C / Ctrl+V; macOS: Command+C / Command+V; hoặc menu chuột phải. Trên cảm ứng: nhấn giữ, chọn đoạn bằng tay nắm vùng chọn, Copy; nhấn giữ vị trí đích, Paste. | Copy the selected text. / Paste the text into the input field.         |
| **Filter** — filtering                                                             | Lọc tập nội dung theo điều kiện như kích thước, màu, thương hiệu; loại các mục không đáp ứng điều kiện.                                                                                                               | Apply the "Blue" color filter.                                         |
| **Hover** — hovering, tooltip                                                      | Đưa con trỏ lên phần tử mà không bấm; có thể hiện tooltip, menu xổ xuống hoặc trạng thái tương tác trên desktop.                                                                                                      | Hover over the information icon.                                       |
| **Long press** — long-press, long-pressing                                         | Chạm và giữ trên màn hình cảm ứng; thường mở menu tùy chọn, tương tự chuột phải.                                                                                                                                      | Long-press the message.                                                |
| **Pull to Refresh** — pull-to-refresh                                              | Kéo màn hình xuống để tải lại/cập nhật nội dung trên thiết bị cảm ứng.                                                                                                                                                | Pull down to refresh the list.                                         |
| **Pinch** — zoom                                                                   | Cử chỉ hai ngón tay để thay đổi mức phóng đại. Thẻ nguồn mô tả Pinch là thao tác zoom in. Khi mô tả thao tác thực tế, ghi thêm hướng và kết quả để tránh mơ hồ.                                                       | Use a two-finger gesture to zoom in on the image.                      |
| **Rotate** — portrait, landscape, orientation                                      | Xoay điện thoại/tablet để đổi hướng dọc ↔ ngang.                                                                                                                                                                      | Rotate the device from portrait to landscape.                          |
| **Scroll** — scrolling                                                             | Cuộn để đến phần nội dung khác trong môi trường đang dùng.                                                                                                                                                            | Scroll down to the bottom of the page.                                 |
| **Sort** — sorting                                                                 | Đổi thứ tự các mục theo tiêu chí, ví dụ giá thấp → cao hoặc mới → cũ.                                                                                                                                                 | Sort the products by price, from low to high.                          |
| **Tap**                                                                            | Chạm để kích hoạt phần tử có thể thao tác trên điện thoại/tablet.                                                                                                                                                     | Tap the "Continue" button.                                             |
| **Undo and Redo** — undo, redo                                                     | **Undo:** hoàn tác thao tác gần nhất. **Redo:** khôi phục thao tác vừa được hoàn tác.                                                                                                                                 | Undo the last change. / Redo the change.                               |
| **Deep Link** — deep link, URL                                                     | Liên kết đưa thẳng đến trang, màn hình hoặc phần cụ thể trong ứng dụng, thay vì trang chủ/màn hình chính.                                                                                                             | Open the deep link to the product screen.                              |
| **Breadcrumb** — breadcrumbs, hierarchy                                            | Thành phần điều hướng cho biết vị trí trong cấu trúc phân cấp và cho phép quay lại cấp trước.                                                                                                                         | Click "Women" in the breadcrumb trail.                                 |
| **Redirect** — redirected, forwarding                                              | Người dùng được tự động chuyển sang trang/màn hình khác, ngay lập tức hoặc sau một khoảng chờ.                                                                                                                        | The user is redirected to the login page.                              |
| **Back Navigation** — back button, back gesture                                    | Quay lại trang/màn hình vừa truy cập bằng nút Back, điều khiển trình duyệt hoặc cử chỉ hệ thống.                                                                                                                      | Use the system back gesture to return to the previous screen.          |
| **Modal Open and Close** — modal, dialog, dismiss                                  | **Modal Open:** mở hộp thoại phủ trên nội dung, cần tương tác trước khi trở lại màn hình bên dưới. **Modal Close:** đóng hộp thoại và trở về nội dung trước đó.                                                       | Open the confirmation modal. / Close the modal using the "X" button.   |
| **Expand and Collapse** — expand, collapse, accordion, dropdown                    | **Expand:** hiện nội dung đang ẩn, như menu xổ xuống/accordion/mục danh sách. **Collapse:** thu lại nội dung đã mở.                                                                                                   | Expand the "Delivery" section. / Collapse the section.                 |
| **Autofill** — auto-fill                                                           | Tự điền thông tin đã lưu vào ô nhập, như tên, địa chỉ hoặc thông tin thanh toán.                                                                                                                                      | Use autofill to populate the address fields.                           |

## 2. Standard Feature Descriptions — 11 thẻ

| Tên thẻ | Từ khóa / tên tương đương | Nghĩa và phạm vi trong flashcard |
|---|---|---|
| **Cart** | Bag, Shopping Bag, Shopping Cart, Mini Cart | Giỏ hàng: tập hợp sản phẩm để mua, sửa số lượng và bỏ mục không muốn. **Mini Cart:** bản tóm tắt giỏ hàng trong header để truy cập nhanh khi duyệt trang. |
| **Footer** | chân trang, legal links, contact info, social media | Phần dưới cùng của trang, thường chứa liên kết pháp lý, thông tin liên hệ và liên kết/icon mạng xã hội. Một số trang có thể không thiết kế footer. |
| **Header** | đầu trang | Khu vực trên cùng của website, giúp tổ chức trang và thể hiện thông tin cơ bản về website. |
| **Homepage** | home page, trang chủ | Vùng nội dung chính của trang đầu website, nằm giữa header và footer; thường là nơi truy cập từ URL chính. **Header, Navigation và Footer là các feature riêng**, trừ khi instructions chỉ định khác. |
| **Landing Page** | trang đích | Trang đến sau khi bấm liên kết, thường được thiết kế để thu hút truy cập/chuyển đổi, ví dụ liên kết quảng cáo từ tìm kiếm Google. **Header, Navigation và Footer là các feature riêng**, trừ khi instructions chỉ định khác. |
| **Login** | log in, sign in, logout, log out, sign out | Nhóm thao tác truy cập tài khoản/profile và rời khỏi phiên đăng nhập. Thẻ nguồn gọi cả phạm vi này là **Login**. |
| **My Account** | account, profile, settings | Khu vực lưu thông tin cá nhân và các cài đặt của người dùng. |
| **Navigation** | Main Navigation, Hamburger Navigation, Sticky Menu, Sidebar Navigation, Breadcrumbs Navigation | Các cơ chế di chuyển trong website/app. Bao gồm điều hướng chính, menu hamburger, menu bám khi cuộn, điều hướng thanh bên và breadcrumb. |
| **Product Detail Page** | PDP, trang chi tiết sản phẩm | Trang một sản phẩm: thông tin, thư viện ảnh/video, tùy chọn mua như size/dung tích/số lượng, sản phẩm tương tự hoặc gợi ý. |
| **Product Listing Page** | PLP, trang danh sách sản phẩm | Trang liệt kê các sản phẩm cùng một danh mục. |
| **Sign Up** | Register, sign up, registration | Nhóm thao tác tạo tài khoản. |

## 3. Tra nhanh từ mô tả thô

Các cách viết sau là gợi ý diễn đạt, không phải thẻ bổ sung của nguồn.

| Mô tả tiếng Việt | Từ/cụm tiếng Anh để tra |
|---|---|
| Thu nhỏ app rồi mở lại | background the app → bring it back to the foreground |
| Rê chuột lên icon | hover over the icon |
| Nhấn giữ tin nhắn | long-press the message |
| Kéo xuống để tải mới | pull down to refresh / pull-to-refresh |
| Xoay máy sang ngang | rotate the device to landscape |
| Cuộn trang xuống | scroll down |
| Chạm nút trên điện thoại | tap the button |
| Lọc màu xanh | apply the blue color filter |
| Xếp giá từ thấp lên cao | sort by price, from low to high |
| Tự chuyển về màn hình đăng nhập | be redirected to the login screen |
| Link mở thẳng một màn hình app | deep link |
| Dòng Home > Women > Shoes | breadcrumb trail |
| Hộp thoại phủ lên trang | modal / dialog |
| Mở/thu một mục accordion | expand / collapse the section |
| Ô tự điền địa chỉ đã lưu | autofill the address field |
| Giỏ hàng nhỏ trong đầu trang | mini cart in the header |
| Trang một sản phẩm | product detail page (PDP) |
| Trang danh sách cùng danh mục | product listing page (PLP) |

## 4. Các cặp dễ nhầm

- **Click / Tap:** chuột / cảm ứng.
- **Hover / Click:** đưa con trỏ lên / bấm.
- **Scroll / Pull to Refresh:** di chuyển đến nội dung / kéo xuống để cập nhật nội dung.
- **Filter / Sort:** thay đổi tập mục được hiển thị / thay đổi thứ tự các mục.
- **Background / Close:** đưa app xuống nền vẫn để app tồn tại; không đồng nghĩa đóng app.
- **Redirect / Back Navigation:** tự chuyển sang nơi khác / quay lại nơi vừa truy cập.
- **Deep Link / Breadcrumb:** liên kết đến đích cụ thể / điều hướng trong phân cấp.
- **Cart / Mini Cart:** giỏ hàng / phần tóm tắt nhanh trong header.
- **PDP / PLP:** một sản phẩm / danh sách sản phẩm.
- **Login / Sign Up:** truy cập tài khoản đã có / tạo tài khoản.
- **Homepage / Landing Page:** trang chủ / trang đích của một liên kết hoặc chiến dịch; landing page không nhất thiết là homepage.

## 5. Prompt tra thuật ngữ với AI — tùy chọn

```text
Dựa trên Test IO — Flashcards Cheat Sheet, chuẩn hóa từ vựng trong mô tả thô bên dưới.
Chỉ trả về: (1) thuật ngữ phù hợp + nghĩa tiếng Việt; (2) câu tiếng Anh ngắn giữ đúng ý gốc.
Giữ nguyên tên UI và dữ kiện tôi cung cấp. Nếu một từ có nhiều cách hiểu, nêu các lựa chọn để tôi tự chọn.
Đây là tra cứu và biên tập câu chữ; không tự tạo report hoặc suy luận thêm hành vi.

Mô tả thô: [...]
```

## 6. Ghi chú đối chiếu

- Đã đọc từ thẻ đầu đến thẻ cuối của hai bộ; bộ Actions bắt đầu bằng **Background and Foreground of an App**, kết thúc bằng **Autofill**; bộ Features bắt đầu bằng **Cart**, kết thúc bằng **Sign Up**.
- Bộ Actions có cả một số tên thành phần/khái niệm điều hướng. Giữ đúng nhóm của flashcard, không tự đổi danh mục.
- **Pinch:** giữ lại cách gọi trong nguồn. Để mô tả chính xác hướng zoom, có thể bổ sung *pinch out to zoom in* (tách hai ngón) hoặc *pinch in to zoom out* (chụm hai ngón). Đây là phần làm rõ cách diễn đạt, không phải nội dung nguyên văn của thẻ.
- Đây là bảng thuật ngữ tham khảo. Quy tắc report được lưu trong [[Sổ tay Test IO Academy]].
