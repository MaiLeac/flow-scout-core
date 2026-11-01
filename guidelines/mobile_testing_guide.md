# Overview và thứ cần làm
Mình đã đọc toàn bộ `Overview` và `Test Case #12406429`. Có **một vấn đề cần giải quyết trước**:

**Slot của bạn:** `Xiaomi 13 Pro - Android 14`  
**Máy thật:** `Xiaomi 13 Pro - Android 15`

Không nên tiếp tục test bằng environment sai. Hãy hỏi Academy Team trong cycle chat:

```text
Hi Academy Team,

My claimed environment is Xiaomi 13 Pro - Android 14, but my device is currently running Android 15. Android 15 was not available for this device in my uTest profile, so I submitted support request CS0099804 to have it added.

May I continue this Academy cycle using Android 15, or should I wait for the correct environment to become available?

Thank you.
```

Đây là câu hỏi environment hợp lệ, không phải hỏi họ xem một bug có được duyệt hay không.

**Sau USB debugging**

Máy tính hiện **chưa có lệnh `adb`** (`ADB_NOT_FOUND`). Tiếp theo:

1. Tải **SDK Platform Tools for Windows** từ [Android Developers](https://developer.android.com/tools/releases/platform-tools).
2. Giải nén thư mục `platform-tools`.
3. Cắm điện thoại bằng cáp USB và giữ màn hình mở khóa.
4. Trên điện thoại, chọn:
   - `Always allow from this computer`
   - `Allow`
5. Mở thư mục `platform-tools`, nhập `cmd` vào thanh địa chỉ rồi Enter.
6. Kiểm tra kết nối:

```bat
adb devices -l
```

Phải hiện serial thiết bị với trạng thái `device`. Nếu hiện `unauthorized`, kiểm tra thông báo cho phép trên điện thoại.

**Cycle yêu cầu làm gì**

Ứng dụng cần test là **Genius: Song Lyrics Finder**, tải từ Google Play bằng tài khoản đúng quốc gia thật.

Bạn cần:

- Hoàn thành cả 5 bước test case.
- Tìm và submit **ít nhất 1, tối đa 3 bug hợp lệ**.
- Có **1 bug được approved**.
- Có **test case được approved**.
- Submit test case trước khi cycle khóa ngày **23/10/2026**.
- Trả lời info request trong 48 giờ hoặc trước hai lần TTL nhắc.

Các khu vực được test:

- Onboarding lần mở đầu.
- Đăng ký tài khoản và preferences.
- Search theo bài hát, nghệ sĩ và lời nhạc.
- Nhận diện nhạc, phát nhạc và tích hợp Spotify/Apple Music.
- Play/pause/skip, kể cả màn hình khóa.
- Tạo lyrics card, annotation và chia sẻ.
- Artist pages, discography, biography và news.
- Treo app, tải chậm, hao pin/data bất thường và luồng chính bị chặn.

Không được report:

- `Feedback`.
- Field validation.
- Accessibility, usability hoặc security.
- Lỗi không tái hiện được quá hai lần.
- Lỗi chỉ xuất hiện trong log nhưng người dùng không nhìn thấy.
- Lỗi ngoài ứng dụng Genius.
- Không thêm thẻ/phương thức thanh toán hoặc mua hàng.
- Không dùng emulator, simulator hay ứng dụng thu log như CatLog/aLogcat.
- Không dùng Google Translate hoặc ứng dụng bên thứ ba trong lúc test.

**Thu bằng chứng cho bug**

Mỗi bug bắt buộc có đủ ba file:

1. Screenshot `.jpg/.png`, khoanh đỏ vị trí lỗi.
2. Screen recording `.mp4`, không có tiếng nền.
3. Android device log `.txt/.log`.

Nên thu video và log trong cùng một lần tái hiện:

```bat
adb logcat -c
adb logcat -v threadtime > .\log.txt
```

Sau đó:

1. Bắt đầu quay màn hình điện thoại.
2. Mở Genius và tái hiện bug từ đầu đến cuối.
3. Khi bug xuất hiện, dừng quay.
4. Trong CMD nhấn `Ctrl+C`.
5. `log.txt` sẽ nằm trong thư mục `platform-tools`.

Phải che email, tên, ảnh, số điện thoại hoặc PII trong screenshot/video.

**Năm bước test case**

1. Đọc Terms of Use và AI Guidelines, rồi bấm `Done`.
2. Học cách lấy mobile logs; **không upload gì vào bước này**, bấm `Done`.
3. Xem cách viết bug report; **không upload gì**, bấm `Done`.
4. Tìm và submit bug bằng `Report Issue`; sau khi report xong bấm `Done`.
5. Tự viết review trung thực, **không dùng AI cho nội dung review**, submit review rồi bấm `Done`.

Cuối cùng bấm `Submit Results`, nhập thời gian thực hiện và bấm `Finish`.

Title bug bắt buộc theo mẫu:

```text
Device Name - Area - Issue Description
```

Ví dụ cấu trúc:

```text
Xiaomi 13 Pro - Search - [mô tả hiện tượng và điều kiện gây lỗi]
```

Hiện tại việc ưu tiên là **hỏi Academy Team về Android 15**, đồng thời tải Platform Tools và kiểm tra `adb devices -l`. Chưa nên bắt đầu ghi bằng chứng cho tới khi họ xác nhận environment.

# Cách thu log và xóa log mobile
**I used Android Debug Bridge (ADB) with the `adb logcat` command from the Android SDK Platform-Tools.**

Bây giờ khi cần thu log, dùng:

```
adb logcat -c
adb logcat -v threadtime > .\log.txt
```

Sau đó tái hiện bug trên điện thoại. Khi xong, quay lại CMD nhấn:

```
Ctrl + C
```

File `log.txt` sẽ nằm ngay trong thư mục `platform-tools`.

Nếu log sai, xử lý rất đơn giản.

Nếu lệnh vẫn đang chạy, nhấn:

```
Ctrl + C
```

Log sẽ dừng và file hiện tại được lưu lại.

Muốn làm lại:

1. Dừng log cũ bằng `Ctrl + C`.
2. Xóa file cũ:

```
del genius_annotation.log
```

3. Xóa log cũ trên điện thoại:

```
adb logcat -c
```

4. Bắt đầu lại:

```
adb logcat -v threadtime > .\genius_annotation.log
```

5. Tái hiện bug đúng từ đầu đến cuối.
6. Nhấn `Ctrl + C` để kết thúc.

Nếu không muốn xóa file cũ, dùng tên mới:

```
adb logcat -v threadtime > .\genius_annotation_retry.log
```

Chỉ upload file cuối cùng có luồng tái hiện đầy đủ. `adb logcat -c` chỉ xóa log đang lưu trên thiết bị, không xóa file `.log` trong máy tính.

## Khởi động cmd
Lần sau làm từ đầu như này, mỗi lệnh chạy riêng:

**1. Mở CMD rồi vào thư mục platform-tools**

```
cd /d "C:\Users\ACER\Downloads\platform-tools-latest-windows\platform-tools"
```

**2. Kiểm tra điện thoại đã kết nối**

```
adb devices -l
```

Phải thấy trạng thái là `device`, không phải `unauthorized`.

**3. Xóa file log cũ**

```
del genius_annotation.log
```

Nếu app khác thì đổi tên file, ví dụ:

```
del spotify_search.log
```

**4. Xóa log cũ trong bộ nhớ ADB**

```
adb logcat -c
```

**5. Bắt đầu ghi log**

```
adb logcat -v threadtime > .\genius_annotation.log
```

Sau lệnh này CMD sẽ không hiện prompt nữa. Giữ nguyên cửa sổ đó, mở app và tái hiện lỗi.

**6. Dừng ghi log**

Quay lại CMD, nhấn tổ hợp phím **Ctrl + C** thật sự. Không gõ chữ `Ctrl + C`.

**7. Kiểm tra file đã tạo**

```
dir genius_annotation.log
```

Nếu thấy file có dung lượng lớn hơn `0 KB` là được. Mỗi lần làm lỗi mới, đổi tên file để không ghi đè log cũ.

adb logcat --pid=24242 -v threadtime > .\genius_add_a_song.log



1. Open the Genius app.
2. Tap the pencil icon in the upper-right corner of the Home screen.
3. Tap “Add a song”.
4. Tap the refresh/retry icon several times.

The Add a song page in the Genius Android app displays “Couldn't reach Genius” and remains unavailable after tapping Retry several times. The same Add Song feature loads successfully in the mobile web version of genius.com on the same device and network.


The Add a song page should load successfully in the Android app, as it does on the mobile web version.


Couldn't reach Genius.

adb logcat -v threadtime > .\genius_add_a_song.log