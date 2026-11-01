# Bug Lessons

Cập nhật: 2026-10-29. Các bài học dưới đây dựa trên nguồn đã xem; status và giới hạn truy cập được ghi rõ. Không suy đoán nguyên nhân reviewer từ nhãn trạng thái đơn lẻ.

## Bài học đã có chứng cứ

1. **Approved chưa chắc đáng tiếp tục săn.** [Celine #7292278](https://platform.utest.com/testcycles/562001/issues/7292278) hiện `Approved` nhưng `Won’t Fix`. Tooltip của uTest nói bug có thể đúng về kỹ thuật nhưng không có kế hoạch sửa và khuyên tránh báo các bug tương tự cho sản phẩm này. Với Celine, ưu tiên cơ chế khác thay vì lặp lại lỗi editorial grid.
2. **Một mục cụ thể là mốc đối chiếu tốt hơn phỏng đoán về filter.** [OneTravel #7297173](https://platform.utest.com/testcycles/562706/issues/7297173) dùng đúng chuyến VietJet, ngày, giờ và trang review ghi carry-on included, rồi chứng minh filter làm chuyến biến mất. [#7298627](https://platform.utest.com/testcycles/562706/issues/7298627) so icon preview với baggage information trong review. Cách này tạo kỳ vọng từ chính sản phẩm.
3. **So app và web cùng điều kiện giúp loại trừ giả thuyết mất mạng.** [Genius #7290340](https://platform.utest.com/testcycles/562000/issues/7290340) ghi app lỗi Add a Song dù mobile web hoạt động trên cùng thiết bị/mạng. Điều đó củng cố bug app, nhưng chưa chứng minh nguyên nhân ở API hay WebView.
4. **Bug visual nhỏ vẫn có thể hợp lệ.** [Genius #7290242](https://platform.utest.com/testcycles/562000/issues/7290242) được duyệt ở mức Low vì highlight annotation không phủ hết lyric. Độ nghiêm trọng thấp không tự động làm bug vô giá trị.
5. **Trạng thái báo cáo thay đổi theo thời gian.** Danh sách [OneTravel #562706](https://platform.utest.com/testcycles/562706/issues) có cả New, Approved, Approved (WNF), Rejected (WAD) vào 2026-10-29. Trước khi học từ một bug hoặc kiểm tra duplicate, mở lại trang đúng cycle; không giữ ảnh chụp cũ làm kết luận cuối.
6. **Empty state chỉ là lỗi khi mất đường phục hồi.** [TesterTudo #2085731](https://testertudo.com/bug-2085731/) mô tả giá $400–$500 trả 0 sản phẩm, nhưng filter cũng biến mất nên không thể gỡ. Đừng báo chỉ vì 0 kết quả; kiểm tra xem người dùng còn xoá được điều kiện không.
7. **Dữ liệu của đối tượng trước có thể rò sang đối tượng sau.** [TesterTudo #1941791](https://testertudo.com/bug-1941791/) mô tả từ khóa tìm trong review của sản phẩm trước tự áp vào review sản phẩm tiếp theo, chỉ còn 1/85 review. Nên thử chuyển đối tượng khi đang có search/filter active; kiểm tra có thể xoá trạng thái cũ không.
8. **Tách hai tài khoản trước khi kết luận lỗi session.** [TesterTudo #2072602](https://testertudo.com/bug-2072602/) mô tả sản phẩm trong giỏ A còn khi đăng xuất và đăng nhập B. Một số sản phẩm cố ý giữ guest cart trên cùng trình duyệt, nên phải phân biệt cơ chế đó với việc dữ liệu A xuất hiện như giỏ riêng của B.

## Các bẫy dương tính giả và phép thử ngắn

| Tín hiệu đáng ngờ | Giải thích bình thường có thể có | Kiểm tra nhanh |
|---|---|---|
| Giá đổi giữa các trang | inventory hoặc fare vừa đổi; giá mỗi người, mỗi đêm, tổng hoặc USD thanh toán là các loại giá khác nhau | Giữ ngày/fare/khách cố định; đọc nhãn và đơn vị trước khi so |
| Một chuyến biến mất sau lọc baggage | fare chọn không có baggage, điều kiện áp cho chặng khác, inventory đổi | So **cùng** chuyến và fare với baggage trên review |
| Filter vẫn có vẻ tác động sau back/refresh | sản phẩm lưu điều kiện trong URL hoặc session theo thiết kế | Xem chip và query URL; xoá filter qua UI rồi đối chiếu tập kết quả |
| Ảnh editorial nằm trong lưới | ô editorial có thể là layout chủ ý | Chứng minh tile sản phẩm thật sự bị che/không thể chọn; xem viewport và danh mục đối chiếu |
| Widget bản đồ/trang nhúng không tải | nguồn bên thứ ba tạm lỗi, chặn mạng hoặc dữ liệu địa điểm không có | Thử một địa điểm khác và cùng địa điểm ở dịch vụ gốc, nếu scope cho phép |

Nếu phép kiểm tra ngắn chưa phân biệt được lỗi và hành vi bình thường, ghi **chưa kết luận** rồi chuyển hướng; không tự đặt expected result vì thấy UX “lạ”.

## Rejected, duplicate và thiếu chứng cứ

- [OneTravel #7298370](https://platform.utest.com/testcycles/562706/issues/7298370), [#7298168](https://platform.utest.com/testcycles/562706/issues/7298168) và [#7298090](https://platform.utest.com/testcycles/562706/issues/7298090) hiện `Rejected (WAD)` trong danh sách. Chưa đọc feedback từng issue, nên **không** kết luận chính xác vì sao bị WAD. Chúng là lời nhắc phải tìm kỳ vọng có căn cứ trước khi báo.
- Cùng tiêu đề về flight status xuất hiện ở [#7298090](https://platform.utest.com/testcycles/562706/issues/7298090) (`Rejected (WAD)`) và [#7298937](https://platform.utest.com/testcycles/562706/issues/7298937) (`New`). Chưa đủ chi tiết để gọi là duplicate. So điều kiện và kết quả thực tế trước.
- Cycle Genius #562000 và Charles Proxy #562001 ghi **Hidden Bugs**: chỉ xem được issue của mình. Issue list của cả hai trả `No Results Found` trong lần kiểm tra này, nhưng các URL issue của chính người dùng mở được. Vì vậy không thể tuyên bố đã kiểm tra duplicate đầy đủ ở hai cycle này.
- Báo cáo mới [OneTravel #7299221](https://platform.utest.com/testcycles/562706/issues/7299221) về bản đồ xe thuê còn `New` lúc xem. Giữ làm lead riêng, không đưa vào heuristic đã xác nhận.
- Không thấy bằng chứng đáng tin về các report `Cannot Reproduce` hoặc lý do reviewer cho từng report bị từ chối. Chưa thêm bài học cụ thể về CNR, duplicate rejection hay thiếu attachment.

## Quy trình thu thập tiết kiệm thời gian

1. Lấy cycle overview và nguồn expected trước khi thử.
2. Chọn một đối tượng, ghi ID/đặc điểm đủ phân biệt.
3. Làm một thay đổi mỗi lần; so trước/sau bằng cùng loại giá, ngày, fare hoặc tài khoản.
4. Dừng sớm khi dữ liệu động hoặc quy tắc sản phẩm giải thích được hiện tượng.
5. Nếu thấy bug, kiểm tra issue list của **cycle đang làm**; thư viện chiến lược không xác nhận duplicate.
6. Chỉ sau khi lead đủ mạnh mới thu video, screenshot và log theo yêu cầu riêng của cycle. Với log console cần giữ timestamp và navigation từ homepage nếu cycle yêu cầu.

## Phạm vi nguồn và việc còn thiếu

- Đã truy cập trực tiếp 3 issue cũ của người dùng, 2 issue chi tiết OneTravel, 1 issue mới OneTravel và danh sách 40 issue OneTravel (danh sách chủ yếu cho tiêu đề/status). Đã mở [trang tìm bug TesterTudo](https://testertudo.com/?s=bug), [bảng 91 mục](https://testertudo.com/bug-list/) và đọc 3 bài chi tiết. Bảng tự giới thiệu là các report đã được duyệt, nhưng chưa kiểm tra trạng thái trên Test IO/uTest gốc.
- Chưa có phản hồi reviewer gốc cho các bài Test IO; chưa có đủ report CNR. Bảng 91 mục là danh mục để chọn nguồn, không phải 91 report đã được đọc chi tiết. Khi có thêm bằng chứng, cập nhật heuristic hiện có thay vì sinh nhiều mục gần trùng.
- Không chép tên tester, thông tin tài khoản, URL phiên tìm kiếm hoặc nội dung attachment cá nhân vào hai file.
