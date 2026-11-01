

Knowledge base chi tiết để AI tra cứu quy tắc Test IO khi làm việc
> **Tra từ vựng nhanh:** [[Test IO - Flashcards Cheat Sheet]] — tổng hợp 21 thẻ Actions and Movements và 11 thẻ Standard Feature Descriptions, gồm nghĩa tiếng Việt, tên tương đương và ví dụ diễn đạt. Đối chiếu trực tiếp ngày 10/10/2026.

|   |
|---|
|**Phạm vi:** Exploratory tests, bug types, severity, bug reports, attachments, reproductions, test cases, user stories, confirmations và các lỗi dễ bị reject.|

Đối chiếu trực tiếp từ Test IO Learning Portal và Test IO Academy ngày 09/10/2026. Nội dung được diễn giải sát nghĩa; tên trường, nút, trạng thái và bài Academy giữ nguyên để truy tìm nguồn.

# **1. Nguyên tắc nguồn và thứ tự ưu tiên**

|   |
|---|
|**Không trộn nền tảng:** Quy tắc uTest không tự động áp dụng cho Test IO. Khi làm Test IO, dùng Test Overview, Feature description, Test Cycle instructions, Team Leader request và Test IO Academy.|

|   |   |
|---|---|
|**Mức ưu tiên**|**Nguồn**|
|1|Test Overview, scope, access, Feature descriptions và customer-specific instructions.|
|2|Yêu cầu trong task/test case/user story/confirmation và information request của Team Leader.|
|3|Test IO Academy rules hiện hành.|
|4|Kinh nghiệm cá nhân; chỉ dùng khi không xung đột ba mức trên.|

· Đọc tất cả Feature descriptions và đánh dấu read; nếu Feature không hiện trong bug form, quay lại Overview và đọc/mark read.

· Không suy luận hành vi là bug chỉ vì khác website khác. Phải có bằng chứng sản phẩm không hoạt động như dự kiến.

· Mọi report phải hoàn chỉnh ngay lúc submit; placeholder bị cấm.

# **2. Learning Portal và loại hoạt động**

|   |   |
|---|---|
|**Nhóm**|**Nội dung/điều kiện**|
|Exploratory Testing Course|Học nhận diện bug và report; nhiều cơ hội hơn, onboarding dài hơn.|
|Reproduction Course|Mở Bug Reproductions; học nhanh nhưng phạm vi thu nhập hẹp hơn.|
|Activities|Bug Reproductions, User Stories, Bug Fix Confirmations, Bug Report Confirmations, Rapid Tests, Test Cases.|
|Optional courses|User Story; Bug Fix & Bug Report Confirmation; Purchase; Project; Hardware; Streaming; Real Payments.|
|Profile|Languages, devices, experience, interests, employment, education ảnh hưởng matching/invitations.|

Portal: https://tester.test.io/academy | Academy: https://academy.test.io/

# **3. Test Types**

|   |   |   |   |
|---|---|---|---|
|**Type**|**Default**|**Bug scope**|**Cách tiếp cận**|
|Coverage|24h|Functional, Content, Visual tùy cycle.|Systematic hoặc casual; phù hợp mọi level.|
|Focused|24h|Functional; scope hẹp, workflow cụ thể.|Systematic, test sâu vùng được nêu.|
|Rapid|4h|Chỉ Critical functional bugs.|Experienced tester; giao kết quả rất nhanh.|
|Usability|24h|Usability suggestions/UX reports; bug reporting thường OOS.|Creative, critical thinking, diễn đạt tốt.|

· Test type hiển thị trên invitation card và đầu Test Overview.

· Coverage linh hoạt nhất. Focused thường là main workflow/new feature và không nhận Visual/Content.

· Rapid chỉ mời sau Greenhorn; payout cao hơn nhưng chỉ Critical.

· Usability là feedback về trải nghiệm, không phải cố gắng biến đề xuất thành functional bug.

# **4. Trước khi bắt đầu test**

· Xác nhận đúng invited device/environment, ngôn ngữ, thời gian, test type và scope.

· Đọc Access, Features, instructions, Known/Out-of-scope behavior và mọi announcement/request.

· Mở từng Feature, hiểu mô tả và mark as read. Bug form chỉ liệt kê Feature đã đọc.

