# Master Bug Library

Cập nhật: 2026-10-29. Mục đích: chọn vài phép thử phù hợp với **scope của cycle hiện tại**, rồi xác minh nhanh tín hiệu lỗi. Thư viện này không xác nhận duplicate và không thay thế issue list của cycle mới.

## Cách dùng trong một cycle mới

1. Đọc overview, phạm vi, loại lỗi bị loại trừ và yêu cầu bằng chứng.
2. Chọn 2–3 heuristic khớp chức năng thật sự có trên sản phẩm. Nêu giả thuyết và mốc đối chiếu trước khi thử.
3. Làm phép kiểm tra rẻ nhất trước. Nếu kết quả còn mơ hồ, ghi **chưa kết luận**.
4. Tra issue list của cycle hiện tại trước khi báo cáo; so chức năng, điều kiện, kết quả và bước tái hiện. Bug cùng cơ chế ở sản phẩm khác không tự động là duplicate.

## Nguồn và mức chứng cứ

- **U1–U3:** issue uTest của người dùng trong các cycle Academy cũ, đã mở trực tiếp trang chi tiết. U1 [Genius #7290242](https://platform.utest.com/testcycles/562000/issues/7290242): Approved, highlight annotation chỉ phủ một phần lyric. U2 [Genius #7290340](https://platform.utest.com/testcycles/562000/issues/7290340): Approved, Add a Song trên Android báo không kết nối, trong khi mobile web trên cùng thiết bị và mạng tải được. U3 [Celine #7292278](https://platform.utest.com/testcycles/562001/issues/7292278): Approved nhưng Won’t Fix; ảnh editorial trong danh mục Soft Triomphe che bốn tile sản phẩm ở bản en-vn.
- **U4–U5:** issue OneTravel đã mở trực tiếp trang chi tiết. U4 [#7297173](https://platform.utest.com/testcycles/562706/issues/7297173): Approved, lọc carry-on ẩn chuyến VietJet dù trang review ghi carry-on included. U5 [#7298627](https://platform.utest.com/testcycles/562706/issues/7298627): Approved, icon hành lý ở kết quả tìm kiếm không khớp chi tiết ở review.
- **U6:** [Danh sách issue cycle OneTravel #562706](https://platform.utest.com/testcycles/562706/issues), đọc ngày 2026-10-29. Danh sách cho thấy status/tên issue, nhưng các mục không mở chi tiết chỉ hỗ trợ cơ chế ở mức vừa phải. Ví dụ Approved: [#7297646](https://platform.utest.com/testcycles/562706/issues/7297646) tổng tiền giảm sau thêm rồi xoá người lớn; [#7297934](https://platform.utest.com/testcycles/562706/issues/7297934) giá trả góp tháng còn USD sau đổi EUR; [#7297698](https://platform.utest.com/testcycles/562706/issues/7297698) bộ lọc hãng bay vẫn tác động sau khi để trống; [#7297946](https://platform.utest.com/testcycles/562706/issues/7297946) ngày check-in không khớp ngày chọn; [#7297158](https://platform.utest.com/testcycles/562706/issues/7297158) phòng thứ hai và khách bị thiếu trên trang kết quả; [#7297626](https://platform.utest.com/testcycles/562706/issues/7297626) shortlist mất sau refresh/không đồng bộ với trang chi tiết; [#7297917](https://platform.utest.com/testcycles/562706/issues/7297917) lọc tên khách sạn không hiện kết quả khớp; [#7297678](https://platform.utest.com/testcycles/562706/issues/7297678) giá xe ngoài khoảng lọc. Status có thể đổi; xem lại trước khi dùng.
- **T1:** [TesterTudo, trang tìm “bug”](https://testertudo.com/?s=bug) dẫn tới [bảng bug-list](https://testertudo.com/bug-list/) gồm **91 dòng** do TesterTudo tuyển chọn và giới thiệu là bug đã được Test IO/uTest duyệt. Đây là lời xác nhận của trang tổng hợp, chưa phải kiểm tra trạng thái trực tiếp trên nền tảng gốc. Đã đọc chi tiết ba bài: [#2085731](https://testertudo.com/bug-2085731/) filter biến mất khi không có kết quả; [#1941791](https://testertudo.com/bug-1941791/) từ khóa tìm review rò sang sản phẩm tiếp theo; [#2072602](https://testertudo.com/bug-2072602/) giỏ hàng còn sau đăng xuất và hiện ở tài khoản thứ hai. Bảng cũng chứa nhiều tiêu đề khác nhưng chưa đọc chi tiết, chỉ coi là lead.

## H-01 — Điều kiện lọc mâu thuẫn với chi tiết của cùng một mục

- **Cơ chế:** dữ liệu dùng để lọc/hiển thị ở danh sách khác dữ liệu của trang chi tiết.
- **Điều kiện:** mục có thuộc tính được hiển thị ở cả kết quả và review/chi tiết; có bộ lọc tương ứng.
- **Thử:** ghi một mục cụ thể và thuộc tính ở trang chi tiết; quay lại kết quả, bật bộ lọc rồi tìm đúng mục đó.
- **Kỳ vọng có căn cứ:** mục mang thuộc tính “included” ở review phải còn trong tập kết quả khi lọc chính thuộc tính đó.
- **Tín hiệu:** mục biến mất, hoặc icon preview trái với chi tiết.
- **Dương tính giả:** fare khác, chuyến khác, baggage chỉ áp dụng cho một chặng/khách, tồn kho thay đổi.
- **Kiểm tra rẻ nhất:** so cùng flight, ngày, fare, số khách trước/sau; kiểm tra một mục duy nhất trước khi thử nhiều bộ lọc.
- **Scope:** chỉ thử các fare và bộ lọc được cycle cho phép; không đặt vé.
- **Nguồn:** U4, U5. **Tin cậy: cao.**

## H-02 — Trạng thái hoặc dữ liệu bị rơi khi qua trang, back hoặc refresh

- **Cơ chế:** một bước chuyển trang/đổi lựa chọn không giữ đủ dữ liệu đã chọn.
- **Điều kiện:** luồng nhiều bước như tìm kiếm → review, nhiều phòng/khách, shortlist, đổi fare.
- **Thử:** ghi trạng thái đầu vào cụ thể; đi tiếp hoặc back một lần; so từng trường còn lại.
- **Kỳ vọng có căn cứ:** dữ liệu mà giao diện nói đã chọn/đã lưu phải được chuyển sang bước kế tiếp, trừ khi UI thông báo reset hoặc điều kiện thay đổi.
- **Tín hiệu:** thiếu phòng/khách, mất baggage, shortlist mất sau refresh, bộ lọc cũ vẫn áp dụng dù giao diện đã xoá.
- **Dương tính giả:** bước mới cố ý reset; session hết hạn; fare hoặc inventory thay đổi; shortlist chỉ lưu tạm theo thiết kế.
- **Kiểm tra rẻ nhất:** chụp tóm tắt đầu vào và tóm tắt ngay sau chuyển trang; thử refresh/back một lần và xem UI có giải thích việc reset không.
- **Scope:** đọc quy tắc về persistence, tài khoản và dữ liệu thử của cycle.
- **Nguồn:** U6 #7297158, #7297626, #7297698, #7296911 (các issue Approved trong danh sách); T1 #1941791 (đã đọc bước và kết quả). **Tin cậy: trung bình** vì phần lớn issue uTest chưa mở chi tiết.

## H-03 — Tổng tiền hoặc đơn vị tiền không đồng bộ giữa các thành phần

- **Cơ chế:** phép tính hoặc chuyển đổi tiền tệ chỉ cập nhật một phần UI; thêm rồi xoá tùy chọn không trở lại giá trị hợp lệ.
- **Điều kiện:** có đổi currency, nhiều cách hiển thị giá, thêm/xoá khách hoặc phụ phí.
- **Thử:** giữ nguyên hành trình và fare; ghi giá ban đầu; đổi đúng một biến rồi so tổng và đơn vị tiền ở từng vùng.
- **Kỳ vọng có căn cứ:** cùng một loại giá/đơn vị trên cùng màn hình phải nhất quán; nếu giao diện nói tổng tiền đã cập nhật thì phép tính phải phản ánh lựa chọn hiện tại.
- **Tín hiệu:** một phần còn USD sau khi chọn EUR; tổng giảm bất thường sau thêm rồi xoá một người.
- **Dương tính giả:** giá động, tỷ giá làm tròn, giá mỗi đêm so với cả kỳ, giá mỗi khách so với tổng, phí xuất hiện ở checkout, USD là tiền thanh toán còn đồng khác là ước tính.
- **Kiểm tra rẻ nhất:** so nhãn đơn vị và công thức hiển thị; thực hiện A → B → A trong một session ngắn, không thay ngày/fare.
- **Scope:** không thanh toán; cần ghi rõ currency, thời điểm và loại giá.
- **Nguồn:** U6 #7297646, #7297934. **Tin cậy: trung bình** (danh sách có status Approved, chưa đọc chi tiết).

## H-04 — Ngày và số lượng đầu vào không khớp kết quả

- **Cơ chế:** thông số tìm kiếm bị đổi hoặc bỏ qua trên trang kết quả.
- **Điều kiện:** đặt ngày, số phòng, số khách hay chặng trong form rồi có trang tổng kết/kết quả.
- **Thử:** ghi các giá trị đã xác nhận trước khi Search; so chip/tóm tắt trên trang kết quả.
- **Kỳ vọng có căn cứ:** ngày, phòng và số khách sau Search phản ánh lựa chọn đã submit, trừ điều chỉnh được nêu rõ.
- **Tín hiệu:** ngày check-in khác, phòng thứ hai hoặc khách của phòng đó biến mất.
- **Dương tính giả:** múi giờ/định dạng ngày, khách sạn gộp phòng, form tự điều chỉnh vì hạn chế inventory và có thông báo.
- **Kiểm tra rẻ nhất:** so ngay form trước Search và header kết quả sau Search; không cần đi tới thanh toán.
- **Scope:** chỉ dùng dữ liệu thử cho phép; đừng mặc định lỗi nếu sản phẩm nêu quy tắc điều chỉnh.
- **Nguồn:** U6 #7297946, #7297158. **Tin cậy: trung bình.**

## H-05 — Lọc tên/giá cho kết quả trái điều kiện vừa chọn

- **Cơ chế:** điều kiện lọc được hiển thị là active nhưng tập kết quả không tuân theo.
- **Điều kiện:** có chip hoặc sidebar thể hiện bộ lọc và có thuộc tính có thể đối chiếu trên card.
- **Thử:** chọn một điều kiện rõ ràng; đọc chip active; so 1–2 card với điều kiện.
- **Kỳ vọng có căn cứ:** card phải thỏa điều kiện theo đúng loại giá/tên được UI dùng.
- **Tín hiệu:** giá card ngoài khoảng lọc; tên khách sạn khớp nhưng bị loại.
- **Dương tính giả:** giá mỗi ngày so tổng chuyến, thuế/phí, tên thương hiệu so tên khách sạn, filter chỉ áp dụng khu vực/khoảng thời gian khác.
- **Kiểm tra rẻ nhất:** xác định đơn vị và cơ sở tính của filter, rồi so một card cụ thể; thử bỏ filter để xem card có quay lại.
- **Scope:** tuân theo quy tắc giá/availability của cycle.
- **Nguồn:** U6 #7297678, #7297917. **Tin cậy: trung bình.**

## H-06 — Tính năng chạy ở một bề mặt nhưng hỏng ở bề mặt cùng mạng

- **Cơ chế:** luồng tích hợp hoặc trang nhúng của app không mở được dù phiên bản web tương ứng mở được.
- **Điều kiện:** cùng chức năng có app và web, trên cùng thiết bị/mạng, hoặc có retry rõ ràng.
- **Thử:** mở tính năng trong app; thử Retry một lần; đối chiếu chức năng tương đương trên web cùng thời điểm.
- **Kỳ vọng có căn cứ:** trang Add a Song phải tải được khi dịch vụ hoạt động và web của chính sản phẩm tải được trên cùng thiết bị/mạng.
- **Tín hiệu:** lỗi kết nối cố định chỉ ở app.
- **Dương tính giả:** web và app dùng quyền/tài khoản/API khác nhau; lỗi dịch vụ tạm thời; mất mạng; app build cũ.
- **Kiểm tra rẻ nhất:** cùng mạng, cùng thời gian, cùng tài khoản nếu có; thử lại app sau khi web tải thành công.
- **Scope:** chỉ so bề mặt và thiết bị được phép; không suy luận nguyên nhân backend từ thông báo lỗi.
- **Nguồn:** U2. **Tin cậy: cao** cho tín hiệu khác biệt; nguyên nhân kỹ thuật chưa biết.

## H-07 — Giao diện che nội dung hoặc đánh dấu sai vùng liên quan

- **Cơ chế:** ảnh, overlay hoặc highlight render sai vị trí/kích thước so với nội dung nó phải gắn vào.
- **Điều kiện:** product grid có editorial media hoặc nội dung được highlight/annotation.
- **Thử:** xem vùng grid ở nhiều hàng, hoặc mở annotation đã có; kiểm tra mục có thực sự bị che/không thể chọn hay chỉ là một tile được chủ ý thay thế.
- **Kỳ vọng có căn cứ:** nội dung sản phẩm có thể xem/chọn; highlight ứng với toàn bộ đoạn lyric được annotation.
- **Tín hiệu:** bốn tile mất hoàn toàn dưới ảnh; highlight chỉ bao một phần lyric.
- **Dương tính giả:** editorial tile cố ý chiếm chỗ trong grid; dòng lyric được chia theo thiết kế; ảnh chỉ che do zoom hoặc viewport bất thường.
- **Kiểm tra rẻ nhất:** so ở cùng viewport sau reload và một danh mục tương tự; thử chọn vị trí tile; đối chiếu đoạn lyric gốc với vùng highlight.
- **Scope:** bug visual có thể bị loại hoặc Won’t Fix dù được xác nhận. U3 đặc biệt **Approved + Won’t Fix**, nên không coi đây là hướng ưu tiên cho chính Celine.
- **Nguồn:** U1, U3. **Tin cậy: cao** về hiện tượng, **thấp** về giá trị sửa ở Celine.

## Lead chưa đủ bằng chứng

- Bảng tổng hợp TesterTudo có một số trường hợp visual nhỏ (như khoảng trống bất thường giữa hai bài báo) có thể bị phân loại là editorial layout hoặc WAD tùy theo quy tắc cycle.

## H-10 — Con trỏ nhảy và lỗi mask định dạng (Input Mask & Caret Snap)

- **Cơ chế:** trường nhập liệu có format mask tự động (như số thẻ tín dụng `XXXX XXXX XXXX XXXX`, số điện thoại `(XXX) XXX-XXXX`) bị lỗi re-render: mỗi khi người dùng đặt con trỏ ở giữa chuỗi để sửa/xoá, hàm định dạng tự dồn con trỏ về cuối trường nhập liệu hoặc làm sai lệch các chữ số phía sau.
- **Điều kiện:** form nhập thông tin thanh toán, địa chỉ giao hàng, số điện thoại, ngày sinh.
- **Thử:** nhập đầy đủ một dãy số hợp lệ; dùng chuột hoặc phím mũi tên đặt con trỏ vào giữa dãy số (vị trí ký tự thứ 4 hoặc 5); nhấn `Backspace` hoặc gõ thêm 1 chữ số.
- **Kỳ vọng có căn cứ:** con trỏ phải giữ đúng vị trí đang chỉnh sửa; ký tự trước con trỏ bị xoá hoặc ký tự mới được chèn vào đúng vị trí.
- **Tín hiệu:** con trỏ nhảy ngay lập tức về cuối chuỗi; hoặc các chữ số phía sau bị biến đổi bất thường.
- **Dương tính giả:** trường nhập liệu plain text không dùng mask; thiết bị có auto-correct/IME riêng can thiệp.
- **Kiểm tra rẻ nhất:** thử trên desktop Chrome với bàn phím chuẩn; quan sát vị trí con trỏ sau đúng 1 phím Backspace.
- **Nguồn:** TesterTudo #1976079, #1976776, #943362. **Tin cậy: cao** (các bug Functional đã được duyệt trên uTest/Test IO).

## H-11 — Giới hạn biên giỏ hàng và danh sách so sánh (Cart Overflow & Upper Boundary)

- **Cơ chế:** hệ thống quản lý giỏ hàng/phiên làm việc bị crash, tràn bộ nhớ client state hoặc lỗi microservice khi số lượng sản phẩm vượt ngưỡng bình thường (ví dụ > 40 sản phẩm) hoặc khi thay đổi số lượng lớn ở bước thanh toán.
- **Điều kiện:** trang thương mại điện tử cho phép thêm nhiều sản phẩm hoặc chỉnh sửa số lượng trong giỏ.
- **Thử:** thêm liên tục nhiều sản phẩm (20, 30, 45 sản phẩm); hoặc thay đổi số lượng từ 1 lên 99 rồi nhấn ngay nút Proceed to Checkout.
- **Kỳ vọng có căn cứ:** hệ thống phải hiển thị thông báo giới hạn rõ ràng nếu có trần tối đa; không được xóa sạch giỏ hàng hoặc quăng unhandled exception màn hình trắng.
- **Tín hiệu:** toàn bộ sản phẩm trong giỏ biến mất (`cart items disappeared`); hoặc hiển thị thông báo lỗi hệ thống 'Something went wrong'.
- **Dương tính giả:** tồn kho hết; sản phẩm bị gỡ khỏi catalogue; hệ thống cố ý giới hạn có kèm thông báo lỗi rõ ràng.
- **Kiểm tra rẻ nhất:** thêm sản phẩm có sẵn hàng; kiểm tra giỏ sau mỗi mốc 10 sản phẩm; chụp network tab nếu có lỗi 500.
- **Nguồn:** TesterTudo #2016865, #105559, #882522, #1987488. **Tin cậy: cao.**

## H-12 — Rò rỉ tìm kiếm/đánh giá giữa các đối tượng khác nhau (Cross-Entity State Leakage)

- **Cơ chế:** ứng dụng đơn trang (SPA) không dọn dẹp state bộ lọc cục bộ khi người dùng chuyển hướng giữa các sản phẩm hoặc danh mục có liên quan.
- **Điều kiện:** trang chi tiết sản phẩm (PDP) có tính năng tìm kiếm trong review hoặc bộ lọc đánh giá sao; có link sang sản phẩm khác.
- **Thử:** ở sản phẩm A, áp dụng bộ lọc đánh giá (ví dụ lọc 5 sao, hoặc tìm từ khóa 'size'); bấm vào sản phẩm B được gợi ý ở dưới; quan sát khu vực review của sản phẩm B.
- **Kỳ vọng có căn cứ:** sản phẩm B phải hiển thị toàn bộ đánh giá mặc định của nó; không được tự động áp bộ lọc hoặc từ khóa của sản phẩm A.
- **Tín hiệu:** sản phẩm B chỉ hiện 1/85 review vì bị dính từ khóa của sản phẩm A mà không có thanh gỡ bỏ; hoặc bộ lọc size của danh mục trước vẫn áp lên danh mục sau.
- **Dương tính giả:** bộ lọc toàn cục (global store filter) được thiết kế có chủ ý trên toàn site và có chip hiển thị rõ ràng cho phép người dùng xoá.
- **Kiểm tra rẻ nhất:** kiểm tra xem có chip bộ lọc để tắt hay không; nếu UI không cho tắt nhưng số lượng review bị rút ngắn bất thường thì đó là state leakage.
- **Nguồn:** TesterTudo #1941791, #1941819, #2085481. **Tin cậy: cao.**

## H-13 — Vượt rào quy tắc giao hàng địa lý và validation form (Geographic & Rule Bypass)

- **Cơ chế:** quy tắc nghiệp vụ hạn chế địa lý hoặc định dạng trường form chỉ được kiểm tra hời hợt hoặc bị bỏ lọt ở khâu checkout/submit.
- **Điều kiện:** sản phẩm có ràng buộc giao hàng nội địa (như 'Ships to Canada only'); form đăng ký có yêu cầu định dạng mật khẩu/email.
- **Thử:** chọn sản phẩm bị giới hạn vùng giao hàng; ở bước checkout nhập địa chỉ nước ngoài; hoặc nhập email không đúng định dạng chuẩn ở form quên mật khẩu.
- **Kỳ vọng có căn cứ:** hệ thống phải chặn lại ở bước tính phí ship/xem lại đơn hàng và báo lỗi rõ ràng; không cho phép hoàn tất đơn hàng với địa chỉ không thể giao.
- **Tín hiệu:** hệ thống cho phép đặt hàng thành công sang quốc gia ngoài vùng hỗ trợ; hoặc form thông báo đã gửi link reset cho email không hợp lệ.
- **Dương tính giả:** chính sách giao hàng quốc tế qua bên thứ ba (cross-border forwarding) được hỗ trợ ngầm; email được xử lý backend async.
- **Kiểm tra rẻ nhất:** đối chiếu trực tiếp mô tả sản phẩm ('shipped within Canada only') với danh sách quốc gia cho phép chọn ở checkout.
- **Nguồn:** TesterTudo #1976172, #2017496, #1976054. **Tin cậy: cao.**

## H-08 — Bộ lọc tự biến mất khi kết quả rỗng

- **Cơ chế:** trạng thái không có kết quả làm mất luôn điều khiển để gỡ điều kiện đang chọn.
- **Điều kiện:** trang danh sách có filter và một tổ hợp điều kiện cho 0 kết quả.
- **Thử:** áp một khoảng giá hoặc bộ lọc tạo tập rỗng; xem chip, bộ lọc và nút clear còn thao tác được không.
- **Kỳ vọng có căn cứ:** người dùng có đường quay lại kết quả bằng cách gỡ filter; bài T1 #2085731 ghi chính bộ lọc biến mất và không thể huỷ trên UI.
- **Tín hiệu:** trang trắng/rỗng và cả chip, filter, clear đều biến mất.
- **Dương tính giả:** filter được chuyển sang drawer khác; nút Clear all nằm ngoài viewport; URL có thể chỉnh bằng UI khi quay lại.
- **Kiểm tra rẻ nhất:** nhìn toàn bộ trạng thái empty và thử thao tác gỡ qua UI một lần, không chỉ kết luận từ 0 sản phẩm.
- **Scope:** kiểm tra rule riêng về empty state và filter của cycle; không cần ép bộ lọc bằng dữ liệu ngoài phạm vi.
- **Nguồn:** T1 [#2085731](https://testertudo.com/bug-2085731/). **Tin cậy: trung bình** vì là bản đăng lại có bước, actual và expected, chưa đối chiếu issue gốc.

## H-09 — Dữ liệu riêng của tài khoản trước xuất hiện ở tài khoản sau

- **Cơ chế:** state ở client/session không được tách theo tài khoản khi đăng xuất và đăng nhập tài khoản khác.
- **Điều kiện:** sản phẩm cho phép dùng hai tài khoản thử và có giỏ hàng, wishlist hoặc tùy chọn riêng.
- **Thử:** ở tài khoản A thêm một mục có thể nhận biết, đăng xuất, đăng nhập B, xem mục đó có xuất hiện trong phần dữ liệu riêng của B không.
- **Kỳ vọng có căn cứ:** dữ liệu riêng gắn với A không tự xuất hiện như dữ liệu của B; bài T1 #2072602 mô tả cùng sản phẩm còn trong giỏ khi B đăng nhập.
- **Tín hiệu:** mục của A hiện trong giỏ B mà không có thao tác thêm ở B.
- **Dương tính giả:** giỏ guest cố ý dùng chung trên thiết bị; B đã có sản phẩm đó; cùng một tài khoản đăng nhập lại bằng cách khác.
- **Kiểm tra rẻ nhất:** dùng hai tài khoản thử được cho phép, một sản phẩm phân biệt, so giỏ A/B và đọc quy tắc guest cart.
- **Scope:** không dùng tài khoản thật của người khác; không nhập dữ liệu cá nhân hoặc thanh toán nếu cycle không cho phép.
- **Nguồn:** T1 [#2072602](https://testertudo.com/bug-2072602/). **Tin cậy: trung bình** về hiện tượng được đăng lại; quy tắc giỏ cụ thể của từng sản phẩm phải xác minh riêng.

