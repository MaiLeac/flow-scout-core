**Sổ tay Tester Work QA Academy**

**Functional Testing Course**  |  6 module  |  43 bài học  |  6 quiz

Tài liệu này hệ thống hóa kiến thức cốt lõi trong khóa Functional Testing with Tester Work Course để dùng khi ôn quiz và khi tham gia test cycle. Nội dung giữ nguyên thuật ngữ quan trọng bằng tiếng Anh, nhưng được diễn giải bằng tiếng Việt để tra cứu nhanh.

**Nguyên tắc nền tảng:** Tester Work, Test IO và uTest có quy trình khác nhau. Khi làm dự án Tester Work, Test Specification, Test Details, Scope và hướng dẫn của Test Manager luôn có ưu tiên cao hơn ghi nhớ từ nền tảng khác.

# **Cách hoàn thành khóa**

· Khóa có 6 module và mỗi module kết thúc bằng một quiz.

· Cần đạt ít nhất 80% cho từng quiz; mỗi quiz có 2 lần làm.

· Nếu không qua lần đầu, lần thứ hai mở sau 24 giờ.

· Phải vượt qua cả 6 quiz mới được đánh dấu sẵn sàng tham gia Functional Testing test cycles.

· Học và làm quiz bằng tiếng Anh nguyên bản. Tắt dịch tự động vì bản dịch có thể làm sai thuật ngữ QA và ảnh hưởng đánh giá.

· Thời lượng toàn khóa được Tester Work ước tính khoảng 3,5 đến 5 giờ.

# **Mục lục tra cứu**

1. Module 1  Introduction to Functional Testing

2. Module 2  Introduction to Exploratory Testing

3. Module 3  Introduction to Test Cases

4. Module 4  Test Case Executions on the Tester Work Platform

5. Module 5  Test Case Executions in Spreadsheet Tests

6. Module 6  Bug and Issue Reporting

7. Checklist vận hành và mẫu báo cáo

8. Danh mục 43 bài học và liên kết

# **Module 1  Introduction to Functional Testing**

Functional testing kiểm tra các tính năng của ứng dụng so với yêu cầu đã xác định. Mục tiêu là xác nhận hành vi đúng, chức năng cần thiết hoạt động và không có lỗi nghiêm trọng ảnh hưởng người dùng cuối.

## **Năng lực bắt buộc**

· Đọc toàn bộ hướng dẫn trước khi bắt đầu và phân biệt rõ in scope với out of scope.

· Dùng đúng thiết bị, hệ điều hành, trình duyệt, build và môi trường được chỉ định.

· Hiểu Test Specification, test guidelines, deadline và mục tiêu của test.

· Thực hiện Test Case đúng thứ tự, ghi trạng thái chính xác và cung cấp bằng chứng khi được yêu cầu.

· Chủ động tìm bug mới nhưng phải nhận ra Known Issue và Duplicate trước khi báo cáo.

## **Ba vùng trọng tâm**

|   |   |
|---|---|
|**Vùng**|**Cần kiểm tra**|
|Core functionality|Luồng chính, điều hướng, menu, nút, chia sẻ, view mode, login, tài khoản, khởi tạo payment khi được phép.|
|Real user scenarios|Luồng từ đầu đến cuối, mất hoặc đổi mạng, đa nhiệm, thông báo, xoay màn hình, locale và thiết bị phụ trợ.|
|Relevant issues|Ưu tiên lỗi có tác động thật, dễ gặp và đáng để khách hàng sửa; tránh hành vi phi thực tế và feature request.|

## **Các biến thể môi trường cần nhớ**

· Cold start là mở ứng dụng từ trạng thái đã đóng; warm start là quay lại từ nền.

· Kiểm tra offline, airplane mode, mạng yếu và chuyển đổi giữa các loại kết nối khi nằm trong scope.

· Trên mobile, kiểm tra background, overlay và orientation; trên desktop, cân nhắc resize cửa sổ.

· Không hoàn tất thanh toán thật trừ khi được yêu cầu rõ ràng.

# **Module 2  Introduction to Exploratory Testing**