· Chỉ test với thiết bị trong profile và được invitation chấp nhận. Không xóa invited device sau khi accept; hành động này không hoàn tác và có thể khiến bug form không còn environment để submit.

· Chuẩn bị screen recorder, click/touch indicator, ngôn ngữ hệ thống/browser/app đúng Test Cycle và không để lộ dữ liệu cá nhân/khách hàng khác.

# **5. Phân loại Functional, Content, Visual**

|   |   |   |
|---|---|---|
|**Type**|**Bản chất**|**Ví dụ**|
|Functional|Chức năng phản hồi sai/không phản hồi/crash.|Button không submit; search không phản ứng; app crash.|
|Content|Text, label, picture, video, icon, link hoặc data bị thiếu/hỏng/sai.|404 link/image, redirect sai, missing text/translation/data/product result.|
|Visual|Giao diện/layout/CSS/HTML hiển thị sai.|Misalignment, overlap, cut-off, responsive inconsistency.|

## **Functional hay intended behavior?**

· Test feature riêng và kết hợp với feature khác; tìm sự khác biệt có ý nghĩa.

· Sản phẩm khác không phải tiêu chuẩn. Customer có quyền thiết kế hành vi khác.

· Đưa evidence cho claim: nếu nói field phải validate, chỉ ra dấu hiệu hoặc tình huống khác cho thấy validation được dự kiến.

· Nếu hành vi nhất quán, không gây vấn đề rõ và chỉ muốn thay đổi thiết kế, đó có thể là usability suggestion chứ không phải bug.

## **Khi Content/Visual nâng thành Functional**

· Nếu lỗi trực tiếp ngăn functionality, report Functional.

· Nếu vẫn có đường vòng trực quan, dễ dùng thì thường vẫn là Content/Visual.

· Content linking problem trong navigation menu/header/footer/breadcrumb thường được xem là Low Functional.

## **Repetitive issues**

· Content/Visual cùng nguyên nhân lặp ở nhiều URL/elements chỉ submit một report.

· Trong report nói rõ các URL/elements khác cũng bị ảnh hưởng. Report riêng từng occurrence sẽ bị reject.

## **Không phải Content bug**

· Spelling problems không được Test IO coi là Content bugs theo bài hiện hành.

· Dummy/missing content trong staging thường không phải bug.

· Placeholder image có chủ ý không phải broken image; broken image có error icon/blank/broken symbol ngoài dự kiến.

# **6. Functional Severity**

Đánh giá theo functional impact, extent, workaround/showstopper, potential notable sales loss và các bug cùng test đã được TL approve. Một số case có fixed severity trong Bug Assessment Sheet và phải theo sheet mới nhất.

|   |   |
|---|---|
|**Severity**|**Tiêu chí**|
|LOW|Impact tối thiểu; general usage không bị ảnh hưởng; ít user/item; feature nhỏ hỏng hoặc có workaround dễ.|
|HIGH|Impact nghiêm trọng nhưng core vẫn hoạt động; nhiều user/item; non-trivial feature không có workaround; important feature có workaround.|
|CRITICAL|Core functionality bị chặn; showstopper trong main process như checkout; nguy cơ mất doanh số đáng kể.|

## **Edge cases và forced bugs**

· Edge case dùng functionality theo cách bất thường: minimize ngay sau click, lặp mở/đóng, chuỗi action hiếm. Relevant edge case có thể Low; đa số irrelevant sẽ reject.

· Forced bugs thường OOS: tap nhiều element cùng lúc, random/fast repeated clicks, resize/zoom phi thực tế, full RAM/storage, unofficial/beta/modified OS.

# **7. Bug form: toàn bộ trường**

|   |   |
|---|---|
|**Field**|**Mục đích**|
|Feature|Chọn đúng Feature đã đọc từ Overview.|
|Severity|Chỉ hiện cho Functional: Low/High/Critical tùy test.|
|Title|Tóm tắt đủ What + Where + condition/trigger.|
|URL|URL hợp lệ của nơi bug xảy ra/element gây bug.|
|Steps|Mỗi bước một action, từ entry point đến action cuối kích hoạt bug.|
|Actual Result|Mô tả chi tiết hành vi xảy ra, examples/errors/conditions.|
|Expected Result|Điều đúng phải xảy ra sau action cuối.|
|Attachments|Evidence mới, đúng loại và đúng environment.|
|Used environment|Một device/browser thực tế khớp invitation và attachment.|

