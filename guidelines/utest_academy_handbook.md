Bản thực hành mở rộng: cycle, slots, test cases, issue reports, attachments, logs, Charles Proxy và PII

|                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- |
| **Mục tiêu:** Tra cứu đúng quy trình, đúng từng trường và tránh lỗi khiến issue/test case bị info request hoặc reject. |

Biên soạn và đối chiếu lại từ nội dung uTest Academy đang hiển thị trên tài khoản ngày 12/10/2026. Overview, Announcements, slot/test case và yêu cầu TTL/TE/Customer của từng cycle luôn có ưu tiên cao hơn quy tắc chung.

# **0. Bản đồ độ phủ để AI tra cứu**

|Track / course|Phần chi tiết trong file|
|---|---|
|Introduction to uTest|23|
|uTest.com Navigation|24|
|uTest Basics|25|
|Testing Basics|26 cùng 6-7|
|uTest Cycle Process|1-4, 15-17|
|Slots, Test Cases and Reviews|4-5, 15-16|
|Issue Reports|7-19|
|uTest Mobile App|27|
|AcademyBugs.com|28|
|Academy Tips and Tricks|21.1-21.8|
|Screenshots / Screen Recordings|11|
|Browser Logs / Mobile Device Logs|12|
|Web Debugging Proxy|13|
|PII / GDPR|14, 25.5, 31.2|
|Functional Testing|6-7, 26|
|Localization|29|
|Payment / Open Banking|30|
|Usability|31|
|Voice / Amazon Alexa|34-35|
|Streaming / CTV|36-37|
|Online Gambling|38|
|API|32|
|Security|33|
|Academy Certification practice cycles|24.4, 21.5 và các checklist 18-19|

> [!warning] Course bị khóa
> Tại lần đối chiếu này, tài khoản hiển thị Certification Program 2/5: Mobile Device Testing đang In Progress; Charles Proxy Testing và Academy Challenge Testing còn disabled. Nội dung lesson ẩn của course bị khóa không thể đọc từ catalog. File vẫn bao phủ các quy tắc Charles, mobile và Academy Challenge được công bố trong các course đang mở, nhưng không giả vờ rằng phần ẩn đã được lấy.

# **1. Thứ tự ưu tiên và quy trình toàn cảnh**

|   |
|---|
|**Quy tắc vàng:** Overview/Issue Reporting Instructions > Announcements > slot/test case > yêu cầu trực tiếp của TTL/TE/Customer > quy tắc chung Academy.|

|   |   |
|---|---|
|**Giai đoạn**|**Việc phải làm**|
|Invitation|Đọc NDA, xác nhận profile/address, đọc toàn bộ Overview rồi mới Accept/Decline.|
|Chuẩn bị|Kiểm tra scope, build, Known Issues, environment, attachment/log, deadline và contact rules.|
|Thực thi|Claim đúng slot; test đúng environment; ghi chép; kiểm tra duplicate trước report.|
|Nộp|Điền đủ report/case, evidence khớp, redact PII, kiểm tra file mở được.|
|Theo dõi|Trả lời message/info request nhanh; confirm sau khi sửa; dispute chỉ khi có căn cứ.|

· Không rõ thì hỏi cycle chat trước khi làm, không tự đoán.

· Academy có thể cập nhật; màn hình và instruction mới nhất là nguồn quyết định.

# **2. Vai trò và trạng thái cycle**

|   |   |
|---|---|
|**Vai trò**|**Trách nhiệm**|
|Customer/Client|Chủ sản phẩm thuê Applause/uTest kiểm thử.|
|Tester|Exploratory, test case, review, usability study.|
|TTL|Đầu mối tester; hỗ trợ và review issue/test case.|
|TE|Xây cycle, lập đội, điều hành thực thi.|
|TSM|Làm việc với customer, quản lý giải pháp và đội TTL/TE.|
|CM|Hỗ trợ cộng đồng, học tập và cơ hội dự án.|

|   |   |   |
|---|---|---|
|**Status**|**Được làm**|**Không được làm**|
|Pending Activation|Đọc Overview, claim slot nếu cho phép.|Chưa test/report/execute/submit review.|
|Active|Test, report/edit bug, execute case, submit review/study.|Không vượt scope/instruction.|
|Locked|Chat; sửa submission đang Info Requested; chờ review.|Không report/case mới.|
|Closed|Chỉ xem cycle và work đã nộp.|Không còn thao tác.|

Cycle thường test 2-3 ngày. Submission thường được review trong 15 ngày sau lock; quá hạn thì dùng Team Contact Information trong Overview.

# **3. Invitation, NDA và Overview**

· Đọc NDA; profile và mailing address phải đúng. Không có address có thể không Accept NDA được.

· Accept NDA chỉ mở cycle details; chưa nên Accept Cycle ngay. Đánh giá thời gian, thiết bị, vị trí, ngôn ngữ, payment method và special requirements.

· Decline sớm nếu không phù hợp; Academy nêu decline invitation không bị phạt.

|   |   |
|---|---|
|**Overview section**|**Điều phải lấy được**|
|In Scope / Out of Scope|Được/không được test; loại bug; có thể chứa Known Issues.|
|Setup|Build, URL, credentials, cấu hình, test data.|
|Issue Reporting|Title format, severity, source, screenshot/video/log bắt buộc.|
|Test Case|Claim, deadline, turnaround, evidence.|
|Special Instructions|Ngoại lệ có thể ghi đè rule chung.|
|Announcements/Builds|Thay đổi mới và build hiện hành; acknowledge nếu bắt buộc.|
|Team Contacts|TTL/TE/TSM, giờ hỗ trợ, escalation.|
|Payout/Bonus/Environment|Mức trả, điều kiện bonus, môi trường được phép.|

# **4. Slots**

Slot là reservation với điều kiện location/language/device/OS/payment/setup. Slot quy định môi trường; test case quy định chuỗi bước.

|   |   |   |
|---|---|---|
|**Loại**|**Dấu hiệu**|**Trách nhiệm**|
|Test Case|Có một/nhiều linked cases; fixed payout.|Hoàn thành tất cả case đúng hạn.|
|Exploratory|0 Exploratory; Per Bug.|Không có case; khám phá trong scope.|
|Usability|Slot usability study.|Survey/narration/evidence theo yêu cầu.|

· Accept invitation rồi đọc Slot Instructions; expand description và dùng Preview trước khi Claim.

· Chỉ claim khi đáp ứng mọi điều kiện và làm ngay được; không thêm fake environment. Slot first come first serve; waitlist chỉ có nếu bật.

· Slot nhiều case: thiếu một case có thể khiến toàn slot không approved. Auto-unclaim một case do hết giờ có thể kéo theo tất cả.

· Muốn unclaim: Undo/Unsubmit mọi case đã submit, vào Slots > Unclaim, ghi lý do rõ; báo TTL nếu khẩn cấp.

# **5. Test cases**

## **Thực thi**

· Đọc toàn case, mục tiêu, Preconditions và expected; mơ hồ thì hỏi TTL, không đoán/pass-fail ngẫu nhiên.

· Chuẩn bị đúng environment, credentials/data, cache/app state và công cụ capture.

· Chạy từ trên xuống, không skip/thêm action. Actual = expected thì Pass; lệch thì Fail; không có expected thì Done.

· Upload đúng loại và đủ số attachment ghi ở step. Screenshot không được thay bằng video. Redact PII.

· Hoàn thành mọi step > Submit Results > nhập thời gian thực > Finished. Tester chỉ execute, không viết test case.

## **Khi Fail**

|   |   |
|---|---|
|**Tình huống**|**Cách xử lý**|
|Issue đã có/KI|+1 nếu tái hiện; ghi Issue ID trong Actual Result; Fail Step.|
|Issue chưa có|Giải thích ngắn trong Actual Result; Fail & Report Issue ngay từ step.|
|Form prefilled|Xóa prefilled Actions/Expected/Actual, viết đúng bug; issue link với step.|
|Phát hiện sau submit|Nếu chưa pended/approved/rejected: Undo Submission, report từ step, submit lại.|

|   |
|---|
|**Bắt buộc:** Mỗi failed step phải có Issue ID. Bug phát hiện khi thực thi hoặc liên quan trực tiếp step có Source = Structured; Fail & Report Issue tự chọn Structured.|

## **Result/status**

|   |   |
|---|---|
|**Tên**|**Ý nghĩa**|
|New|Chưa chọn Pass/Fail/Done.|
|Started|Có tiến độ nhưng chưa submit; TTL chưa thể duyệt.|
|Passed|Submitted, mọi step có expected đều Pass.|
|Failed|Submitted, ít nhất một Fail; không có nghĩa tester thất bại.|
|Completed|Submitted, mọi step Done vì không có expected.|
|Unclaimed/Closed By TestCycle|Tester/TTL/system unclaim hoặc cycle đóng trước submit.|
|Pending|Chờ duyệt; có thể không edit nếu TTL đã pended.|
|Info Requested|Sửa, submit lại và confirm yêu cầu.|
|Approved/Rejected|Có payout / không payout.|

Info Request: đọc panel > Undo Submission > sửa > Submit Results + Finished > mở lại > Confirm all requested information is added > phản hồi chuyên nghiệp nếu có ô message.

# **6. Exploratory và kỹ thuật test**

Exploratory Testing là học, thiết kế test và thực thi cùng lúc; action sau dựa vào quan sát trước, tư duy, trực giác và kinh nghiệm. Payout thường theo approved bug, không theo giờ.

· Ghi chép chính xác state/data/đường đi.

· Khám phá như user mới, đánh dấu vùng nghi ngờ.

· Thử normal, unusual và edge cases; theo một bug đến cùng nhưng ghi lại manh mối khác.

· Lặp lại với kiến thức vừa học.

|   |   |
|---|---|
|**Kỹ thuật**|**Cách dùng**|
|Equivalence Partitioning|Chia input thành lớp, test một đại diện mỗi lớp.|
|Boundary Value|Test ngay dưới/tại/ngay trên min-max; 1-100 => 0,1,2,99,100,101.|
|Decision Table|Liệt kê tổ hợp điều kiện và output để không bỏ logic.|
|State Transition|Kiểm tra trạng thái theo chuỗi sự kiện, như khóa sau PIN sai lần 3.|
|Smoke/Sanity/Regression|Core build mới / fix cụ thể / ảnh hưởng đến chức năng cũ.|
|Ad-hoc|Linh hoạt không script nhưng vẫn ghi đủ để tái hiện.|

# **7. Issue type, severity và value**

|   |   |   |
|---|---|---|
|**Type**|**Dùng khi**|**Ví dụ**|
|Functional|Logic/tính năng sai.|Broken link, search/filter sai, button không phản hồi.|
|Visual|Layout/hiển thị sai.|Misalignment, overflow, màu sai, thiếu ảnh.|
|Content|Nội dung/ngôn ngữ sai.|Dịch, typo, capitalization, punctuation.|
|Performance|Chậm/đơ nhưng chưa crash.|Load chậm, freeze/unresponsive >10s.|
|Crash|App/browser đóng hoặc treo kết thúc.|App văng khi upload.|

|   |   |
|---|---|
|**Severity**|**Impact**|
|Low|Nhỏ, ảnh hưởng usability, không cản core; visual/content thường gặp.|
|Medium|Ảnh hưởng vừa đến core, có workaround, không chặn release/test.|
|High|Ảnh hưởng lớn core, có thể chặn test hoặc trì hoãn release.|
|Critical|Rất cao, chặn test, phải sửa trước release; crash/freeze nghiêm trọng hoặc privacy breach.|

· Severity do tester chọn theo impact/Overview; Value do customer quyết định và payout dựa trên Value.