Exploratory testing là phương pháp điều tra không phụ thuộc vào Test Case cố định. Việc học ứng dụng, tạo ý tưởng kiểm thử và thực thi diễn ra đồng thời. Tester sử dụng trực giác, kinh nghiệm, tư duy phản biện và khả năng thích nghi để tìm các vấn đề khó dự đoán.

## **Đặc điểm**

· Được dẫn dắt bởi charter, scenario hoặc user journey thay vì script chi tiết.

· Có thể thay đổi hướng kiểm thử theo phát hiện mới nhưng vẫn phải ở trong scope.

· Tập trung vào unknown unknowns, vấn đề phức tạp và trải nghiệm sử dụng.

· Ít tài liệu hơn scripted testing nhưng vẫn phải ghi lại đủ thông tin để tái hiện phát hiện.

## **Cách tiếp cận**

9. Đọc scope, hướng dẫn và các giới hạn của cycle.

10. Làm quen với tính năng, luồng chính và mục tiêu người dùng.

11. Thực hiện smoke test rộng trước để phát hiện lỗi hiển nhiên trên các chức năng cốt lõi.

12. Ưu tiên vùng quan trọng hoặc có tác động cao thay vì cố kiểm tra mọi thứ.

13. Thử dữ liệu bất thường, gián đoạn, đổi mạng, xoay thiết bị và các quick attacks phù hợp scope.

14. Ghi lại chính xác luồng đã đi để có thể lập bug report tái hiện được.

## **Các dạng hướng dẫn**

|   |   |
|---|---|
|**Dạng**|**Ý nghĩa**|
|Test Scenario|Bối cảnh rộng cần hình dung, ví dụ người dùng có mạng không ổn định.|
|User Journey or Flow|Luồng người dùng thường gặp, ví dụ đăng ký hoặc mua hàng từ đầu đến cuối.|
|Informal Test Case|Hướng dẫn tổng quát, cho phép tự do khám phá quanh mục tiêu thay vì làm đúng từng câu lệnh.|

# **Module 3  Introduction to Test Cases**

Test Case là tập hợp hành động hoặc chỉ dẫn nhằm xác nhận một khía cạnh cụ thể của sản phẩm. Kết quả quan sát được phải được so sánh với Expected Result; sai khác có thể là defect nhưng cần kiểm tra scope và điều kiện trước khi kết luận.

## **Cấu trúc Test Case**

|   |   |
|---|---|
|**Thành phần**|**Mục đích**|
|TC ID|Mã duy nhất để tham chiếu Test Case.|
|Test Case Name|Tóm tắt chức năng hoặc mục tiêu cần kiểm tra.|
|Preconditions or Prerequisites|Điều kiện phải hoàn tất trước khi chạy bước; thiếu điều kiện có thể làm kết quả không hợp lệ.|
|Steps to Reproduce|Các hành động phải thực hiện chính xác.|
|Expected Result|Hành vi phải xuất hiện sau bước tương ứng.|

## **Quy trình thực thi**

15. Đọc Test Guide, instructions và Tester Specification để hiểu scope.

16. Đọc toàn bộ Test Case trước khi thao tác.

17. Hoàn tất tất cả Preconditions.

18. Thực hiện từng bước đúng như mô tả.

19. So sánh hành vi thực tế với Expected Result của từng bước.

20. Gán trạng thái cho từng bước trước, sau đó mới đặt Overall Status.

21. Nếu Fail hoặc Blocked, lập hoặc tìm bug phù hợp, thêm Bug ID, Actual Result và attachment theo yêu cầu.

## **Formal và Informal Test Cases**

· Formal Test Case có preconditions, test data, steps và expected results rõ ràng; đây là loại phổ biến trên Tester Work.

· Informal Test Case ít cấu trúc hơn, có thể không cung cấp input hoặc expected result cố định và thường dùng trong exploratory testing.

## **Bảng trạng thái chuẩn**

|   |   |   |
|---|---|---|
|**Status**|**Dùng khi**|**Thông tin bắt buộc**|
|Pass|Tất cả Expected Results khớp hành vi thực tế.|Attachment chỉ cần khi Test Specification yêu cầu.|
|Fail|Ít nhất một Expected Result không khớp vì bug.|Overall Fail, Bug ID, Actual Result và evidence.|
|Blocked|Không thể tiếp tục vì một bug hoặc issue khác chặn luồng.|Bug ID gây chặn, lý do, Actual Result và evidence.|
|Skip|Không thể thực thi do giới hạn không liên quan đến bug, ví dụ vùng địa lý.|Giải thích lý do trong comment hoặc Remarks.|