# **8. Title và URL**

## **Title**

· Reader phải hiểu ý chính mà không mở report; title precise và concise.

· Bao gồm What happened, Where, và When/How/Condition nếu điều kiện làm bug khác biệt.

· Mô tả điều đang xảy ra, không dùng generic 'does not work'.

· Đặt mình vào người chưa từng thấy app/page; nếu họ không hình dung được bug, viết lại.

|   |   |
|---|---|
|**Yếu**|**Tốt hơn**|
|Checkout does not work|Error message is displayed on the Checkout page when submitting an order with PayPal|
|Cart page displays a 404 error|Cart page displays a 404 error when opened by a logged-in user|
|Become a Tester button does not work|No reaction occurs after clicking 'Become A Tester' in the navigation|

## **URL**

· Dán URL của page nơi bug/element gây bug nằm, lấy từ browser bar.

· Add to Cart không phản ứng trên PDP: dùng PDP URL, không dùng page khác.

· Broken link dẫn 404: dùng URL trang chứa link bị hỏng, không dùng URL trang 404 đích.

# **9. Steps to reproduce**

|   |
|---|
|**Quy tắc cốt lõi:** System tự đánh số. Mỗi step là một action riêng. Step đầu mở customer URL/app. Step cuối là action trực tiếp kích hoạt bug, không phải 'Observe'.|

· Website: step 1 chỉ rõ Open [customer environment URL]. Mobile: Open [app name].

· Các step sau ghi button/link/input thật đã dùng. Không gộp nhiều click trong một step.

· Đủ mọi bước cần thiết nhưng ít action nhất có thể. Người đọc không phải đọc lại step nhiều lần.

· Steps chỉ chứa actions cho đến khi bug xuất hiện; không chèn Actual/Expected vào steps.

· Generalize dữ liệu/page nếu bug xảy ra với mọi item. Chỉ ghi item/filter/input cụ thể khi đó là condition của bug.

· Dữ liệu cần thiết như email, date hoặc account state phải được cung cấp hợp lý; dùng dữ liệu có vẻ như user thật, không random vô nghĩa.

## **So sánh với lỗi bạn từng gặp**

· Hai action trong một step: sai trên Test IO; phải tách.

· Từ Observe: không phải step cuối theo Test IO; last step phải là action trigger, kết quả nằm trong Actual Result.

· Test IO không có field Source = Exploratory/Structured trong bug form chuẩn như uTest; đừng tự thêm luật Source của uTest.

# **10. Actual Result và Expected Result**

## **Actual Result**

· Mô tả chính xác điều xảy ra sau steps, nhất là action cuối; thêm example, condition, exception, error message và kết quả trung gian cần thiết.

· Không giống title: title là summary, Actual là mô tả chi tiết.

· Không viết mơ hồ như products mostly remain same; nêu sản phẩm/giá/thứ tự cụ thể.

· Không trộn điều đáng lẽ xảy ra vào Actual.

## **Expected Result**

· Mô tả điều đúng phải xảy ra sau action cuối nếu không có bug.

· Ngắn nhưng đủ; bug phức tạp có thể cần context thêm.

· Không chỉ đảo Actual bằng 'not' hoặc vài từ phủ định; Expected và Actual là hai mô tả độc lập.

|   |   |
|---|---|
|**Field**|**Ví dụ đúng**|
|Actual|After clicking Checkout, 'Error 500 - Internal Server Error' appears and the Checkout page does not load.|
|Expected|The Checkout page should load successfully so the user can enter shipping and payment information.|

# **11. Used Environment và chỉnh sửa report**

· Website: chọn browser icon cạnh đúng device. App: chọn đúng device có app được cài.

· Mỗi report chỉ chọn một device/browser và chỉ upload evidence từ environment đó. Environment khác reproduce được thì nêu trong Actual Result.

· Environment phải khớp attachment. Chọn sai có thể sửa trước khi TL review; để sai khi review sẽ bị reject.

· Sau submit có thể edit mọi field trừ bug type. Edit chỉ dành cho typo/rephrase nhỏ; report phải hoàn chỉnh ngay từ đầu.

· Report nhầm có thể delete chỉ khi Team Leader chưa review.

