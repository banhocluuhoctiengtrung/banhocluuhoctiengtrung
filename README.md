# Hướng Dẫn Cài Đặt & Cập Nhật Từ Điển Tiếng Trung Bạn Học Lưu

Ứng dụng web học tiếng Trung tích hợp:

* **Font Le Minh Duc Pinyin V2** (`Pinyinfont_V2.ttf`) tự động hiển thị chữ Hán kèm phiên âm Pinyin trên đầu.

* **HanziWriter Nét Bút**: Xem thứ tự nét và tập viết trên khung Mễ Tự Cách (米字格) chuẩn.

* **48 Tranh Minh Họa Chiết Tự**: Trích xuất trực tiếp từ file Google Sheet gốc.

* **Ôn tập SRS (SM-2)**: Hệ thống lặp lại ngắt quãng khoa học.

* **Tự Động Gợi Ý Pinyin**: Tự động điền Pinyin khi nhập chữ Hán kèm nút chuyển chế độ nhập thủ công.

## 1. Cách Đưa Web Lên GitHub Pages Lần Đầu Tiên

1. Giải nén file `hoc_tieng_trung_github_pages.zip`.

2. Truy cập [github.com/new](https://github.com/new) tạo repository mới (chọn chế độ **Public**).

3. Nhấp **Upload files** và kéo thả tất cả các file trong thư mục vừa giải nén lên GitHub:

   * `index.html`

   * `vocab_data.js`

   * `Pinyinfont_V2.ttf`

   * Thư mục `images/` (chứa 48 tranh chiết tự)

4. Nhấp **Commit changes**.

5. Vào **Settings** -> **Pages** (ở cột bên trái).

6. Tại mục **Branch**, chọn nhánh `main` (hoặc `master`), thư mục `/ (root)` rồi bấm **Save**.

7. Đợi 30–60 giây, trang web của bạn sẽ hoạt động tại địa chỉ: `https://<ten-user>.github.io/<ten-repo>/`

## 2. Cách Cập Nhật Từ Mới & Nội Dung Về Sau

1. Mở trang web của bạn, vào mục **"Thêm từ & Điền nội dung"**.

2. Nhập từ mới (hệ thống sẽ tự điền Pinyin, bạn có thể chỉnh sửa Hán Việt, nghĩa, câu chuyện chiết tự).

3. Bấm nút **"⬇️ Tải vocab_data.js"** ở đầu trang web hoặc trong Bảng điền nội dung.

4. Truy cập vào repository trên GitHub của bạn, tải file `vocab_data.js` mới lên đè vào file cũ.

5. Bấm **Commit changes**. Toàn bộ từ mới và nội dung sửa đổi sẽ được cập nhật ngay lập tức trên trang web online!