# **Module 4  Test Case Executions on the Tester Work Platform**

## **Trước khi tham gia**

· Xác nhận tham gia bằng nút I'm ready to test trong email hoặc mở test trong Test Cycles.

· Nếu test đã đầy, thử lại sau và báo Test Manager qua kênh được chỉ định.

· Đọc Test Details để biết loại test, mục tiêu, ngôn ngữ, environment, deadline, payment và participation guidelines.

· Đọc Scope như command center: Tester Specification, application under test, Bug Tracker, credentials, access instructions và resources.

· Chọn đúng device trong Test Cases tab; thiết bị phải khớp Test Details và Tester Specification.

## **Thiết bị và môi trường**

· Nếu device không xuất hiện, thêm đúng Device Name và Operating System trong Account > Devices.

· Nếu vẫn không thấy, hỏi Test Manager trong chat hoặc liên hệ Support.

· Nếu chọn nhầm sau khi Start testing, dùng Change device or browser để sửa.

## **Khi thực thi trên platform**

· Đặt status cho từng Step và Expected Result trước Overall Status.

· Một bước Fail làm toàn bộ Test Case Fail.

· Mỗi Failed hoặc Blocked Test Case chỉ liên kết được một Bug ID; chọn issue liên quan nhất.

· Điền đầy đủ Bug ID, attachments, Actual Result, Remarks và trường bổ sung được yêu cầu.

· Khi kết quả còn Under Review, có thể dùng Edit Case Results để chỉnh status, attachment, Bug ID hoặc trường thông tin, rồi Submit lại.

· Attachment đã thêm không tự xóa được; báo Moderator hoặc Test Manager trong chat.

## **Edit Request và kết thúc test**

· Edit Request cho biết Test Case cần sửa và lý do; xử lý càng sớm càng tốt.

· Edit Request chưa giải quyết khi test đóng có thể làm mất thanh toán.

· Under Review vẫn có thể chỉnh; Approved thì không chỉnh được nữa.

· Khi tất cả Test Case đã Approved, chờ test được Test Manager đóng và biến mất khỏi dashboard.

· Không rời test trong thời gian chờ vì có thể ảnh hưởng payment và kết quả.

· Nếu không thể tiếp tục, dùng Leave this test sớm và chọn lý do phù hợp.

## **Ba kênh chat**

|   |   |
|---|---|
|**Kênh**|**Ai xem được**|
|Public Chat|Tất cả tester, Moderator và Test Managers.|
|Community Test Manager Chat|Bạn và Moderator trao đổi; Test Managers có thể xem.|
|Tester Work Chat|Bạn và Test Managers; Moderator không truy cập.|

Chỉ hỏi nội dung liên quan đến test, giao tiếp tôn trọng và không đăng thông tin cá nhân hoặc attachment chứa dữ liệu cá nhân trong Public Chat.

# **Module 5  Test Case Executions in Spreadsheet Tests**

## **Từ invitation đến bắt đầu**

22. Kiểm tra device, OS, browser, app hoặc build, deadline, ngôn ngữ, mạng và yêu cầu đặc biệt.

23. Nếu không đáp ứng, dùng Reply All để từ chối ngay; không cố dùng môi trường sai.

24. Nếu đáp ứng, dùng Reply All để xác nhận sớm vì vị trí có thể được chuyển cho người khác.

25. Mở Tester Specification và đọc kỹ scope, app link, Bug Tracker, access, attachment rules.

26. Mở đúng TC spreadsheet được cung cấp và chỉ làm việc trong file đó.

## **Các cột được và không được sửa**

|   |   |
|---|---|
|**Được sửa**|**Không được sửa**|
|Device, OS, browser, app hoặc build trong vùng header được chỉ định|TC ID, Section, Subsection|
|Status|Test Case Name|
|Attachment URL|Preconditions|
|Actual Result|Steps to Reproduce|
|Related Issues or Bug ID|Expected Results|
|Remarks|Bất kỳ cột instruction nào khác|

## **Quy tắc attachment trong spreadsheet**