# **12. Attachment requirements**

|   |
|---|
|**Nguyên tắc:** Mỗi bug/reproduction cần attachment mới. Evidence không thay thế written report. Functional cần screencast; static Content/Visual thường screenshot.|

## **General**

· Không copy attachment từ report/reproduction khác; phải tạo mới cho từng submission.

· Evidence cho thấy bug trên đúng device/OS/browser, đủ thông tin và resolution đọc được; record toàn màn hình.

· Ngôn ngữ attachment/system/browser/app phải khớp Test Cycle.

· Website phải thấy URL bar. Không lộ personal/unprofessional data hoặc customer khác có thể liên hệ với Test IO.

· Chỉ evidence từ một environment đã chọn. Crash report/positive crash repro bắt buộc crash log và video có timing tương ứng.

## **Screenshot**

· JPG hoặc PNG.

· Highlight bug rõ ràng; che private info chuyên nghiệp, không vẽ tay/sketchy; không che URL hoặc element liên quan.

· Visual/Content static thường chỉ cần screenshot.

## **Screencast**

· MP4, tối đa 25 MB. Bug Report tối đa 60 giây, trừ loading/manual input bắt buộc dài hơn.

· Reproduction/User Story tối đa 15 giây, chủ yếu action cuối và bug/result.

· Quay một mạch: không pause, không cắt giữa; chỉ được trim đầu/cuối. Không tăng tốc.

· Ngắn nhất có thể nhưng đủ: web thường start ở page bug, refresh, trigger, chờ bug; app start gần page bug, làm navigation cuối, trigger, chờ.

· Không có tiếng ồn. Keyboard bug phải show keyboard input. Nên bật click/touch indicators.

## **Streaming device**

· Quay toàn TV screen, sáng và rõ; remote phải thấy đầy đủ.

· 60s cho report, 15s cho repro/user story; không noise; khung hình chuyên nghiệp, không quay chân/bàn kệ bừa bộn.

# **13. Content và Visual report specifics**

· Content report bắt buộc screenshot. Visual report bắt buộc screenshot; thêm screencast nếu action gây visual problem.

· Responsive visual bug: tìm inconsistent scaling, text illegible, tap target quá nhỏ, horizontal scroll chỉ ở vài page.

· Một nguyên nhân lặp chỉ một report. Nêu các occurrence khác trong report.

· Nếu Content/Visual chặn functionality và không có workaround trực quan, đổi sang Functional với severity phù hợp.

# **14. Bug Reproductions**

|   |   |
|---|---|
|**Loại**|**Ý nghĩa**|
|Positive|Theo đúng steps và gặp cùng bug.|
|Negative|Theo đúng steps nhưng function hoạt động, không gặp bug.|
|Different bug|Không dùng negative cho bug khác; report bug mới hoặc reproduce report đúng bug đó.|

· Start reproduction giữ seat 30 phút; cancel/expire sẽ trả seat. Chỉ một active task cùng lúc với Test Case/Test Session/Repro/Bug Fix/Bug Report Confirmation.

· Bắt buộc screencast <=15s; action trigger thường đủ. Chỉ dài hơn khi thật sự không thể và không vượt video gốc.

· Website có URL bar. App crash cần crash log khớp timing. Mọi general attachment rule vẫn áp dụng.

· Không reproduce OOS bug; có thể bị rejection kèm warning.

· Start reproduction chỉ hiện khi test đang chạy, report Functional của tester khác, customer chưa review và còn quota repro.

# **15. Test Case Testing**

Test case có 3-30 steps, environment/quota định trước. Mục tiêu là xác nhận scenario/process cụ thể, biết step nào fail, có tiếp tục được không và environment nào bị ảnh hưởng.

· Claim sớm; execution aborted có thể quay lại pool. Không claim được nếu đã hoàn thành case, thiếu environment, hết seat hoặc hết runtime.

· Chỉ bắt đầu khi đáp ứng precondition. Đọc kỹ từng step/expected, upload đúng evidence và trả lời question chính xác.

· Success: green button; attachment/question tùy step.

· Fail: red button, giải thích actual và ít nhất một attachment. Nếu bug mới, submit bug theo requirements; nếu đã có, reproduce/link known bug, không duplicate.

· Information request phải phản hồi sớm và tối đa 24 giờ.