· Value: Somewhat Valuable (Won't Fix), Somewhat Valuable, Very Valuable, Exceptionally Valuable.

· Severity cao vẫn có thể ít value nếu OOS, user thật không gặp, chỉ ở dev/stage hoặc stress/monkey test không được yêu cầu.

# **8. Issue report: title, classifications, source, environment**

## **Title**

· Theo format Overview; nêu area + hành vi lỗi chính xác.

· Không ALL CAPS; viết hoa đầu dòng; không ghi browser trừ khi yêu cầu.

· Device trong title, environment và attachment phải khớp; kiểm tra duplicate/KI.

Example: Windows 10 - PLP - An error message is displayed after clicking on the "Quick Add" button
macOS Big Sur 11.3 - Sign Up - Able to create an account with a password that doesn't meet requirement

## **Classifications**

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| **Field**   | **Rule**                                                                   |
| Frequency   | Every time, Hardly ever, Occasionally, Once theo tái hiện thật.            |
| Severity    | Critical/High/Medium/Low theo impact và Overview.                          |
| Source      | Exploratory ngoài test case; Structured khi chạy/liên quan test case step. |
| Environment | Đúng device + OS + browser/native; chỉ chọn nơi đã trực tiếp reproduce.    |

|   |   |
|---|---|
|**Câu hỏi Source**|**Kết quả**|
|Bug xảy ra khi chạy đúng step hoặc liên quan trực tiếp step?|Structured|
|Bug tìm được khi tự khám phá ngoài step?|Exploratory|
|Dùng Fail & Report Issue?|Structured tự động, không đổi được|
|Không rõ quan hệ?|Hỏi TTL trước khi submit|

|   |
|---|
|**Trường hợp của bạn:** Bug bộ lọc 'Over $50' được tìm khi tự khám phá, không phải từ test case step, nên Source = Exploratory.|

· Website/mobile web: chọn browser thật, không chọn Native.

· Native app: chọn Native (No mobile browser), không chọn browser.

# **9. Actions Performed và ví dụ sửa**

|   |
|---|
|**Cốt lõi:** Numbered, tuần tự, đủ để tái hiện; một task/action mỗi step. Bước đầu mở URL/app. Không trộn expected/actual vào steps.|

· Tách Open, Navigate, Click/Tap, Enter, Select, Submit; tránh 'and' nối hai action. Computer dùng Click, mobile dùng Tap.

· URL chỉ ở step 1 trừ yêu cầu khác. Preconditions đặt trước step 1. Dịch từ không-English trong ngoặc.

· Steps phải khớp video/log và bắt đầu từ homepage/app launch.

· Theo Academy hiện tại: không dùng Observe, Check, View results, Find, See, Pay attention làm step cuối; ghi điều thấy trong Actual Results.

|   |
|---|
|**Mâu thuẫn 'Observe':** Bạn nhớ issue cũ bị thiếu Observe, nhưng hai bài Issue Reports hiện tại đều dạy không ghi Observe trong numbered steps. Nếu Overview/TTL của cycle cụ thể yêu cầu, hãy làm theo yêu cầu riêng; mặc định không dùng.|

## **Issue Xiaomi 13 Pro đã sửa**

· 1. Open Chrome on the Xiaomi 13 Pro.

· 2. Navigate to https://www.maccosmetics.com/

· 3. Tap the Search icon.

· 4. Enter 'lipstick'.

· 5. Submit the search.

· 6. Tap 'FILTER & SORT'.

· 7. Select the 'OVER $50' filter.

Expected Results: Only products with a current price over $50 are displayed after applying the 'OVER $50' filter.

Actual Results: A product with a current sale price below $50, such as 'LIP COMBO BY @QUENBLACKWELL' priced at $36.40, is displayed after applying the 'OVER $50' filter.

Functional | Low | Every Time | Source: Exploratory | Xiaomi 13 Pro - Android 14 - Chrome.

# **10. Expected, Actual, Error và Additional Info**

|   |   |   |
|---|---|---|
|**Field**|**Viết**|**Tránh**|
|Expected|Kết quả đúng, cụ thể, đo được sau steps.|Kể lại steps; 'works correctly'.|
|Actual|Điều thực tế, khác expected ở đâu, dữ liệu/ví dụ.|Đoán nguyên nhân code; 'doesn't work'.|
|Error Message|Toàn bộ message nếu hiển thị.|Không có thì để trống; không None/N/A/'-'.|
|Additional Info|Thông tin bổ sung hoặc Overview yêu cầu.|Không cần thì để trống.|

# **11. Attachments**

## **Screenshot**

· .jpg/.png; tối đa 2/issue nếu cycle không ghi khác.

· Toàn màn hình, web có URL bar, mobile upright; đóng tab desktop không liên quan.

· Highlight bằng rectangle/circle/arrow đỏ-vàng, không vẽ tay.

· Không dùng camera ngoài trừ DRM/không thể software capture/yêu cầu riêng.

· Redact PII; sau submit mở lại file.

## **Video**

· .mp4; thường một video/issue; đầy đủ flow, khớp Actions, rõ bug, từ homepage/app launch.

· Toàn màn hình/URL bar; không quay uTest/customer project khác; mute trừ khi cần narration.

· Cố gắng dưới 1 phút nhưng có thể dài hơn nếu mọi bước đều cần; nén HandBrake nếu lớn.

· Không lưu lên cloud; không camera ngoài trừ ngoại lệ; redact PII suốt thời gian xuất hiện; kiểm tra phát được.

## **Visibility**

· Nếu có Visible to testers, tắt cho attachment nhạy cảm; chỉ hide khi thực sự chứa sensitive data.

· Hidden vẫn thấy bởi TTL/TE/TSM/CM/Customer; Community Reproductions không hỗ trợ; BFV/KI có thể không thấy hidden attachment gốc.

# **12. Console, HAR và mobile logs**

· Mọi log: clear cũ, bật Preserve/Persist + timestamps, reproduce trong lúc thu, đảm bảo app/URL xuất hiện, mở file kiểm tra.

· Chrome console: F12/Ctrl+Shift+I > Console > settings > timestamps/preserve > clear > refresh homepage > reproduce > Save As .txt.

· Firefox: Console > Persist Logs + Show Timestamps > clear > reproduce > Save all Messages. Safari: Develop/Web Inspector > Preserve > clear > Command+S; Safari có thể không có timestamp.

· HAR: Network > Preserve > clear > reproduce > Save/Export HAR with content (.har); chỉ upload khi được yêu cầu; đóng tab khác và redact credentials/card/PII bằng ****.

## **Mobile**

· Android app: Developer Options + USB debugging; adb logcat -c; reproduce; adb logcat -d -v time > log.txt hoặc adb logcat -v threadtime > log.txt.

· Android Studio Logcat: chọn device, clear, reproduce, pause, copy và lưu .txt. Android 11+ có thể wireless pair/connect cùng Wi-Fi.

· Android mobile web: remote debug qua chrome://inspect#devices hoặc Firefox Remote Debugging; inspect đúng tab, preserve/timestamp, clear, reproduce, .txt.

· iOS browser cần Mac/Safari Web Inspector. iOS device log dùng iMazing/Console/libimobiledevice. Crash log đúng app+timestamp: .ips/.crash/.log.

# **13. Charles Proxy**

|   |
|---|
|**Log hợp lệ:** Traffic sản phẩm test, đã decrypt, đúng file: Charles .chls/.chlz; Fiddler .saz. Thường upload toàn session.|

· Desktop: tắt VPN; cho Charles qua firewall/antivirus bằng exception; cài Root Certificate; bật system proxy.

· SSL Proxy Settings: Enable SSL Proxying; Host * (macOS có thể để trống theo instruction), Port 443. Broom > recording on > reproduce từ homepage > Save Session.

· Mobile: computer/mobile cùng Wi-Fi; manual proxy = local IP computer + port 8888; Allow connection; cài certificate qua chls.pro/ssl hoặc charlesproxy.com/getssl.

· Android chọn CA/VPN and apps; iOS cài profile và Enable Full Trust. Tắt desktop system proxy nếu chỉ thu mobile traffic.

· Blue circle/lightning = decrypted; lock = SSL chưa decrypt; red cross = certificate sai/chưa cài.

· Page not found: kiểm tra Charles chạy, cùng Wi-Fi, VPN off, IP/8888, firewall exception, Access Control/allow request. Log lớn: Broom trước, Stop ngay sau bug.

· Include chỉ giữ host; Exclude loại host và thắng nếu trùng. *utest* match chuỗi, *utest.com* match domain. Xóa filter giữa session. Academy practice yêu cầu toàn log, không extract/filter.

# **14. PII, NDA và bảo mật**

PII là dữ liệu có thể nhận diện một người, kể cả dữ liệu của người khác. Luật có thể gồm GDPR, CCPA, PIPEDA, LGPD, CDR và luật địa phương.

· Redact: full name, phone, address, VIN/property, biometric, photo, race/ethnicity, political/religious belief, genetic data; bank/IBAN/account/card/CVV; license/SSN/passport; email/login/password; MAC/IP/device ID/cookies và keyboard khi nhập.

· Làm theo mức redact customer yêu cầu; không rõ hỏi TTL/TE.

· Ảnh: hộp đen đặc chỉ che PII, mỗi field riêng, không che label. PDF: export redacted đã flatten; text/link không còn copy/click.

· Video: che từ đầu đến cuối khi PII xuất hiện, kể cả scroll; che keyboard; cắt uTest platform/sheet/customer material ngoài flow.

· Không lưu attachment/thông tin cycle lên cloud trái phép; lưu local rồi upload trực tiếp.

# **15. Edit, Info Request và Quality Review**

· New: sửa minor mistake/bổ sung, không đổi thành bug khác. Info Requested: sửa > Save > Confirm all requested info was added hoặc Send Requested Info để về New.

· Rejected chỉ edit khi dispute phù hợp; Pending/Approved thường không edit. Attachment sửa trong Attachments, không phải Edit Issue.

· Không placeholder ('1,2,3', '...', attachment không liên quan); chỉ submit khi đủ bằng chứng. Upload lỗi/file quá lớn thì báo TTL.

· Sau submit kiểm tra duplicate và attachment. Không copy report của tester khác.

· Issue Quality Review kiểm tra language, Academy rules, cycle instructions một lần: ít lỗi tự sửa; nhiều lỗi tạo Info Request. So sánh current/suggested, chọn Submit New Version, sửa đề xuất hoặc Re-Submit Original. Tự kiểm tra vì gợi ý có thể làm tệ hơn.

# **16. Known Issues, +1, rejection và dispute**

· KI nằm ở Out of Scope, external file/link hoặc Issues list có cờ xanh. Không report lại; không hiểu hỏi TTL.

· +1 khi tái hiện chắc chắn bug đúng/in scope; chọn environment, comment, attachment. Visual thường screenshot; bug khác dùng video. Không +1 nếu không reproduce.

|   |   |
|---|---|
|**Reject**|**Ý nghĩa/ảnh hưởng**|
|WAD|Working As Designed; không ảnh hưởng rating.|
|DUP|Duplicate/KI; ảnh hưởng rating.|
|OOS|Out of Scope; ảnh hưởng rating.|
|DNFI|Did Not Follow Instructions; tác động âm gấp đôi.|
|INF|Không cung cấp info; ảnh hưởng rating.|
|Other|Lý do khác như không còn reproducible.|

· Dispute chỉ khi chắc đúng, đã theo instruction và có evidence/khác biệt rõ; cycle Active/Locked; mỗi bug một cơ hội và số dispute tháng có giới hạn.

· Không dispute khi thật sự DUP/OOS/not reproducible/DNFI/WAD. Không tranh cãi trong chat/messages; dùng Actions > Dispute Rejection, chuyên nghiệp. Double rejection làm rating xấu hơn.

# **17. Giao tiếp, giới hạn và integrity**

|   |   |   |
|---|---|---|
|**Kênh**|**Dùng cho**|**Không dùng cho**|
|Cycle Chat|Scope, steps, blockers, cycle problems; English.|Payout, xin approve/review, tranh rejected issue, all caps/rude.|
|Messages|Trả lời thread do staff/customer khởi tạo.|Dispute/xin approve.|
|Private|Vấn đề nhạy cảm; hỏi TTL công khai và chờ TTL khởi tạo.|Câu hỏi thông thường.|
|Email|Khẩn cấp, nhạy cảm, payout/misconduct, chat quá hạn.|Scope thường; dispute.|

· Unrated/Rated tester bắt đầu tối đa 5 unapproved issues/cycle; approved mở thêm lượt. Cycle cũng có tổng issue limit riêng.

· Save as Template/Configure Template dùng cho title prefix, preconditions, common steps và custom fields; luôn rà lại trước submit.

· Integrity mặc định Unrated; High giúp rating; Low làm rating xấu do DNFI/report kém/nhiều info request/phản hồi thiếu chuyên nghiệp.

# **18. Checklist trước Submit Issue**

|   |   |
|---|---|
|**✓**|**Kiểm tra**|
|□|Cycle Active, build đúng, in scope, không KI/duplicate.|
|□|Title đúng format; type/frequency/severity đúng.|
|□|Source đúng Exploratory/Structured; environment khớp title/evidence.|
|□|Actions numbered, một task/step, đủ và tuần tự; URL chỉ step 1.|
|□|Không Observe/Check/View result làm step riêng trừ rule cycle.|
|□|Expected/Actual đối chiếu, cụ thể; Error/Additional để trống nếu không áp dụng.|
|□|Ảnh/video/log đúng format, đủ, mở được, khớp flow; PII đã che.|
|□|Không lộ uTest/customer khác, không cloud; submit xong mở attachment và kiểm tra Issues list.|

# **19. Mẫu điền nhanh và lỗi dễ lặp**

Title: [Area theo Overview] - [Hành vi lỗi cụ thể]

Type | Frequency | Severity | Source | Environment: điền theo các bảng quyết định ở trên.

Precondition: chỉ dùng nếu cần. Actions: numbered, one action per step. Expected: kết quả đúng. Actual: kết quả sai cụ thể. Error/Additional: để trống nếu không áp dụng. Attachments: theo Overview.

|   |   |
|---|---|
|**Lỗi**|**Cách sửa**|
|Hai action/step|Tìm 'and' nối hai động từ; tách step.|
|Source sai|Ngoài test case = Exploratory; liên quan step/Fail & Report = Structured.|
|Observe mâu thuẫn|Mặc định Academy không dùng; chỉ dùng khi Overview/TTL yêu cầu.|
|Environment sai|Native app = Native; web = browser thực.|
|Actual mơ hồ|Nêu object, value, location, timing và khác expected.|
|Attachment lệch|Quay/chụp lại toàn flow đúng environment.|
|Info Request còn mở|Sửa + submit/save rồi Confirm all requested info is added.|
|Placeholder|Chỉ submit khi field và evidence hoàn chỉnh.|

# **20. Nguồn nội dung và giới hạn**

Đối chiếu trực tiếp từ uTest Academy: Issue Reports (10 lessons), uTest Cycle Process, Slots/Test Cases/Reviews, Screenshots, Screen Recordings, Browser Logs, Mobile Device Logs, Web Debugging Proxy, PII và Functional Testing. Nội dung chuyên môn được diễn giải lại bằng tiếng Việt để tra cứu; không sao chép nguyên khóa học.

|   |
|---|
|**Điểm nhớ nhất:** Report tốt là report tái hiện được, đúng scope/source/environment, mỗi bước một action, expected-actual đối chiếu rõ và evidence sạch, khớp, không lộ dữ liệu.|

# **21. Academy Tips and Tricks - nội dung đầy đủ theo 8 lessons**

Course chính thức: https://www.utest.com/academy/tracks/2/courses/46/lessons/Terms-and-Acronyms

> [!important] Phạm vi
> Phần này không chỉ là mục lục. Nó gom các quy tắc, ngoại lệ, tình huống và thuật ngữ xuất hiện trong cả 8 bài của course **Academy Tips and Tricks**. Tên lesson và thuật ngữ giữ nguyên để AI có thể tra đúng bài gốc; phần giải thích được diễn đạt sát nghĩa bằng tiếng Việt.

## **21.1 Terms and Acronyms**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/Terms-and-Acronyms

### **uTest Terms**

|Thuật ngữ|Ý nghĩa và cách dùng|
|---|---|
|Accessibility Auditor (ACA)|Tester tham gia accessibility audit, report lỗi và hoàn thành test case; có thể vẫn cần hướng dẫn từ thành viên giàu kinh nghiệm hơn.|
|Accessibility Expert (ACE)|Người dẫn nhiều accessibility audit, hướng dẫn thành viên khác và trình bày kết quả audit cho khách hàng.|
|Bug Fix Verification (BFV)|Retest bug trên build/fix mới để xác nhận lỗi đã được sửa hay chưa.|
|Client / Customer|Công ty thuê Applause và cộng đồng uTest kiểm thử sản phẩm.|
|Community Engineer (CE)|Thành viên phối hợp với Community Management và hỗ trợ công việc cộng đồng.|
|Community Manager (CM)|Giúp cộng đồng học cách test tốt, tiếp cận dự án trả phí và kết nối với tester khác.|
|Environment|Thiết bị, OS/phiên bản OS, browser hoặc setup cụ thể dùng để test.|
|Did Not Follow Instructions (DNFI)|Bug không tuân thủ instruction trong Overview; đây là rejection nghiêm trọng.|
|Dedicated Tester (DT)|Tester chất lượng cao tập trung sâu vào dự án, cung cấp tốc độ/chuyên môn/kiểm soát chất lượng và hỗ trợ TTL.|
|Duplicate (DUP)|Issue trùng bug đã report trong cycle hoặc trùng Known Issue.|
|Knowledge Base (KB)|Thư viện thông tin tự phục vụ về sản phẩm, dịch vụ hoặc chủ đề.|
|Known Issue (KI)|Lỗi đã biết từ cycle trước hoặc do customer cung cấp; phải kiểm tra trước khi report. Có thể nằm trong file hoặc có biểu tượng bookmark xanh ở Issues.|
|Moderator|Người hướng dẫn trực tiếp trong phiên test, giải đáp, xử lý trở ngại và thu thập feedback.|
|Need more info (INF)|Rejection vì tester không cung cấp thông tin đã được yêu cầu trong Info Request.|
|Non Disclosure Agreement (NDA)|Thỏa thuận pháp lý buộc các bên không tiết lộ thông tin mật đã chia sẻ.|
|Out of Scope (OOS)|Bug thuộc khu vực/loại lỗi bị loại trừ rõ trong Overview.|
|Info Request (IR)|Yêu cầu bổ sung thông tin hoặc sửa bug report/test case.|
|Placeholder|Report chưa đủ nội dung/evidence được nộp để giữ chỗ rồi sửa sau hoặc đổi thành bug khác; hành vi bị cấm.|
|Reproduction|Tái tạo bug bằng cách thực hiện Actions Performed của report.|
|Solution Delivery Manager (SDM)|Đầu mối chính làm việc trực tiếp với customer.|
|Special Requirement Survey (SRS)|Khảo sát tuyển tester khi dự án cần dữ liệu mà profile nền tảng chưa có.|
|Test Case Writer (TCW)|Viết và rà soát test case, bảo đảm steps/expected rõ ràng và điều chỉnh tài liệu customer khi cần.|
|Test Engineer (TE)|Tạo cycle, tuyển đội, điều hành thực thi và đưa cycle đạt mục tiêu.|
|Test Team Lead (TTL)|Đầu mối chính của tester; hỗ trợ và triage bug/test case.|
|Testing Services Manager (TSM)|Làm trực tiếp với client, quản lý TTL/TE, chiến lược, ngân sách và payout.|
|Triage / Triaging|Review report/case rồi Info Request hoặc đề xuất approve/reject.|
|Turnaround Time|Thời hạn tính từ lúc claim đến khi phải submit work.|
|Won't Fix (WNF)|Issue hợp lệ và được approve nhưng customer không dự định sửa.|
|Work as Designed (WAD)|Hành vi đúng theo thiết kế, không phải bug.|

### **Testing Terms**

|Thuật ngữ|Ý nghĩa cốt lõi|
|---|---|
|A/B Testing|So sánh hai hay nhiều phiên bản với các nhóm user để xem biến thể nào đạt metric tốt hơn.|
|Accessibility (A11Y)|Thiết kế và kiểm thử để sản phẩm dùng được cho mọi người, gồm người khuyết tật.|
|Alpha Testing|Giai đoạn test nội bộ sớm để tìm lỗi trước beta/public release.|
|API Testing|Kiểm thử chức năng, độ tin cậy, hiệu năng và bảo mật của API.|
|Beta Testing|Test sản phẩm thật trong môi trường thật trước public release.|
|Black Box Testing|Test từ góc nhìn user dựa trên input/output, không cần biết nội bộ hệ thống.|
|Bug Hunt Testing|Exploratory mạnh nhưng chỉ nhắm loại bug/thiết bị/phạm vi cụ thể được Overview quy định.|
|Customer Experience (CE)|Đánh giá trải nghiệm xuyên suốt nhiều điểm online/offline của hành trình khách hàng.|
|Customer Journey Testing (CJT)|Đánh giá hành trình từ lúc vào sản phẩm tới khi hoàn thành một mục tiêu.|
|Design Verification Testing (DVT)|Xác minh thiết kế đáp ứng yêu cầu và hoạt động đúng ý định.|
|Exploratory Testing (ET)|Vừa học, thiết kế và thực thi; dùng kinh nghiệm để tìm vùng dễ lỗi.|
|Functional (FN)|Kiểm thử tính năng/hành vi để tìm lỗi chức năng.|
|Live Testing|Phải test đúng thời điểm chỉ định, không sớm hoặc muộn.|
|Load Testing|Đánh giá hệ thống dưới workload xác định.|
|Localization (LN)|Xác minh chất lượng theo ngôn ngữ/văn hóa/locale mục tiêu.|
|On-site Testing|Đến địa điểm thực để đánh giá dịch vụ và thu thập feedback.|
|Penetration Testing|Tấn công mô phỏng được ủy quyền để đánh giá bảo mật.|
|Regression Testing|Kiểm tra thay đổi/fix không làm lỗi cũ quay lại hoặc sinh lỗi mới.|
|Sanity Testing|Kiểm tra nhanh sau thay đổi nhỏ/fix trước khi test rộng hơn.|
|Smoke Testing|Kiểm tra sơ bộ các chức năng lõi của build có đủ ổn định để test tiếp.|
|Slot|Vị trí dành cho tester đáp ứng location/language/device/OS/payment/setup cụ thể.|
|Test Case|Chuỗi action dùng để xác định sản phẩm có đáp ứng yêu cầu và hoạt động đúng không.|
|User Experience (UX)|Toàn bộ trải nghiệm, kỳ vọng, hài lòng, usability và accessibility của user.|
|Voice Testing|Test sản phẩm điều khiển giọng nói bằng native speaker, gồm functional/dialogue/usability/payment.|

### **Website/App Elements Terms**

|Nhóm|Thuật ngữ cần nhận diện|
|---|---|
|Trang/khu vực|About Us, Homepage, Landing Page, Product Detail Page (PDP), Product Listing Page (PLP), Sitemap, Cart/Bag/Basket, Footer, Navigation bar, Left-Hand Navigation (LHN).|
|Điều hướng|Address/URL Bar, Breadcrumb, Tabs, Hamburger Menu, Permalink, PURL, QR Code.|
|Control|Checkbox, Radio Button, Toggle Button, Textbox/Text Field, Drop-down, CTA, Tooltip, Modal, Overlay, Pop-up.|
|Nội dung|Banner, Hero, Carousel, Thumbnail, Rail, Favicon, UGC, RSS, FAQ.|
|Streaming UI|Because You Watched (BYW), Continue Watching (CW), More Like This (MLT), PiP, Docked View, Expanded View, Playhead, Scrub, Live Window, Single Live Event (SLE), Full Event Replay (FER), Closed/Open Captions, Subtitles, VST.|
|Kỹ thuật|Frontend, Backend, Cookie, Bandwidth, Field Validation, UI, Push/In-app Notification.|

Phân biệt quan trọng: **PiP** là cửa sổ nổi có thể di chuyển; **Docked View** cố định ở một vị trí. **Closed Captions** có thể bật/tắt và chủ yếu biểu diễn âm thanh cùng ngôn ngữ; **Open Captions** gắn cố định vào video; **Subtitles** chủ yếu dịch lời thoại sang ngôn ngữ khác. **PDP** là trang một sản phẩm; **PLP** là danh sách sản phẩm thường có sort/filter.

### **SDLC, streaming, network, HTTP, authentication và các nhóm khác**

|Nhóm|Thuật ngữ cốt lõi|
|---|---|
|SDLC/dev|ADB, Alpha Build, API, Azure DevOps, BTS, CLI, DevOps, Dogfooding, Firebase, InfoSec, Jailbreaking/Rooting, Java, JavaScript, JIRA, PROD, QA/Stage, QA, TestFlight, UAT.|
|Streaming|Buffering, CTV, DRM, Freezing, HLS, Linear Channel, MVPD, NPVR, OTT, PVR, Stall, STB, Upsell, Video Metadata, VOD.|
|Networking|DNS, FTP, Firewall, HTTP, HTTPS, IoT, IP address, ISP, Latency, P2P, Proxy, SMB, SSID, VPN.|
|HTTP status|400 Bad Request; 401 thiếu/sai authentication; 403 server hiểu nhưng từ chối quyền; 404 không tìm thấy; 406 response không phù hợp Accept header; 500 lỗi server chung; 503 tạm unavailable/quá tải/bảo trì; 504 gateway không nhận upstream response kịp.|
|Cloud/AI|AWS, AI, Machine Learning, SaaS.|
|Authentication|Biometric Authentication, MFA, OTP, SSO, 2FA.|
|Voice|ASR, Dictation, Intent, NLP, Utterance, Voice Assistant, Wake Word.|
|Khác|AEM, AOD, AR, Compress, D2C, DPI, Emulation, End User, FTU, HUD, Hosting, Incognito, KYC, OSS, OEM, Payment Instrument, Smart Assistant, UDID, UXR, VR, Whitelist/Allowlist, WIP.|

Phân biệt streaming: **Buffering** có thể chỉ là nạp dữ liệu và chưa chắc là lỗi; **Stall** là playback phải chờ vì thiếu bandwidth; **Freezing** là playback dừng hẳn và thường cần restart. **OTT** truyền nội dung qua Internet không cần thuê bao cable/satellite; **MVPD** cung cấp nhiều kênh/VOD qua cable, fiber hoặc satellite.

## **21.2 The Importance of Reading**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/The-Importance-of-Reading

· SRS: đọc kỹ từng câu, trả lời trung thực/chính xác; không chọn ngẫu nhiên hoặc khai sai. Nếu được yêu cầu cập nhật profile thì cập nhật đúng; profile đã đúng mới chuyển tiếp.

· Projects Board: chỉ apply sau khi đọc toàn bộ requirements/details và xác nhận mình đáp ứng; form phải đầy đủ, chính xác và được kiểm tra lại trước submit.

· Trước claim slot: đọc Slot Instructions và mở rộng description của chính slot đó. Không claim rồi ngồi im, không claim slot sai điều kiện.

· Trước test/report/case: đọc Setup Instructions, In Scope, Out of Scope, Known Issues, Issue Reporting Instructions, Test Case Instructions và Special Instructions.

· Issue Reporting Instructions quyết định title format, evidence bắt buộc, environment info và custom fields. UX survey có thể quy định thời điểm bắt đầu video hoặc thứ tự trả lời; làm sai có thể khiến cả survey vô hiệu.

· Announcement phải được đọc ngay, thực hiện và acknowledge nếu có. Info Request/message phải được xử lý nhanh; sửa xong phải chọn **Confirm all requested info is added**.

· Cũng phải đọc Team Contact Information, Tester Special Requirement, Bonus Instructions, review questions và email từ TE/uTest.

· Không skim/speed-read, không bỏ chi tiết nhỏ, không test bằng environment giả/sai, không bỏ qua announcement/message, không hỏi lại câu đã có đáp án trong chat.

## **21.3 The Team Behind Test Cycles**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/The-Team-Behind-Test-Cycles

### **Tester**

Hiểu sản phẩm; report bug; execute case; submit review/task; phản hồi IR nhanh; hoàn thành đúng hạn; báo blocker; hỗ trợ tester khác khi biết chắc. Phải tuân Terms of Use và AI Guidelines, lịch sự, trung thực, test đúng scope/environment và chỉ nhận việc có thể cam kết.

Không được: công khai dữ liệu customer; bàn payout trước customer; tạo nhiều account; khai gian; dùng VPN khi không được phép; xin approve; report invalid issue; claim quá nhiều slot hoặc giữ slot không làm; nộp evidence giả/sai; cố ý dùng add-on/script để tạo lỗi; dispute vô căn cứ; rude/all caps.

### **TTL, TE, TSM và escalation**

|Vai trò|Việc chính|Tester liên hệ khi nào|
|---|---|---|
|TTL|Giao tiếp với tester, triage report/case, theo dõi chat/tiến độ, test blocker sơ bộ, hỗ trợ TE, review dispute.|Câu hỏi cycle/scope/steps/blocker qua cycle chat. Không hỏi payout hoặc xin approve.|
|TE|Tạo và quản lý cycle, tuyển đội, theo dõi tiến độ, xử lý blocker/dispute, viết/chỉnh case và SRS.|TTL không trả lời trong thời gian ghi ở Team Contact Information hoặc vấn đề cần escalation.|
|TSM|Làm việc với client, chiến lược test, quản lý đội và ngân sách/payout.|Payout, emergency hoặc TE không phản hồi đúng thời gian escalation.|

Khi gửi TE/TSM/Support phải nêu rõ Cycle ID/name, Tester ID, Issue ID, Test Case ID và evidence liên quan. Nếu cả TTL/TE/TSM không phản hồi theo thời gian quy định, dùng Tester Support > Request Support > Test Cycle Issues.

### **Các tình huống chính**

· Rejection: đọc cả rejection reason, không chỉ type; có quyền dispute lịch sự khi có căn cứ/evidence.

· Severity cao nhưng value thấp: customer quyết định value; trước escalation phải kiểm tra bug thật sự high severity và đúng focus.

· WNF: bug hợp lệ nhưng customer không muốn đầu tư sửa. Nếu quá nhiều bug đúng focus/test case bị WNF, hỏi TE xác nhận việc đánh giá.

· Work chưa review: sau cycle lock có thể chờ tới 15 ngày; cycle tự đóng và xử lý theo TTL recommendation. Nếu vẫn New bất thường, báo TE.

· Case bị unclaim/reject: có thể do hết turnaround, thao tác nhầm, chất lượng kém nhưng thiếu lý do, hoặc cycle cập nhật case; gửi TE khi mình đã làm đúng và cần làm rõ.

· One-time issue: có thể report nếu đã ghi được video + logs và OOS không cấm; nên hỏi TTL. Bug tạm thời tự hết trước review thì discard; nếu hết sau yêu cầu reproduction, báo trong Messages.

· Email uTest hợp lệ chỉ đến từ các domain: **utest.com, m.utest.com, applause.com, applausemail.com**. Email đáng ngờ có thể báo Support theo Potential Cheating/Fraud/Misbehaviour.

## **21.4 Building a Positive Reputation at uTest**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/reputation

Uy tín được xây bằng bốn hành vi lặp lại: theo Overview; viết report chất lượng; hoàn thành case đúng và đúng hạn; phản hồi TTL/TE nhanh. Ba tiêu chí để tự đánh giá:

1. **Pay attention to details:** đọc và làm theo toàn bộ Overview; theo dõi announcement/chat để biết thay đổi.
2. **Be reliable:** chỉ accept khi có thể tham gia tích cực; hoàn thành đúng và đúng hạn.
3. **Submit quality work:** report có giá trị, đúng project requirements; case/review có thông tin hữu ích và đúng time limit.

## **21.5 Most Common Mistakes In Academy Practice Cycles**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/most-common-mistakes-in-academy-practice-cycles

1. **Sai area trong title:** xem tên page ở browser tab, breadcrumb, navigation/tab hiện tại; area thường gặp gồm Login, Register, Profile/Account, Cart, Blog, Checkout, Help, Settings.
2. **Title mơ hồ:** mô tả đủ để hiểu bug mà không cần mở report; clarity quan trọng hơn brevity; nêu tên link/video/item liên quan.
3. **Sai bug type:** lỗi liên quan hoặc ảnh hưởng chức năng thì chọn Functional.
4. **Nhiều action trong một step:** mỗi step chỉ một action; tách Scroll/Swipe và Click/Tap. Thông tin định vị phụ có thể để trong ngoặc.
5. **URL không hợp lệ:** dùng đúng test URL trong Overview; không bọc URL bằng ký hiệu.
6. **Không dùng Preconditions:** điều kiện cần có trước step 1 phải ghi dưới dạng Precondition; không biến mọi step thành precondition.
7. **Actual/Expected không rõ:** mô tả cụ thể điều đáng lẽ xảy ra và điều thực sự xảy ra; không dùng “not working properly”. Report từ case phải xóa template và tự viết theo Issue Reporting Instructions.
8. **Thiếu attachment:** kiểm tra instruction, nộp đủ trước submit, hỏi TTL khi mơ hồ. Cố ý nộp report/evidence chưa hoàn chỉnh để nhanh hơn người khác có thể dẫn tới DNFI và bị loại khỏi cycle hiện tại/tương lai.
9. **Sai format:** Academy dùng screenshot `.jpg/.png`, recording `.mp4`, console/device log `.txt`. Phát hiện sai phải sửa ngay; mở lại attachment kiểm tra; lỗi upload thì thử browser khác và clear cache/cookies.
10. **Video không bắt đầu từ homepage hoặc không khớp Actions:** nếu instruction yêu cầu whole flow, quay từ homepage, khớp từng action, bỏ bước thừa, không quay uTest platform/dự án khác, mute mic nếu không narration.

Academy Challenge còn nhấn mạnh: số step phải liên tục; bug liên quan test case phải report từ case hoặc chọn Source = Structured; chỉ upload Charles khi được yêu cầu; bắt đầu thu log trong lúc reproduce từ homepage; custom fields đúng format; kiểm tra Issues/KI file; cùng root cause được xem là duplicate dù khác keyword; đọc OOS của từng cycle trước khi test.

## **21.6 Anger Management, Issue Comprehension and Resolution**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/anger-management-issue-comprehension-and-resolution

· Khi tức giận: không gửi gì ngay; rời bàn phím, nghỉ, vận động/thở sâu/rửa mặt cho tới khi bình tĩnh.

· Sau đó xác định nguyên nhân, loại bỏ suy nghĩ “phải đúng như mình muốn”, đọc lại Overview, slot/case instruction và message từ góc nhìn khác.

· Mỗi cycle có rule riêng. Làm sai instruction thì phải redo; claim sai slot thì unclaim; luôn tôn trọng người khác và Terms of Use.

· Không tranh luận trong cycle chat hoặc Messages, không kêu gọi cộng đồng đứng về phía mình, không nhảy thẳng tới TSM trước khi hiểu và theo escalation path.

· Issue report bị reject thì dispute qua chức năng chính thức khi có căn cứ. Vấn đề case/review/unclaim/misconduct thì email TE theo Team Contact Information; TSM chỉ cho payout, emergency hoặc TE quá hạn phản hồi.

· Email escalation: Cycle ID trong subject; lịch sự; nêu đúng vấn đề; ngắn nhưng đủ; proofreading; evidence phù hợp; không CC/BCC hàng loạt TE/TSM; giữ cùng email thread.

· Outcome có thể accepted, rejected hoặc future consideration. Đọc lý do, hỗ trợ khi được yêu cầu và chấp nhận kết quả hợp lý. Emergency không được xử lý đúng thời gian mới dùng Tester Support.

## **21.7 Effective Written Communication**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/effective-written-communication

1. **Concise and Clear:** nêu object, action, result và value cụ thể. Tránh viết “can't”, “unable”, “not working” mà không nói hiện tượng. Ngắn không có nghĩa là cắt mất chi tiết; loại redundancy/irrelevant information.
2. **Structure and Organization:** introduction/context > supporting facts theo thứ tự > kết luận hoặc đề nghị hành động. Với chuỗi lỗi, kể tuần tự thời gian và kết quả ở mỗi điểm.
3. **Professional Tone:** lịch sự, khách quan, tập trung vào vấn đề; không châm biếm, gây hấn, xúc phạm hoặc ép customer approve/fix ngay.
4. **Proofreading:** kiểm tra spelling, grammar, punctuation, formatting, step/ID/version; đọc lại như người nhận để chắc ý không bị hiểu sai.

Mẫu message blocker: nêu file/build không mở được, các cách đã thử, environment, ảnh/log nếu có và đề nghị xác nhận hoặc cung cấp build khác. Mẫu mismatch: nêu version trong Overview khác version trong test case và yêu cầu xác nhận file đúng.

## **21.8 The impact of AI on uTesters**

Link: https://www.utest.com/academy/tracks/2/courses/46/lessons/the-impact-of-AI-on-uTesters

· Review/opinion/feedback/usability study phải trung thực, cá nhân và bắt nguồn từ trải nghiệm thật của tester. Customer cần insight con người, gồm điều khó hiểu, thú vị, bực bội hoặc thuận tiện khi trực tiếp dùng sản phẩm.

· Feedback AI chung chung/robotic/lệch environment làm mất credibility, giảm invitation và có thể làm customer hiểu sai. AI không thể thay trải nghiệm trực tiếp hoặc cảm xúc của user.

· Mọi tester phải tuân Terms of Use và **Generative AI Acceptable Use Policy**: https://www.utest.com/ai-guidelines. Vi phạm có thể dẫn tới termination. Không dùng AI để thay thế insight cá nhân, viết toàn bộ review hoặc trả lời open-ended survey thay mình.

· AI chỉ nên được dùng trong phạm vi policy cho phép và không được làm sai lệch nguồn gốc trải nghiệm, evidence hoặc kết quả test.

# **22. Official uTest Academy index for AI retrieval**

|   |
|---|
|**Cách dùng với AI:** Yêu cầu AI tìm đúng Course + Lesson trong chỉ mục này, đọc phần quy tắc tương ứng của tài liệu, rồi trả lời theo hierarchy ở Chương 1. Tên course/lesson dưới đây giữ nguyên như Academy; nội dung thân bài của sổ tay là bản diễn giải sát nghĩa.|

Academy catalog: https://www.utest.com/academy

## **Testing in the uTest Platform**

Course: uTest Cycle Process — https://www.utest.com/academy/tracks/2/courses/31/lessons/test-cycle-terms

· 1. Test Cycle Terms

· 2. Test Cycle Process at uTest

· 3. uTest Multi-Factor Authentication (MFA)

· 4. Accepting an Invitation

· 5. Test Cycle Information

· 6. Reporting

· 7. Communication

· 8. Tester Emails

· 9. End of the Test Cycle

Course: Slots, Test Cases and Reviews — https://www.utest.com/academy/tracks/2/courses/33/lessons/what-is-a-slot

· 1. What is a Slot?

· 2. Slots Page Overview

· 3. Claiming a Slot

· 4. What is a Test Case?

· 5. Attachments in a Test Case

· 6. Editing and Updating a Test Case

· 7. Responding to Messages in a Test Case

· 8. Responding to Info Request in a Test Case

· 9. Unclaiming a Slot

· 10. Best Practices for Slots and Test Cases

· 11. Slots: Slot Waitlist Feature

· 12. Slots: Slot Claim Criteria Feature

· 13. Slots: Slot Credentials Feature

· 14. Bug Fix Verification

· 15. Tester Review

· 16. TestRail

Course: Issue Reports — https://www.utest.com/academy/tracks/2/courses/17/lessons/understanding-bug-report

· 1. Understanding Issue Report

· 2. How to Write an Issue Report

· 3. How to Edit an Issue Report

· 4. Issue report information fields

· 5. Severity vs Value

· 6. Bug Rejections

· 7. Confirm Issue feature

· 8. Issue Quality Review

· 9. Known Issues

· 10. Best Practices

Other courses in this track: Testing Basics; uTest Mobile App; AcademyBugs.com; Academy Tips and Tricks.

## **Testing Tools**

Course: Screenshots — https://www.utest.com/academy/tracks/6/courses/37/lessons/basics-screenshots

· 1. Basics of Screenshots

· 2. Windows

· 3. macOS

· 4. Linux

· 5. Android

· 6. iOS

Course: Browser Logs — open from https://www.utest.com/academy

· 1. Basics of Logs

· 2. Desktop Browser Logs

· 3. Desktop Browser HAR Logs

· 4. Mobile Browser Logs

· 5. Android Browser HAR Logs

Course: Mobile Device Logs — open from https://www.utest.com/academy

· 1. Android Device Logs

· 2. iOS Device Logs

· 3. iOS Crash Logs

Course: Web Debugging Proxy — open from https://www.utest.com/academy

· 1. What is a Web Debugging Proxy?

· 2. Charles Proxy for Desktop

· 3. Charles Proxy for Mobile

· 4. Charles Proxy Profile

· 5. Charles Proxy Filter Traffic

· 6. Collecting Charles Proxy Logs without a WiFi Router

· 7. Fiddler for Desktop

· 8. Fiddler for Mobile

· 9. FAQ

Course: Screen Recordings — open from https://www.utest.com/academy; use the course lesson list for OS-specific capture and compression instructions.

## **Data Security and Functional Testing**

Course: Personally Identifiable Information (PII) — https://www.utest.com/academy/tracks/3/courses/44/lessons

· 1. What is Personally Identifiable Information (PII)

· 2. Why should you blur PII?

· 3. Images: How to blur/block PII?

· 4. Full website page capture

· 5. PDF: How to blur/block PII?

· 6. Videos: How to blur/block PII?

Course: Functional Testing — open from https://www.utest.com/academy

· 1. Introduction to Functional Testing

· 2. Software Development Life Cycle (SDLC)

· 3. Manual Testing VS Automation Testing

· 4. Test Cases Testing

· 5. Exploratory Testing

· 6. Functional Testing Techniques

· 7. Functional Testing Vs. Non-Functional Testing

## **Full catalog by track**

|   |   |
|---|---|
|**Catalog page**|**Tracks / Courses**|
|Page 1|Getting Started: Introduction to uTest; uTest.com Navigation; uTest Basics. Testing in the uTest Platform: Testing Basics; uTest Cycle Process; Slots, Test Cases and Reviews; Issue Reports; uTest Mobile App; AcademyBugs.com; Academy Tips and Tricks. Testing Tools: Screenshots; Screen Recordings; Browser Logs; Mobile Device Logs; Web Debugging Proxy. Data Security: PII. Functional Testing. Academy Certification Program: Introduction to Testing; Computer Testing; Mobile Device Testing; Charles Proxy Testing; Academy Challenge Testing.|
|Page 2|Localization Testing; Payment Testing; Usability Testing; Voice Testing; Amazon Alexa Testing; Streaming Apps Testing; Connected TV Devices (CTV); Online Gambling Testing.|
|Page 3|API Testing; Security Testing.|

Link chính thức cho mọi course/lesson còn lại: mở https://www.utest.com/academy, chọn đúng course, rồi dùng URL của lesson đang hiển thị. Một số lesson URL phụ thuộc trạng thái đăng nhập và route của Academy nên chỉ mục dùng catalog URL làm điểm vào ổn định.

# **23. Getting Started - Introduction to uTest**

Course: https://www.utest.com/academy/tracks/1/courses/1/lessons/welcome-utest

## **23.1 Welcome to uTest**

uTest là cộng đồng tester toàn cầu do Applause vận hành. Định hướng của nền tảng gồm **Learn, Earn, Connect**: học cách test, nhận cơ hội kiếm tiền và kết nối với cộng đồng. Academy cung cấp kiến thức nền tảng về uTest, ý nghĩa của testing và cách trở thành tester.

## **23.2 How uTest Works**

Applause dùng cộng đồng uTest để tạo đội test theo tổ hợp thiết bị, OS, vị trí và yêu cầu dự án. Tester freelance được ghép với dự án trả phí và có thể thực hiện bug reporting, test case, usability/feedback, payment, onsite hoặc các loại nhiệm vụ khác. Thiết bị đang sở hữu có thể là điểm khởi đầu, nhưng invitation phụ thuộc profile và tiêu chí cụ thể của dự án.

## **23.3 What is Software Testing?**

Software testing là đánh giá feature/functionality nhằm tìm defect và error. Crowdtesting dùng nhiều người thật, thiết bị thật, vị trí thật và tình huống thật để phát hiện khác biệt mà QA nội bộ khó bao phủ. Các biến như device/software, location, demographic và mức thành thạo công nghệ có thể tạo trải nghiệm hoàn toàn khác nhau.

## **23.4 uTest Academy và Certification Program**

· Nên học các learning track theo thứ tự; tester hoàn thành Academy và làm tốt practice cycles có khả năng nhận paid cycle cao hơn.

· Nội dung gồm: nền tảng uTest; loại testing; accept/decline cycle; bug report; slot; test case; screenshot/video/log; chat; mobile app; PII; tips.

· Certification Program là chuỗi practice cycles hàng tuần, không phải chứng chỉ nghề chính thức. Hoàn thành mỗi level nhận email chúc mừng; hoàn tất toàn bộ nhận graduation email.

· Các level: Introduction to Testing; Computer Testing; Mobile Device Testing; Charles Proxy Testing; Academy Challenge; Academy All Stars (invitation only).

· Mỗi practice level thông thường chỉ hoàn thành một lần; Academy Challenge có thể tham gia tối đa 10 lần theo bài hiện hành.

## **23.5 Helpful Definitions bổ sung**

Ngoài glossary ở 21.1, cần nhớ: Project/Test Cycle là một đợt test cụ thể; PB = Projects Board; STLC = Software Testing Life Cycle; SUT/AUT = hệ thống/ứng dụng đang test; SPA = Single Page Application; SIT = System Integration Testing; SDET = Software Development Engineer in Test; CMS = Content Management System; SDK = Software Development Kit; IDE = Integrated Development Environment; E2E = End to End.

# **24. Getting Started - uTest.com Navigation**

Course: https://www.utest.com/academy/tracks/1/courses/8/lessons/top-navigation-bar

## **24.1 Top Navigation Bar**

· Search tìm Users, Articles, Forums, Projects và Courses.

· Chat: https://chat.utest.com/. Announcements chỉ để TTL/TE đăng thông báo; phải đọc, không gửi message vào đó. Questions dùng hỏi về đúng cycle. Enter gửi, Shift+Enter xuống dòng. Participant list cho biết tester/TTL/TE trong room. Project Chat chỉ hiện khi được mời.

· Notifications gom invitation, IR, issue/test-case message, status, survey invitation và community activity.

· Account menu: Account Settings; Access & Security/MFA; Advanced Settings; Knowledge Base; Support AI Agent; Sign out. Support ticket phải chọn đúng category và mô tả đủ dữ kiện.

## **24.2 Profile Menu**

· Personal: tên, ngày sinh, email, số điện thoại, location phải chính xác.

· Language & Voice: tối đa 5 ngôn ngữ, tối đa 2 Native. Native hiểu cả slang; Fluent dùng tốt trong môi trường chuyên nghiệp; Proficient có kiến thức chung nhưng còn khó khăn; Basic dựa nhiều vào từ điển/tài nguyên.

· Devices: chỉ thêm thiết bị thực sự sở hữu và có thể dùng lâu dài; cập nhật thường xuyên để đáp ứng IR/retest. Invitation chỉ đến khi profile khớp project.

· Payment Testing, Subscriptions, Interests: khai đúng payment instruments, dịch vụ đang dùng, sở thích/sports và willingness liên quan gambling nếu phù hợp.

· Statistics: rating, activity/history. Community Profile: avatar/banner, referral, badges, articles, statuses, comments, mentions, topics, likes.

· Payments: earnings, pending payout, summary/history, payment method và hiển thị widget/currency.

## **24.3 Home**

My Activity có All, Projects, Invitations và Community. New Joiner Checklist tự biến mất sau 30 ngày hoặc khi hoàn thành sớm. Profile Completion Card hiển thị định kỳ; dùng “I don't have any” khi thật sự không có. My Devices phải luôn phản ánh hardware/software hiện tại.

## **24.4 Academy page và grade**

Course có trạng thái Start/Resume/Review; quiz khóa tới khi xong lessons. Certification course chỉ mở Sign Up practice cycle sau khi học và pass quiz.

· Monday-Wednesday: sign-up thường được mời vào cycle tuần hiện tại. Thursday-Sunday: vào pending cycle và thường active vào Monday tuần sau.

· Pass course có practice cycle đòi pass cả quiz lẫn cycle. Level sau bị khóa nếu chưa pass level trước.

· Trong Active/Locked Academy cycle, Pass có thể được gán 12-24 giờ sau khi cả issue và test case được approve. Khi cycle Closed, hệ thống gán Pass/Fail cho người còn lại. Fail được đăng ký lại cùng level.

## **24.5 Projects**

· Dashboard/Projects hiển thị Invited, Pending, Active và Locked cycle, pending payment, invitation/survey, unsubmitted case và IR/message reminder.

· Pending Activation: đọc thông tin nhưng không submit issue/case. Active: làm việc. Locked: không tạo report/case mới nhưng có thể sửa submission được yêu cầu và chat.

· Test Cycles, Issues và Test Cases đều hỗ trợ filter/search/sort; Issues có thể lọc own issues, closed cycles và resolved/fixed.

· Projects Board chỉ hiển thị một phần cơ hội; mặc định ưu tiên project phù hợp profile. Có thể lọc theo urgent, country và OS.

## **24.6 Community, Footer và AI Support Agent**

Community Feed/Articles/Forum dùng để đăng và trao đổi nội dung. Trước khi tạo forum topic phải search xem đã có chưa. Flag chỉ dùng cho nội dung offensive/harmful/vi phạm, không lạm dụng.

Footer dẫn tới Terms of Use, Privacy Policy, AI Guidelines và Cookie Settings. Vi phạm có thể gây strike, suspension hoặc termination.

AI Support Agent hỗ trợ 24/7 về navigation, account/profile/device, khái niệm cycle, Academy, login/MFA guidance, bug-report best practices, onsite basics và thông tin payment chung. Agent web dùng được trên desktop/mobile browser nhưng không có trong uTest Mobile App.

Agent **không thể** truy cập/chỉnh account; reset MFA; đọc cycle/bug/case cụ thể; review/reverse rejection; xử lý dispute/payout/grade; cung cấp onsite logistics; hoặc trả lời active-cycle question thay TTL/TE. Không giải quyết được thì mở human support ticket; active-cycle question đi qua Chat hoặc email theo Team Contact Information.

# **25. Getting Started - uTest Basics**

Course: https://www.utest.com/academy/tracks/1/courses/30/lessons

## **25.1 Terms of Use and Guidelines**

· English là ngôn ngữ làm việc chính cho community posts và uTest work.

· Không chia sẻ payment của project; không nhiều account/dùng account hoặc payment account của người khác; không khai gian profile; không public customer information; không quảng cáo trái phép hoặc đăng nội dung vi phạm.

· Không host session artifacts trên file-sharing site. Không liên hệ customer/TTL ngoài kênh cho phép của uTest.

· Không dùng emulator/simulator/remote machine/beta software/jailbroken device trừ khi uTest employee cho phép. Tắt VPN, SSH tunnel, proxy/IPSec hoặc kết nối có thể theo dõi/truyền dữ liệu dự án, trừ khi instruction yêu cầu công cụ proxy cụ thể.

· Không xin customer/project manager approve work, remove khỏi cycle hoặc đánh dấu favorite. Không recycle submission cũ, copy work người khác hoặc tạo placeholder.

· Hardware uTest/Applause gửi phải được trả ngay sau project trừ khi có cho phép rõ ràng được giữ.

## **25.2 Tester Selection**

Tiêu chí phổ biến: device/software; geography; demographics/characteristics; payment instruments/subscriptions. Ngoài profile, uTest tuyển qua Projects Board và SRS. Mỗi SRS gắn với một cycle, được gửi trước cycle và chỉ submit một lần; TE/TSM review để chọn người khớp. Mọi dữ liệu có thể được xác minh, khai gian vi phạm Terms of Use.

## **25.3 Payments**

Thu nhập có thể đến từ approved issue, test case, review, usability study, onsite testing và referral program hợp lệ. Payout phụ thuộc cycle rate, value và rating tier.

Lịch trả: ngày 15 và ngày cuối tháng; nếu trùng weekend/US holiday thì chuyển sang business day kế tiếp. Phương thức hiện được bài học nêu: PayPal, Payoneer, Direct To Bank Transfer powered by Wise; availability phụ thuộc quốc gia.

Direct bank cần thông tin như full name khớp bank, account/IBAN, SWIFT/BIC hoặc mã địa phương, bank name/address và có thể cả địa chỉ tester. Kiểm tra kỹ trước Submit & Verify; thay đổi bank phải cập nhật. uTest không khấu trừ thuế; tester chịu trách nhiệm khai/nộp theo luật địa phương.

## **25.4 Tester Ratings**

Rating là số 0-100 so với active rated testers và được tính riêng theo testing type. Unrated thường dưới 25 activity points; sau đủ activity mới vào Rated. Các tier được Academy nêu: Rated, Proven, Bronze, Silver, Gold; Gold là top 7% rated testers.

Tăng điểm: tham gia cycle đã accept; decline sớm khi không thể làm; approved report/case; +1 reproduction có evidence. Giảm điểm: accept rồi không tham gia; rejected work trừ WAD; integrity thấp; không phản hồi TTL/TE. Tier tính lại hàng đêm và còn phụ thuộc activity/quality của cộng đồng.

Premium bug payout: Bronze 2.5%, Silver 5%, Gold 10%, áp theo rating của testing type trong cycle. Favorite Tester do customer chọn, tăng khả năng được mời lại và thêm 5% issue payout cho cycle của customer đó trong khi còn favorite; tester không được xin trạng thái này.

## **25.5 Tester Security và GDPR**

Không chia sẻ account/password; dùng mạng an toàn; cập nhật security software; chỉ tải từ nguồn tin cậy. Domain email chính thức: utest.com, m.utest.com, applause.com, applausemail.com. Dropbox/HelloSign có thể gửi trusted tester agreement cho một số project. Email giả báo Support > Potential Cheating/Fraud/Misbehavior.

GDPR bảo vệ personal data của chính mình và người khác. Video thường vi phạm khi quay uTest/chat, notification/customer khác, inbox/call, webcam, tên/address/ID đọc thành tiếng, ảnh người thân, browser autofill hoặc keyboard đang nhập password/PII.

Phòng tránh: dùng email test không chứa tên; tắt webcam/notification/autofill; không quay uTest/profile/payment/project khác; hạn chế đổi tab; dùng thiết bị thứ hai để đọc instruction; blur keyboard và PII trong toàn bộ thời gian hiển thị. Cycle có thể có quy trình riêng để TTL xử lý video chứa real data, nhưng phải làm đúng instruction cụ thể.

# **26. Testing in the uTest Platform - Testing Basics**

Course: https://www.utest.com/academy/tracks/2/courses/34/lessons/testing-types

## **26.1 What is Testing?**

Testing đánh giá software, hardware hoặc physical service để tìm gap, error, improvement và missing requirement so với yêu cầu thực tế. Giá trị chính: tăng quality và customer satisfaction; giảm security vulnerability; phát hiện sớm để giảm chi phí sửa.

Các loại tại uTest: Functional, Exploratory, Regression, Smoke, Usability, Localization, Security, Automation, Payment, Accessibility, API, Voice, Bug Hunt và On-site. Bug Hunt có focus rất hẹp; test ngoài yêu cầu có thể bị OOS/DNFI và ảnh hưởng rating mạnh.

## **26.2 What is a Bug (Issue)?**

Bug là error/flaw/fault gây kết quả sai, bất ngờ hoặc hành vi không đúng ý định. Năm type dùng trên uTest:

|Type|Dấu hiệu|
|---|---|
|Functional|Workflow/feature không hoạt động như thiết kế, kết quả khác expected.|
|Visual|Layout/UI distortion, missing/misaligned/overflow/inconsistent visual element.|
|Content|Spelling, grammar, capitalization, punctuation hoặc localization text sai.|
|Performance|Chậm, lag, page/load lâu, freeze/unresponsive trên 10 giây.|
|Crash|App/browser đóng, treo dài hoặc kết thúc bất ngờ.|

Issue report phải chứa đủ dữ kiện để hiểu, reproduce và fix.

## **26.3 What is a Valid Bug?**

Valid khi đáp ứng toàn bộ cycle requirements. Trước khi report phải loại:

· **WAD:** hành vi đúng thiết kế dù tester thích cách khác hơn. WAD không ảnh hưởng rating.

· **OOS / do-not-report criteria:** sai area, product hoặc loại issue Overview đã loại.

· **Duplicate / Known Issue:** đã có report cùng root cause hoặc customer đã biết.

· **DNFI:** bug có thể thật nhưng report/test không tuân instruction, ví dụ placeholder, evidence sai hoặc không dùng/tắt công cụ theo Overview.

## **26.4 Testing a Website or an App**

Quy trình: đọc Overview > hiểu product/focus > dùng như user thật > xác minh bug valid > tạo đúng attachments và report > tiếp tục theo dõi, trả lời IR/message đúng hạn. Submit report không phải điểm kết thúc.

## **26.5 When is an Issue Not an Issue?**

Phân biệt **not working as designed** (defect) với **not designed as it should work** (feedback) và **not designed how I like it** (preference). Khả năng valid cao hơn khi feature thật sự hỏng, thuộc customer focus, cản user, reproduce ổn định và có impact; thấp hơn khi chỉ unconventional, có phương án tốt hơn hoặc khác sở thích cá nhân.

Negative/stress input phi thực tế thường không hợp cycle yêu cầu “test as a regular user”, trừ khi gây failure nghiêm trọng hoặc Overview khuyến khích. One-time issue: clear cache, restart, reproduce; nếu không tái hiện và không có impact lớn/evidence thì thường không nên report. Không chắc thì hỏi TTL/TE.

## **26.6 Test Case Execution - breadth, depth và Observations**

Testing breadth là độ phủ nhiều khu vực/feature/device/sync flow; depth là đào sâu một feature với timing, back navigation, promo code, state và edge cases.

Case có thể gồm Description, Preconditions, Steps, Expected, Actual, Status, Observations/Comments, Attachments và Bug ID. Đáp ứng precondition trước; chạy đúng thứ tự; verify từng expected; Pass nếu actual khớp, Fail nếu lệch. Failed step phải kiểm tra DUP/KI và gắn Bug ID; nếu step sau phụ thuộc và không có workaround thì hỏi TTL/TE.

> [!important] Observe không mâu thuẫn
> Không tạo một reproduction step riêng chỉ ghi “Observe/Check/View”. Nhưng **Observations/Comments** trong test case là trường hợp hợp lệ để ghi insight cho cả Pass và Fail. Actual Result của bug vẫn ghi hiện tượng quan sát được.

Điền mọi step đầy đủ và trung thực. File test case phải theo naming instruction; ví dụ có thể gồm case name + OS + browser, nhưng rule của cycle là quyết định. Hoàn thành/submit case trước khi chuyển sang exploratory sâu nếu instruction yêu cầu.

## **26.7 Installing Apps on Mobile Devices**

### **Android**

Play Store: mở link từ Overview, install, rồi kiểm tra version trong Settings > Apps. Nếu app không có ở country, device incompatible hoặc version mismatch thì báo TTL.

APK: tải từ Attachments/QR, mở file, cho phép **Allow from this source**, quay lại và Install. Android 8+ có thể dùng Camera/Google Lens; Android 7 trở xuống cần QR scanner phù hợp.

### **iOS**

App Store: mở link từ Overview, install, kiểm tra version tại Settings > General > iPhone Storage.

TestFlight: cài TestFlight, mở đúng invite/link và chọn đúng version.

IPA: dùng Download on Mobile Device hoặc QR nếu có; sau install vào Settings > General > VPN and Device Management (iOS 15+) hoặc Profiles and Device Management để trust app. Không có direct button thì có thể dùng iTunes; macOS 10.15+ dùng Apple Configurator 2; iMazing cũng có thể cài IPA theo instruction. Luôn trust đúng computer/device và xác minh build/version.

## **26.8 Common Website Elements and Pages**

Tên element nên dùng chính xác trong report: Hero, Banner, Carousel, Navigation, Hamburger Menu, Breadcrumb, Pop-up, Toggle, Checkbox, Text Field, Drop-down, Radio Button, Tabs, Footer. Tên page thường gặp: Homepage, PLP, PDP, Cart, About Us. Xác định area từ browser tab, breadcrumb, heading và navigation thay vì tự đặt tên.

## **26.9 Best Practices**

· Đọc Overview nhiều lần; hỏi TTL khi mơ hồ.

· Chuẩn bị máy: tắt extension/ad blocker, clear cache/cookies nếu phù hợp, tắt VPN, đóng app/tab thừa.

· Dùng như real user, không chỉ cố phá; reproduce nhiều lần trước report trừ one-time critical đã có evidence và được scope cho phép.

· Không placeholder; đủ info/evidence; proofreading. +1 chỉ khi thật sự reproduce, giúp customer biết cross-device impact và có thể tăng rating.

· Chat không noise; không hỏi lặp/không liên quan; mọi message/dispute/email phải chuyên nghiệp và tuân Terms/AI Guidelines.

# **27. Testing in the uTest Platform - uTest Mobile App**

Course: https://www.utest.com/academy/tracks/2/courses/32/lessons/utest-app-introduction

App Android/iOS cho phép nhận/accept invitation; claim slot/case; execute case/report issue; unclaim/Undo Submission; đọc message/IR; push notification; chỉnh profile cơ bản; xử lý SRS và chat. Không truy cập Community bằng mobile app; nên bật auto-update.

## **27.1 Navigation và cycle page**

Home hiển thị invitation, cycle/case sắp hết hạn trong 24 giờ, SRS và unread notification. Projects chia Active/Pending/Locked. Chat có cycle/project/contact. Profile chỉnh thông tin cơ bản; Settings quản lý push notification/legal/sign out.

Cycle chưa accept chỉ thấy Overview và Slots. Sau accept mới có thêm Test Cases, Issues, Attachments, Announcements. Đọc toàn Overview; announcement có thể yêu cầu **Acknowledge**. Issues có search/filter và nút bug xanh để report. Attachments chứa build/tài liệu.

## **27.2 Accept/Decline và slot**

Mở invitation > Accept NDA > đọc/expand toàn Overview > Accept Cycle hoặc Decline kèm reason/comment. Special requirements phải tick xác nhận. Mandatory slotting dùng **Accept & Claim Slot**; vào waitlist chưa có nghĩa là đã chính thức accept cycle.

Slot gồm Test Case linked và Exploratory. Chỉ claim slot mình đủ điều kiện. App cho Join/Leave Waitlist, claim BFV/case trực tiếp khi phù hợp và Unclaim tại Slots > Claimed.

## **27.3 Reporting Issues trên app**

Vào Issues > Report Bug > điền 4-5 bước của form > Submit. Edit/Discard qua menu ba chấm. IR/message có thể mở từ Notifications hoặc issue/case; sửa xong chọn **Send Confirmation** để báo đã cung cấp đủ.

## **27.4 Executing Test Cases trên app**

Mở case, kiểm tra progress/tester/build/environment/instruction; chạy từ step 1 đúng claimed environment. Mỗi step đánh Done hoặc Pass/Fail; attachment qua nút `+`; swipe ngang giữa steps. Pass comment optional, Fail comment mandatory. Fail sẽ gợi ý report issue; nếu bug đã có thì Cancel và liên kết/ghi ID theo rule cycle.

Xong mọi step > Submit Test Case > time spent + comment > Submit. Xử lý IR: đọc yêu cầu > Unsubmit Test Case > sửa > submit lại > nhập time/comment > quay về Notifications > Send Confirmation.

## **27.5 SRS và Chat**

SRS trên Home > Take Survey > trả lời trung thực > review > Submit Survey. Decline xảy ra ngay sau khi chạm nút, không có confirmation, nên tránh bấm nhầm.

Chat có Announcements và Questions. Tester/TTL có thể `@testername`; tester có thể `@ttl`; chỉ TTL dùng `@all`. Menu ba chấm cho Reply/Reaction; replies mở thread. Search có mũi tên chuyển giữa kết quả. Bật notification tại Profile > Settings > Push notifications > Chat @ Mentions. Luôn tuân Terms of Use.

# **28. Testing in the uTest Platform - AcademyBugs.com**

Course: https://www.utest.com/academy/tracks/2/courses/35/lessons

Trang thực hành: https://www.academybugs.com

AcademyBugs có bốn phần: **Examples of Bugs** (6 ví dụ), **Types of Bugs** (5 loại), **Find Bugs** (25 bug cài sẵn, mục tiêu tối thiểu tìm 20 trước quiz) và **Report Bugs** (5 tab luyện tạo report chất lượng). Dùng biểu tượng `?` để mở Tutorial.

Trình tự được bài yêu cầu: xem Examples + Types để hiểu bug > vào Find Bugs tìm ít nhất 20 > làm quiz > vào Report Bugs hoàn thành đủ 5 report và xem kết quả sau mỗi lần Submit Issue.

# **29. Localization Testing**

Course: https://www.utest.com/academy/tracks/12/courses/47/lessons/localization-testing-introduction

|Khái niệm|Phạm vi|
|---|---|
|L10N - Localization|Điều chỉnh cho một locale: translation + văn hóa, date/time, currency, image, symbol, unit.|
|T9N - Translation|Chuyển ngôn ngữ và giữ đúng nghĩa/ngữ pháp/thuật ngữ; chỉ là một phần của localization.|
|I18N - Internationalization|Chuẩn bị kỹ thuật để dễ localize: Unicode/UTF-8, external resource, flexible layout, RTL, locale formats.|
|G11N - Globalization|Chiến lược tổng thể để dùng toàn cầu, bao gồm I18N + L10N.|

Phải kiểm tra: character encoding; number system; LTR/RTL; spelling/capitalization/sorting; keyboard/layout; image/color/cultural acceptance; name/title/ID/address/phone/postal code; currency symbol/position; unit; paper size; date/time/calendar/timezone; decimal/group separator.

Bug L10N/T9N/I18N/G11N thường gặp: date/currency/unit sai locale; wrong/missing/poor translation; over-localized brand/technical term; terminology không nhất quán; text bị truncate/overlap; image chứa text chưa dịch; font thiếu glyph; garbled encoding; hard-coded text; RTL/mirroring lỗi; language/locale detection sai; resource thiếu; layout không chịu text expansion; performance localized resource kém.

Trong uTest Localization cycle có sáu issue type: **Corrupted Characters; Missing Translation; Poor Translation; Truncation and Overlap; Currency and Number Format; Other/General**. Other gồm shipping/form/foreign OS/input/third-party software/disputed map border/image-color/culture/subtitle/audio.

Accept cycle phải chọn Specified Language và ngôn ngữ đó phải có trong profile. Chọn bug Type trước vì form đổi theo type; Missing/Poor Translation có Recommended String và Actual String. Issue do Localization Expert review. Report dùng English trừ khi scope nói khác. Không thêm ngôn ngữ mình không biết, không đoán và không dùng translator app/Google Translate để thay năng lực ngôn ngữ. Mơ hồ hỏi team qua chat; vấn đề nhạy cảm/ToU thì email TE.

# **30. Payment Testing**

Course: https://www.utest.com/academy/tracks/7/courses/3/lessons/what-is-payment-testing

Payment Testing là test cần Payment Instrument (PI), như credit/debit card, PayPal hoặc phương thức địa phương. Cập nhật mọi PI thật trong Profile > Payment Testing; profile chỉ lấy đặc điểm như country/bank, không thu card secret.

Ba kiểu: **Active** tester trực tiếp mua; **Split** thực hiện live trong conference/screen-share; **Passive** cung cấp PI data theo kênh bảo mật để customer thực hiện và tester theo dõi transaction/refund. Target: POS/in-store, ATM, online/e-commerce.

## **30.1 Payment flow và evidence**

In-store có magnetic stripe, EMV chip, contactless NFC và mobile wallet. Contactless có thể yêu cầu PIN/sign khi vượt limit. Luôn lấy **terminal receipt** cho cả accepted, declined và error, không chỉ product receipt.

Online có card, internet banking, payment system như PayPal và mobile wallet. Capture success/error details, order email và transaction trong bank/card/e-wallet nếu instruction yêu cầu. Không được lộ OTP, password, CVV hoặc full card number.

Evidence thường gặp: terminal receipt; terminal model/version; GPS tại POS/ATM; storefront; accepted-card signage; ghi chú trải nghiệm. Receipt có thể chứa STAN/RRN, approval/auth number, MID, acquirer, amount; thiếu một trường không tự động làm evidence invalid nếu receipt không in nó.

## **30.2 In-store rules**

Lập route, kiểm tra store/timing/card acceptance, chuẩn bị thiết bị/log và chỉ đi sau khi TTL đồng ý plan. Không tự liên hệ bank/store customer care nếu chưa có PM/TTL consent. Không tiết lộ đang làm uTest trừ khi instruction yêu cầu. Staff phản đối chụp ảnh thì xóa, rời đi lịch sự và báo TTL; tránh conflict.

Nếu decline liên tiếp, dừng chuỗi visit và hỏi TTL. Không vượt spending limit, ưu tiên món rẻ nhất; test ngoài peak hour nếu không được yêu cầu khác; submit sớm, bài học gợi ý 2-3 giờ sau visit. Store đóng: chụp GPS + địa điểm thực và làm theo case riêng.

## **30.3 Open Banking và bảo mật**

Open Banking cho phép user cấp/revoke quyền chia sẻ balance/transaction qua API cho third-party authorized service. Test có thể gồm payment, functional, usability, regression và accessibility.

Đọc Overview/document/slot/case nhiều lần; xác minh fee/reimbursement trước. Hiểu bank product và consent flow, chuẩn bị recording sạch. Blur/redact mọi PII/payment info; dùng Private Attachment nếu cycle bật. Không bao giờ chia sẻ full card number, CVV hoặc expiry; bài cho phép BIN sáu số đầu nhưng cycle instruction vẫn ưu tiên. Revoke consent khi test xong nếu test yêu cầu grant consent.

Giữ email/receipt và có thể lập sheet theo date, amount, PI, cycle. Không claim nếu thiếu đúng PI. Mọi refund, reimbursement, proof và purchase rule trong Overview có ưu tiên cao nhất.

# **31. Usability Testing**

Course: https://www.utest.com/academy/tracks/5/courses/29/lessons/what-is-usability-testing

Usability test dùng mẫu user đại diện để đánh giá UI có thân thiện và giúp hoàn thành task dễ dàng không. **UI** là thành phần nhìn/thao tác; **Usability** là độ dễ và hiệu quả; **UX** là trải nghiệm/cảm xúc trước-trong-sau khi dùng.

Study có thể in-house/remote, moderated/unmoderated. uTest chủ yếu remote unmoderated bằng survey task plan. Feedback phải từ trải nghiệm cá nhân: cảm thấy gì, dễ điều hướng không, mắc ở đâu, đề xuất gì và vì sao.

## **31.1 Eligibility và survey**

Study requirements nằm trong Overview, Slotting Rules và Slot Description. Chỉ accept/claim khi khớp hoàn toàn. Survey có thể reject/unclaim nếu SRS khác response; không khớp demographic/location; câu trả lời vô nghĩa; không tiến triển; video thiếu/không nói; sai instruction/slot.

Flow: claim đúng slot > Take Survey > Start Survey > mở **Survey Direct Link** để uTest không xuất hiện > hoàn thành > Study Complete > upload evidence ở Uploads nếu yêu cầu.

Đọc toàn instruction trước khi thao tác vì nó có thể quy định thời điểm record hoặc câu phải trả lời trước task. Không one-liner; trả lời “why”, nêu điều muốn thay đổi; bám đúng câu hỏi; dùng ngôn ngữ rõ nhất nếu được phép; completion time nhanh bất thường có thể làm response invalid.

## **31.2 Video và Think Aloud**

Chỉ claim video slot khi chắc chắn nộp đúng hạn. Quay start-to-finish theo đúng task bằng screen recorder, không dùng camera thứ hai quay màn hình trừ khi instruction riêng. Nói liên tục suy nghĩ, kỳ vọng, lý do click, điều thích/không thích, điểm rõ/mơ hồ và cảm xúc; không chỉ đọc action đang làm.

Blocker vẫn giữ recording và giải thích. First-impression task phải là lần đầu nhìn page; không mở trước làm mất tính hợp lệ. Test audio trước; phòng yên tĩnh; nói rõ; giảm âm thanh của product để voice nghe được.

GDPR: dùng direct link; chỉ quay test site; không quay uTest/survey answer trừ khi chỉ định; không quay chính mình; khi xưng danh chỉ nói first name, không last name; không lộ customer/chat/project khác.

## **31.3 What to evaluate**

· Look and feel: color, contrast, font, readability.

· Layout/content: rõ, hữu ích, image size/placement, link có phân biệt được không.

· Content flow: page tiếp theo có hợp logic, terminology có nhất quán.

· Information architecture: tổ chức/navigation, dead end, tìm feature, quay Home.

· Error message: hiểu được lỗi, nguyên nhân và cách sửa không; rule có được báo trước thay vì sau khi user làm xong không.

Usability session test product, không test năng lực cá nhân; negative feedback trung thực vẫn có giá trị. Luyện bằng cách dùng nhiều site và nói thành tiếng điều thích/không thích/đề xuất. Luôn test capture tool trước và làm theo rule riêng của project.

# **32. API Testing**

Course: https://www.utest.com/academy/tracks/9/courses/28/lessons/what-is-api

API là interface trung gian để hai application giao tiếp; API testing thường dùng client như Postman gửi request trực tiếp tới server, không test qua browser/mobile UI.

## **32.1 HTTP basics**

URL: `protocol://hostname:port/path-and-resource`; mặc định HTTP port 80, HTTPS 443. HTTP là stateless request-response.

|Method|Mục đích phổ biến|
|---|---|
|GET|Đọc resource; phải safe/idempotent, không được làm thay đổi data.|
|POST|Tạo/submit; gọi lặp có thể tạo nhiều resource.|
|PUT|Thay thế/update toàn resource, thường idempotent; một số API cho tạo mới.|
|PATCH|Update một phần resource đã tồn tại.|
|DELETE|Xóa resource.|
|HEAD|Lấy headers, bỏ body.|
|OPTIONS|Hỏi communication methods/options được hỗ trợ.|

Status class: 1xx information, 2xx success, 3xx redirect, 4xx client error, 5xx server error. Headers là key-value như Host, User-Agent, Accept, Accept-Language, Content-Type, Cache-Control, Content-Length. GET query bắt đầu bằng `?`, cặp key-value phân cách bằng `&`; POST thường đưa data vào body. `application/x-www-form-urlencoded` encode ký tự; `multipart/form-data` thường dùng upload file với boundary.

## **32.2 Postman, CRUD và auth**

Tạo Collection > Request > method + URL > Params/Auth/Headers/Body > Send > kiểm tra response body/status/time/size/headers > Save. CRUD mapping: Create POST/PUT; Read GET; Update PUT/POST/PATCH; Delete DELETE.

Basic Auth gửi credential dạng Base64 trong Authorization header nên chỉ dùng qua HTTPS; Bearer token gửi `Authorization: Bearer <token>` và ai giữ token có quyền tương ứng. Có thể đặt Auth ở Collection và request dùng **Inherit auth from parent**.

## **32.3 What to test**

· Bắt đầu happy path; sau đó negative input: sai date/type, thiếu required field, number quá lớn.

· Gửi unauthenticated/invalid token và kiểm tra API không lộ stack trace/detail nhạy cảm.

· POST/PUT/PATCH xong dùng GET hoặc response để xác minh mọi field, không truncate/missing; DELETE xong kiểm tra resource thật sự không còn.

· Kiểm tra one-time/limit không bị bypass; chỉ performance/rate test khi customer cho phép.

· So response/status/schema/behavior với API specification.

## **32.4 API families**

Protocol như SOAP/XML-RPC quy định message syntax; REST là architectural style; WSDL/WADL mô tả method/parameter/request/response; JSON/XML/GraphQL là format/language. SOAP dùng XML envelope/header/body và thường WSDL. JSON dùng object `{}`, key-value `:`, phần tử `,`, string trong quotes; request phải đặt đúng `Content-Type: application/json`. Công cụ/technology được Academy nêu thêm: SoapUI, GraphQL, Swagger UI.

# **33. Security Testing**

Course: https://www.utest.com/academy/tracks/13/courses/146/lessons/security-testing-introduction

Lesson set chính thức gồm Security Testing Introduction; Security Testing Types; Penetration Testing Overview/Stages/Tools; OWASP; Legal & Ethical; Ways/Recommendations; In Depth; Methods and Tools; Hacker Types; Reporting Security Bugs; Burp Suite Community; Best Practices; learning appendix.

> [!danger] Authorization bắt buộc
> Không bao giờ làm security/penetration test nếu không có authorization. Trên uTest, **Cycle Overview + scope + timeframe + limitations** là phạm vi cho phép bằng văn bản. Ngoài cycle, ngoài thời gian hoặc ngoài scope có thể là hành vi phạm pháp dù mục đích tốt.

Security testing gồm penetration test, vulnerability/risk assessment, security audit, compliance test, threat modeling/emulation. Pen test mô phỏng attack có kiểm soát bởi white-hat; audit rà chính sách/hệ thống; compliance đối chiếu GDPR/HIPAA/PCI-DSS...; threat model xác định actor, asset, data flow, trust boundary, likelihood/impact và mitigation.

## **33.1 Legal, ethical và confidentiality**

· Tuân NDA/Terms, luật quốc gia và data protection; không công khai customer, system, vulnerability, credential hoặc tool/data được cung cấp.

· Dùng đúng test account/email format, whitelisted IP, required header, VPN/proxy nếu cycle bắt buộc. Đây là ngoại lệ có instruction rõ, không tự bật/tắt theo rule chung.

· Chỉ khai thác tới mức tối thiểu để chứng minh PoC; không tải toàn database hoặc thu quá nhiều dữ liệu nhạy cảm.

· Scanner/tool phải bắt đầu thận trọng, tăng dần, theo dõi tác động và tránh third-party system. Accidentally crash/delete/destabilize phải báo project team ngay.

· Kết thúc test phải xử lý/xóa local test data theo instruction và luật; bảo vệ máy để người khác không truy cập cycle data.

· Responsible disclosure phải đầy đủ, trung thực, không giữ lại chi tiết để đòi tiền. Không email customer ngoài quy trình hoặc tự nhận bounty. Chỉ tester đã vetted/approved mới tham gia uTest security cycle.

## **33.2 Reporting**

Security report phải có asset/endpoint, scope authorization, vulnerability category, prerequisites, reproducible steps, minimal PoC, observed impact, evidence đã redact, severity/risk reasoning và mitigation suggestion nếu instruction yêu cầu. Không đưa secret/PII thật nhiều hơn mức cần thiết. Mọi phương pháp/tool/payload phải nằm trong permitted methods của cycle.

# **34. Voice Testing**

Course: https://www.utest.com/academy/tracks/8/courses/45/lessons/Voice-Testing-Overview

Voice testing thu thập utterance từ người thật để train/test ASR, NLP và voice assistant trên language, dialect, jargon, intent và environment đa dạng. Product có thể là smart-home, AR/VR, in-car infotainment hoặc wearable. Tester nhận script với tiêu chí cụ thể và phải tạo audio đúng quality.

Thuật ngữ: **Wake word** kích hoạt assistant; **Utterance** là đoạn lời nói có khoảng ngắt; **Intent** là task/action user muốn; **ASR** chuyển speech thành text; **NLP** hiểu language/intent/sentiment; **Latency** là độ trễ; **Moderator** hướng dẫn live session.

## **34.1 Utterance types và criteria**

Utterance có thể Free-form, Prompted, Structured hoặc Nonsensical. Background có thể clean hoặc có noise theo tiêu chí; noise mô phỏng phải nghe được nhưng không phá utterance, bài nêu thường khoảng 50-60 dB. Volume: Low nhưng không whisper, Normal, Loud/projecting.

Các stage/task có thể là dogfooding, dictation, functional command, latency follow-up và utterance khi vận động/labored breathing. Luôn làm đúng environment/script/pace.

Quality: đọc prompt kỹ; chuẩn bị; nói rõ và tự tin; phát âm đủ; start/stop chính xác; tạo pause rõ (bài gợi ý 3 giây trước/sau khi mới luyện); đổi vocabulary tự nhiên khi được phép; giữ controlled environment. Tránh mumble, ăn/uống/nhai gum, hate speech/profanity/PII, copy wording của example. Trừ khi tiêu chí yêu cầu, tránh hesitate, lip smack, throat clear, laugh, heavy breathing, whisper, cross-talk và long pause.

## **34.2 In-home/on-site và device handling**

In-home flow: Selection > Commitment > Shipping/Receiving > Tester/Referral testing > Test Case Submission > Device Return. Đọc NDA/consent/referral/mileage/device FAQ. Làm đúng delivery instruction, device setup/care/safety/network/login/troubleshooting. Trước trả có thể phải factory reset; dùng prepaid return label, giao tại FedEx/affiliated site theo bài, không drop box/pick-up; giữ receipt làm bằng chứng.

Referral chỉ khi project cho phép, người 18+ đã khai form và ký NDA/consent, thực hiện dưới giám sát tại nhà và dùng account riêng trên device theo script; tester claim Referral test case.

On-site: check-in/ID/project confirmation/form; moderator hướng dẫn và bảo đảm an toàn/device/data. Không tự ý thay đổi setup; escalation theo Moderator > Tech Moderator > On-site Lead > Client POC. Indoor giảm audio interference; outdoor thu ambient noise nhưng phải giữ khoảng cách và kiểm soát.

## **34.3 ML context và best practices**

ML flow: Collection > Training > Deploy; voice project lặp Plan > Design > Model > Test/Feedback. Data quality review kiểm tra demographic, file playable/intelligible, domain/script match và remediation.

Tester cần xác định goal, khớp criteria/environment, đọc toàn rules/description/supplement, hỏi tới khi hiểu, dùng moderator/team, giữ pace đúng timeline, hoàn thành script, tạo utterance chất lượng và realistic. Không skip, không overthink và không đi ngoài script/criteria.

# **35. Amazon Alexa Testing - lesson index**

Course: https://www.utest.com/academy/tracks/8/courses/19/lessons

Các lesson chính thức: Testing with Amazon Alexa; Amazon Alexa Device Models; How to Understand Intents - Alexa Voice Design Guide; How Alexa Skills Work; How to Build Alexa Skills; How to Improve Your Alexa Skill Through Testing; Amazon Alexa Testing Reference Guide; How to get CID and DSN Information.

Khi vào Alexa cycle, chỉ enable/test đúng Skill, locale, account và device model được chỉ định; đọc sample utterances nhưng không tự thay intent nếu script không cho phép. Kiểm tra wake word, invocation, intent matching, slot value, response, reprompt/error path, account linking, permission và multi-turn dialog theo instruction. CID/DSN là device identifiers nhạy cảm, chỉ lấy/gửi qua field và visibility mà cycle yêu cầu, không đăng trong chat/community.

# **36. Streaming Apps Testing**

Course: https://www.utest.com/academy/tracks/11/courses/80/lessons/Introduction-to-Streaming-Apps-Testing

Streaming truyền audio/video liên tục từ server tới client; hai nhóm chính là Live và VOD. Test phải bao phủ product, content type, device/OS/location/network và business model, không phải chỉ xem video.

Chuẩn bị: đọc Overview/scope; cài đúng build; đọc toàn case; làm quen product. Live event phải tới sớm, sẵn sàng đúng schedule, báo TTL ngay nếu không thể tham gia; chuẩn bị power, charger, network dự phòng nhưng chỉ dùng connection được yêu cầu; setup sẵn thiết bị thứ hai/evidence/log.

Guidelines: kiểm tra legal/regional requirement, như captions; hiểu ad-based hay subscription để ưu tiên ads/signup/payment. Dùng customer account đúng instruction và logout khi xong. Test nhiều content để biết lỗi toàn hệ thống, theo loại hay chỉ một title. Không chiếm bandwidth bằng activity khác; không negative abuse trừ khi cho phép. Ghi result ngay mỗi step, không dồn cuối; attachment đúng thời điểm; case tương tự chỉ khác vài từ vẫn phải làm chính xác.

DRM có thể làm software screenshot/video thành màn hình đen, nên Streaming là ngoại lệ cho phép dùng external camera/device theo instruction. Ảnh/video phải rõ, orientation cố định, chỉ chứa screen, ít background/noise, PII đã blur; dùng tripod/holder/vật cố định; video `.mp4`, chỉnh rotation/mute bằng HandBrake khi cần và lý tưởng 1080p nếu cycle không yêu cầu khác.

Best practice: goal rõ; hỏi tới khi hiểu; attention span dài vì stream thay đổi liên tục; creative nhưng đúng scope; evidence chất lượng; chụp device model, OS/TV version và app version khi hữu ích/yêu cầu.

# **37. Connected TV Devices (CTV)**

Course: https://www.utest.com/academy/tracks/11/courses/81/lessons

Các lesson: Android TV; Fire TV; Samsung TV/Tizen OS; LG TV/WebOS; Roku/RokuOS; Xbox. Trước test phải xác minh chính xác manufacturer/model, OS/firmware, app version, region/store account và input/network. Cài build bằng đúng kênh của cycle; không suy diễn cách sideload giữa các platform.

Test remote focus/navigation, Back/Home behavior, D-pad order, text entry, login/QR, playback controls, captions/audio tracks, seek/scrub, resume/continue watching, purchase/subscription, casting nếu scope và app lifecycle. Evidence thường quay bằng thiết bị ngoài do DRM; giữ cả TV và phản hồi remote đủ rõ nhưng không lộ phòng/PII không cần thiết.

# **38. Online Gambling Testing**

Course: https://www.utest.com/academy/tracks/10/courses/43/lessons/introduction-to-gambling-testing

Ba nhóm: casino games, sportsbook và fantasy sports. Gambling chịu luật theo country/state, tuổi, geolocation và payment, nên Overview/local regulation quyết định. Có thể cần KYC (name, DOB, address, last digits ID), deposit nhỏ được reimbursement hoặc geolocation travel. uTest không khuyến khích dùng tiền cá nhân để đánh bạc ngoài test.

Chỉ tạo personal account khi yêu cầu; nhiều operator chỉ cho đăng ký một lần nên giữ log nơi đã đăng ký. Credit card có thể tính cash-advance fee, phải kiểm tra trước và hỏi reimbursement. Không lộ PII trong report/case; blur evidence.

Customer test account: dùng đúng account, bet mức tối thiểu, nhiều bet nhỏ để tăng coverage, tránh balance về 0; không đổi credential, deposit/withdraw hoặc dùng personal account nếu chưa được chỉ định. Set recording/log trước live session vì issue có thể không reproduce.

Common scenarios: registration/KYC; deposit/withdraw; geolocation allow/block; promo/banner; responsible gambling (self-exclusion, break warning, deposit limit, account closure, underage prevention); functional flow.

Casino: launch/sound, bet accepted, correct deduction, win/loss/balance, autoplay/timer/celebration theo regulation. Sportsbook: bet type/live game, bet slip/odds change, deduction/payout, game status, score/stat update, promo credit, cash-out. Fantasy: paid contest, lineup, geolocation, deduction/winnings.

Không đoán khi chưa hiểu game/odds/rule; hỏi TTL. Mục tiêu là test an toàn và có kiểm soát, không bị cuốn vào game.