· Upload tại Dashboard > Tests > Attachments, sau đó Copy URL và dán Public URL vào Attachment URL.

· Fail và Blocked phải có evidence dưới dạng Tester Work URL.

· Không chèn file trực tiếp vào cell và không dùng Google Drive, Dropbox hoặc dịch vụ cloud bên ngoài.

· Một số test không yêu cầu attachment; nếu không có cột attachment thì làm theo file và Tester Specification.

· Một số test yêu cầu video theo section hoặc attachment cả khi Pass; chỉ làm khi Tester Specification nêu rõ.

## **Liên kết Bug ID**

· Tìm trong Bug Tracker và Known Issues trước khi tạo báo cáo mới.

· Nếu issue đã tồn tại, dùng Bug ID hiện có; nếu chưa có, tạo bug rồi lấy ID mới.

· Nếu nhiều Bug ID áp dụng, phân cách bằng dấu phẩy và khoảng trắng.

# **Module 6  Bug and Issue Reporting**

Bug là sai lệch so với hành vi được mong đợi. Có thể là error, flaw, chức năng sai hoặc hành vi bất ngờ, từ lỗi UI nhỏ đến lỗi nghiêm trọng chặn chức năng cốt lõi.

## **Trước khi báo cáo**

· Kiểm tra Test Specification, scope, Known Issues và các bug đã có trong Bug Tracker.

· Known Issue bị báo lại sẽ bị reject; issue đã có từ tester khác sẽ bị reject là Duplicate.

· Mỗi bug hoặc issue cần một báo cáo riêng trong Bug Tracker.

## **Các trường của bug report**

|   |   |
|---|---|
|**Trường**|**Quy tắc Tester Work**|
|Summary|Ngắn, cụ thể và trả lời What happens, When và Where. Nêu hành vi thực tế thay vì câu chung chung.|
|Section|Chọn đúng nơi bug bắt đầu xảy ra hoặc element bị lỗi; nếu không có, chọn mục gần nhất với điểm truy cập vùng lỗi.|
|Reproduction Steps|Đủ toàn bộ hành động, mỗi bước một action, khách quan, không dùng ngôi thứ nhất; không dùng Observe như một bước độc lập.|
|Actual Result|Chi tiết hơn Summary; mô tả hành động trước lỗi và hành vi thực tế đã xảy ra.|
|Expected Result|Nêu hành vi đúng sau cùng trong đúng bối cảnh, gồm cả hành động dẫn tới kỳ vọng.|
|Attachments|Bằng chứng rõ ràng; nhiều thao tác thì cần video; lỗi tĩnh có thể dùng screenshot.|
|Technical fields|Điền chính xác device, OS, reproducibility, component và các trường mặc định khác.|
|Severity|Phản ánh tác động lên ứng dụng và khả năng sử dụng, đồng thời theo định nghĩa tùy chỉnh của test nếu có.|
|Custom fields|Có thể gồm credentials thử nghiệm, timestamp kèm time zone và country.|

## **Summary**

Summary phải giúp người đọc hiểu nhanh hành vi sai, nơi xảy ra và điều kiện hoặc hành động kích hoạt. Tránh tiêu đề chỉ nói 'incorrect', 'not working' hoặc thiếu nguyên nhân trước đó.

**Mẫu cấu trúc:** Products from the Favorites section remain displayed after the user removes them.

## **Section**

Section là nơi issue khởi phát, không phải nơi người dùng bị chuyển tới sau khi lỗi xảy ra. Nếu banner ở Travel page chuyển sai về Homepage, chọn Travel vì đó là nơi thao tác gây lỗi được thực hiện.

## **Reproduction Steps**

· Cung cấp đủ đường đi để moderator tái hiện; thiếu hoặc mơ hồ có thể dẫn tới reject.

· Mỗi bước chỉ có một action. Tách Launch và Login thành hai bước nếu cả hai đều cần thiết.

· Dùng câu mệnh lệnh hoặc mô tả khách quan, không viết I open, I tap hoặc I observe.

· Observe không phải một bước hợp lệ khi đứng một mình.

· Bước cuối phải làm rõ issue và nhất quán với Summary; ví dụ mô tả màn hình sai xuất hiện sau action cuối.