· Nếu step trước fail làm step sau không thể chạy, tìm workaround. Không có workaround thì I can't proceed. Terminate sớm dù vẫn tiếp tục được sẽ reject; tiếp tục và report hàng loạt step phụ thuộc cũng khiến report thừa bị reject.

# **16. User Story Testing**

· User Story mô tả expected behavior từ góc user, thường task ngắn dưới 5 phút; nằm trong Feature > User Stories và không phải test nào cũng có.

· Chỉ thấy action buttons sau khi pass User Story course.

· Start giữ execution 30 phút; tối đa 3 reservations cùng lúc. Có thể resume đến khi hết timer.

· Reserved = đủ tester đang làm; Locked = mọi execution đã hoàn thành; Limited = bạn đã có 3 reservations.

· Evidence theo task và attachment rules; screencast User Story tối đa 15 giây.

# **17. Bug Fix Confirmation**

· Customer đã fix và yêu cầu retest xem bug còn hay không. Unlock khi pass course, >50 submitted bugs và Silver+.

· Begin giữ task 30 phút. Theo steps bug gốc rồi chọn Bug is fixed / Bug is not fixed / Can't proceed.

· Comment đặc biệt quan trọng khi bug còn: mô tả chính xác, chỉ thông tin liên quan từ góc user.

· Chọn browser/device; action cần screencast, UI static dùng screenshot; follow additional requirements.

· Submit gửi thẳng customer và không edit được. Kiểm tra đủ fields/evidence trước submit; cancel sẽ mở task cho tester khác.

# **18. Bug Report Confirmation**

· Customer yêu cầu xác nhận report mới bên ngoài original cycle; áp dụng Functional/Visual/Content và test-case bugs. Unlock: pass course, >50 bugs, Silver+.

· Begin giữ task 30 phút; chạy steps gốc rồi chọn Bug exists / Bug doesn't exist / Can't proceed.

· Comment bằng lời của bạn: actual/result hoặc blocker, precise, relevant, user perspective. Chọn device/browser.

· Có thể có fields Screen Size, Browser Version hoặc câu hỏi riêng.

· Attachment theo yêu cầu: screencast nếu có action, screenshot cho UI. Có thể phải show internet speed đầu/cuối, console, external camera hoặc crash log.

· Không đáp ứng attachment requirement thì giải thích trong comment. Submit không edit được; cancel trả task cho người khác.

# **19. Lỗi thường gặp dẫn đến reject**

|   |   |   |
|---|---|---|
|**Phần**|**Lỗi**|**Cách tránh**|
|Title|Generic, thiếu What/Where/Condition.|Viết summary đủ để hiểu không cần mở report.|
|URL|Page khác hoặc URL trang 404 đích.|Dùng page chứa bug/element gây bug.|
|Steps|Thiếu entry URL, gộp actions, thiếu data, thừa navigation.|Một action/step; last step trigger; đủ nhưng tối thiểu.|
|Actual|Mơ hồ, quá ngắn, chứa Expected.|Chi tiết hành vi, error, example, condition.|
|Expected|Chỉ đảo Actual.|Mô tả flow đúng độc lập.|
|Environment|Không khớp video/device.|Chọn đúng một environment trước TL review.|
|Attachment|Cũ/copy, quá dài, không URL, sai language, lộ data.|Tạo mới; đúng limit; toàn màn hình; sạch và khớp.|
|Scope|Forced/OOS/duplicate/repetitive occurrence.|Đọc scope; test như user thật; search reports; gom cùng nguyên nhân.|

# **20. Checklist trước khi submit Bug Report**

|   |   |
|---|---|
|**✓**|**Kiểm tra**|
|□|Đúng test type, scope, Feature, invited environment và language.|
|□|Không duplicate/repetitive occurrence; hành vi có evidence là bug, không chỉ suggestion.|
|□|Bug type và Functional severity đúng; fixed assessment được kiểm tra nếu áp dụng.|
|□|Title có What + Where + condition; URL là nơi bug/trigger nằm.|
|□|Steps: system numbering, một action/step, entry point đầu, trigger cuối, không Observe.|
|□|Actual chi tiết và khác title; Expected độc lập, không chỉ phủ định Actual.|
|□|Một Used environment khớp attachment; environment khác chỉ ghi trong Actual.|
|□|Attachment mới: đúng type/format/size/time, whole screen, URL, language, không private/customer data.|
|□|Crash có crash log khớp timing; report hoàn chỉnh, không placeholder.|