|   |   |
|---|---|
|**Không đạt**|**Đạt**|
|1. I launch the app and log in  <br>2. Observe|1. Launch the app  <br>2. Log in  <br>3. Observe that the Home screen appears instead of the Welcome screen|

## **Actual Result và Expected Result**

· Actual Result phải giải thích hành động trước lỗi và hành vi thực tế, không chỉ lặp Summary.

· Expected Result phải mô tả điều gì cần xảy ra trong cùng bối cảnh và vì sao; không chỉ phủ định Actual Result.

· Ví dụ Actual: sau khi xóa sản phẩm khỏi Favorites, sản phẩm vẫn còn hiển thị trong Favorites.

· Ví dụ Expected: sau khi xóa, sản phẩm không còn xuất hiện trong Favorites.

## **Attachments**

· Bug cần nhiều hành động để tái hiện phải có video.

· Video không có âm thanh nền, trừ khi bug liên quan đến audio.

· Hiển thị touches và gestures khi quay mobile.

· Không quay email, Test Specification, spreadsheet, Bug Tracker, platform nội bộ hoặc thông tin cá nhân.

· Đóng ứng dụng nền không liên quan và che hoặc blur dữ liệu cá nhân trước khi upload.

· Crash bug phải có crash logs.

· Connectivity bug phải có Speedtest.net được thực hiện trong video.

· Truncated text, translation sai, pixelated display hoặc lỗi hiển thị tĩnh không cần nhiều bước có thể dùng screenshot.

## **Chuẩn quay và upload Test Case evidence**

· Bắt đầu screen recorder trước khi chạy flow và dừng sau khi hoàn tất.

· Dung lượng khuyến nghị tối đa 500 MB; nén hoặc chia file nếu cần.

· Đặt tên file dễ hiểu và kiểm tra upload không hỏng.

· Upload tại Tests > Attachments rồi dùng Copy URL.

· Không đổi tên file sau khi upload để tránh lệch với report.

## **Reproducibility và technical fields**

· Reproducibility là số lần issue xuất hiện khi lặp đúng cùng bộ steps.

· Component phải khớp nội dung thể hiện trong attachment.

· Device phải nằm trong scope của cycle; desktop cycle có thể không yêu cầu mobile device.

· Custom fields phải điền theo đúng định dạng dự án, bao gồm timestamp và time zone khi được yêu cầu.

## **Severity**

|   |   |
|---|---|
|**Mức**|**Ý nghĩa và ví dụ**|
|Critical|Chặn hoàn toàn việc test hoặc chức năng cốt lõi; crash trong luồng bình thường, không login được, app freeze ở bước xác nhận.|
|High|Tính năng lớn không đáp ứng yêu cầu và cản trở sử dụng hiệu quả; checkout chỉ hoạt động không ổn định.|
|Medium|Hành vi sai nhưng ứng dụng nhìn chung vẫn dùng được; link phụ không chuyển đúng hoặc tính năng ít quan trọng thiếu ổn định.|
|Low|Lỗi cosmetic hoặc nhỏ, tác động tối thiểu; chính tả, căn chỉnh, font hoặc UI nhỏ trên màn hình không trọng yếu.|
|Usability|Chức năng hoạt động nhưng trải nghiệm chưa thuận tiện; thông báo lỗi khó hiểu, menu tổ chức kém hoặc thao tác thừa.|

Một số dự án dùng severity tùy chỉnh. Khi có định nghĩa trong Test Specification, dùng định nghĩa của dự án thay cho bảng tổng quát.

## **Sau khi submit bug**

· Hệ thống cấp Bug ID duy nhất; dùng ID này để liên kết Failed hoặc Blocked Test Case.

· Nếu report thiếu thông tin, Test Manager hoặc moderator có thể mở request chỉnh sửa trong vài giờ.

· Sửa trong thời gian request còn mở; để quá hạn có thể dẫn tới reject.

# **Checklist trước khi bắt đầu test**

· Đã đọc toàn bộ Test Details, Scope và Tester Specification.

· Đã xác định in scope, out of scope, deadline và payment rules.

· Đang dùng đúng device, OS, browser, app hoặc build.

· Đã kiểm tra credentials, URL, installation và access instructions.

· Đã đọc Known Issues và Bug Tracker.

· Đã hiểu attachment rules, privacy rules và nơi upload.

· Đã đọc hết Test Case, Preconditions, Steps và Expected Results trước khi chạy.

· Biết kênh chat phù hợp để hỏi khi có vấn đề.

# **Checklist trước khi submit Test Case**

· Status từng step và Expected Result đã đúng.

· Overall Status được đặt sau cùng và nhất quán với các bước.

· Fail hoặc Blocked có Bug ID liên quan nhất, Actual Result và evidence.

· Skip có lý do không liên quan đến bug trong comment hoặc Remarks.

· Attachment đúng flow, không lộ dữ liệu và dùng Tester Work URL khi là spreadsheet test.

· Các trường bổ sung đã được điền đúng theo Tester Specification.

# **Checklist trước khi submit bug**

· Không phải Known Issue hoặc Duplicate.

· Summary trả lời What, When và Where.

· Section là nơi bug bắt đầu xảy ra.

· Steps đầy đủ, khách quan, mỗi bước một action và không có Observe độc lập.

· Actual Result nêu bối cảnh và hành vi thật; Expected Result nêu hành vi đúng.

· Severity phản ánh tác động và theo định nghĩa của test.

· Reproducibility, component, device, OS và custom fields chính xác.

· Video hoặc screenshot phù hợp; crash log hoặc Speedtest có mặt khi cần.

# **Mẫu bug report để đưa cho AI kiểm tra**

**Platform: Tester Work**

**Test objective and scope:**

**Environment and build:**

**Summary:**

**Section:**

**Severity and reproducibility:**

**Reproduction Steps:**

**Actual Result:**

**Expected Result:**

**Attachments available:**

**Known Issues and duplicate check:**

**Custom fields required:**

# **Danh mục bài học chính thức**

Các liên kết dưới đây trỏ tới nội dung trong tài khoản Tester Work và có thể yêu cầu đăng nhập. Tên bài được giữ nguyên để đối chiếu với QA Academy.

## **Module 1  Functional Testing**

[1.1. Functional Testing: Module Overview](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/WGmFlr4O83iDLz9q0WODR6L4zFGmJMtVFDxHU86pa6x6S_ir31mxQaIQq5nNWHxd)

[1.2. Essential Skills for Functional Testing](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/WGmFlr4O83iDLz9q0WODR6L4zFGmJMtVFDxHU86pa6x6S_ir31mxQaIQq5nNWHxd)

[1.3. What Is Functional Testing?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/WGmFlr4O83iDLz9q0WODR6L4zFGmJMtVFDxHU86pa6x6S_ir31mxQaIQq5nNWHxd)

[1.4. Key Areas of Functional Testing](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/WGmFlr4O83iDLz9q0WODR6L4zFGmJMtVFDxHU86pa6x6S_ir31mxQaIQq5nNWHxd)

[1.5. Functional Testing: Conclusion](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/WGmFlr4O83iDLz9q0WODR6L4zFGmJMtVFDxHU86pa6x6S_ir31mxQaIQq5nNWHxd)

## **Module 2  Exploratory Testing**

[2.1. Exploratory Testing: Module Overview](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/AR_3QZGLN1Kltd8E6CasU9zYbiANwNSlcWfjTvfc-IgtxMlhAOkkypNS-Hf68k5m)

[2.2. What Is Exploratory Testing?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/AR_3QZGLN1Kltd8E6CasU9zYbiANwNSlcWfjTvfc-IgtxMlhAOkkypNS-Hf68k5m)

[2.3. Essential Skills for Exploratory Testing](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/AR_3QZGLN1Kltd8E6CasU9zYbiANwNSlcWfjTvfc-IgtxMlhAOkkypNS-Hf68k5m)

[2.4. How to Approach Exploratory Testing](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/AR_3QZGLN1Kltd8E6CasU9zYbiANwNSlcWfjTvfc-IgtxMlhAOkkypNS-Hf68k5m)

[2.5. Reporting Bugs and Issues in Exploratory Testing](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/AR_3QZGLN1Kltd8E6CasU9zYbiANwNSlcWfjTvfc-IgtxMlhAOkkypNS-Hf68k5m)