# **21. Mẫu Bug Report cho AI kiểm tra**

Feature: [Tên Feature đã mark read]

Bug type: [Functional / Content / Visual] | Severity: [Low / High / Critical nếu Functional]

Title: [Observed behavior] on/in [location] when/after [trigger or condition]

URL: [URL của page chứa bug hoặc element gây bug]

1. Open [customer URL / app name].

2. Click/Tap [single action].

3. Enter/Select [data or option].

4. Click/Tap [final action that triggers the bug].

Actual Result: [Chi tiết behavior/error/example/condition sau action cuối].

Expected Result: [Behavior đúng phải xảy ra sau action cuối].

Used environment: [Một device + OS + browser/app].

Attachment: [Screenshot cho static Content/Visual; MP4 screencast cho Functional; crash log nếu crash].

# **22. Official Test IO Academy index**

|   |
|---|
|**Cho AI:** Ưu tiên link article cụ thể. Tên bài dưới đây giữ nguyên để tìm kiếm; nội dung sổ tay là bản diễn giải chi tiết, không phải bản sao nguyên văn.|

|   |   |
|---|---|
|**Article**|**Official URL**|
|Bug Report Requirements|https://academy.test.io/en/articles/2541949-bug-report-requirements|
|Functional Bugs|https://academy.test.io/en/articles/2570792-functional-bugs|
|Content Bugs|https://academy.test.io/en/articles/2652224-content-bugs|
|Visual Bugs|https://academy.test.io/en/articles/2652233-visual-bugs|
|Bug Report Attachments|https://academy.test.io/en/articles/2541954-bug-report-attachments|
|Common mistakes in Bug Reports|https://academy.test.io/en/articles/6888638-common-mistakes-in-bug-reports|
|Advanced Bug Reporting|https://academy.test.io/en/articles/15596227-advanced-bug-reporting|
|Bug Reproductions|https://academy.test.io/en/articles/2541944-bug-reproductions-repros|
|Test Case Testing|https://academy.test.io/en/articles/2541963-test-case-testing|
|User Story Testing|https://academy.test.io/en/articles/4156595-user-story-testing|
|Bug Fix Confirmation|https://academy.test.io/en/articles/3650880-bug-fix-confirmation|
|Bug Report Confirmation|https://academy.test.io/en/articles/5594889-bug-report-confirmation|
|Test Types|https://academy.test.io/en/articles/4824311-test-types|

Learning Portal: https://tester.test.io/academy | Full Academy search: https://academy.test.io/

|   |
|---|
|**Prompt gợi ý:** Dựa trên Sổ tay Test IO này, xác định đúng loại task và article liên quan; kiểm tra scope, từng field và attachment; nêu rule Test IO áp dụng và đề xuất nội dung sửa cụ thể. Không dùng quy tắc uTest nếu tài liệu Test IO không nói vậy.|
# **23. Thuật ngữ từ hai bộ Flashcards**

Cheat sheet duy nhất: [[Test IO - Flashcards Cheat Sheet]].

Bổ sung ngày 10/10/2026 sau khi kiểm tra sổ tay: các mục 1–22 đã có quy tắc report, chưa có danh sách đầy đủ của hai bộ flashcard.

- **Actions and Movements in Testing:** 21 thẻ, từ Background and Foreground of an App đến Autofill.
- **Standard Feature Descriptions:** 11 thẻ, từ Cart đến Sign Up; có tên tương đương như Shopping Bag/Mini Cart và các dạng Navigation.
- Cheat sheet chứa tên thẻ, nghĩa tiếng Việt diễn giải, bảng tra mô tả thô, phân biệt các cặp dễ nhầm và prompt tra thuật ngữ tùy chọn.
- Dùng để tra cứu và tham khảo câu chữ; người dùng tự phân tích tình huống thực tế. Ví dụ tiếng Anh trong cheat sheet là ví dụ biên tập, không phải trích nguyên văn flashcard.

Nguồn: [Actions and Movements Flashcards](https://testio.typeform.com/to/A066urjI) · [Standard Feature Descriptions Flashcards](https://testio.typeform.com/to/jqju8MVv).