[2.6. Exploratory Testing: Conclusion](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/AR_3QZGLN1Kltd8E6CasU9zYbiANwNSlcWfjTvfc-IgtxMlhAOkkypNS-Hf68k5m)

## **Module 3  Introduction to Test Cases**

[3.1. Introduction to Test Cases: Module Overview](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

[3.2. What Is a Test Case?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

[3.3. Essential Skills for Test Case Executions](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

[3.4. What Does a Test Case Contain?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

[3.5. How to Approach and Execute a Test Case](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

[3.6. How to Provide Attachments for Test Case Executions](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

[3.7. Test Cases: Conclusion](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/UoKmqwhG4mQQs_vPtbE_cd9AloY2w1-bmOGTw0cT8YQDzT30C4QoaA2fPxVxuweJ)

## **Module 4  Platform Test Case Executions**

[4.1. Test Case Executions (Tester Work Platform): Module Overview](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.2. Essential Skills for Test Case Executions on the Tester Work Platform](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.3. Getting Ready to Test](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.4. Test Cases Tab: Executing the Test Cases](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.5. Test Case Statuses](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.6. About Edit Requests](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.7. Test Chats](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.8. Finishing or Leaving a Test](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

[4.9. Test Case Executions: Dos and Don'ts](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/FUmtkOv99fv_viOckS4_0tv24uf73BYnTvB8hvjkp2bxzg1cynKwd1wEJ7l1QVK0)

## **Module 5  Spreadsheet Test Case Executions**

[5.1. Test Case Executions (Spreadsheet Tests): Module Overview](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.2. Essential Skills for Spreadsheet Testing](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.3. How to Approach the Invitation to a Spreadsheet Test?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.4. Spreadsheet Tests: Preparing to Test](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.5. The Test Case (TC) Spreadsheet: How to Complete the Fields](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.6. Spreadsheet Tests: How to Approach and Complete Each Test Case](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.7. Adding Attachments to Spreadsheet Tests: How to Obtain the Tester Work URL For An Attachment?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.8. How to Link a Bug ID (for Fail or Blocked Statuses) on Spreadsheet Tests](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.9. Important Variations Depending On the Test](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

[5.10. Spreadsheet Tests: Do's and Don'ts](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/cOaDK9uplWvBFj7cIOYhzA0xypzWryIqFeGAQG38uga23U7ppVv6m5CcTItv8Yo3)

## **Module 6  Bug and Issue Reporting**

[6.1. Bug and Issue Reporting: Module Overview](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/t3Uzkj-_jszSJlORkVnZrOK9VdkwjfWpRr78N_wlzw00PYiqiYXNa54n98bJyi9I)

[6.2. What Is a Bug?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/t3Uzkj-_jszSJlORkVnZrOK9VdkwjfWpRr78N_wlzw00PYiqiYXNa54n98bJyi9I)

[6.3. Where and How to Report a Bug or an Issue](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/t3Uzkj-_jszSJlORkVnZrOK9VdkwjfWpRr78N_wlzw00PYiqiYXNa54n98bJyi9I)

[6.4. General Best Practices When Reporting a Bug](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/t3Uzkj-_jszSJlORkVnZrOK9VdkwjfWpRr78N_wlzw00PYiqiYXNa54n98bJyi9I)

[6.5. What If Some Information Is Missing From a Submitted Bug or Issue?](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/t3Uzkj-_jszSJlORkVnZrOK9VdkwjfWpRr78N_wlzw00PYiqiYXNa54n98bJyi9I)

[6.6. After Submitting a Bug](https://testers.testerwork.com/tester-account/learning/ZmPIvq4hv8RQoFZYjoyjz1-Hz1rbtTu2we9KNwqi4biBIYq-aO4oAYuYx6khtUtT/t3Uzkj-_jszSJlORkVnZrOK9VdkwjfWpRr78N_wlzw00PYiqiYXNa54n98bJyi9I)

# **Phạm vi tài liệu**

Sổ tay này tổng hợp và diễn giải 43 bài học đang hiển thị trong Functional Testing with Tester Work Course. Sáu quiz không được sao chép câu hỏi hoặc đáp án; phần quy tắc làm quiz được tóm tắt ở đầu tài liệu. Khi nội dung dự án cụ thể khác với sổ tay, luôn làm theo Tester Specification và hướng dẫn của Test Manager.