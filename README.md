# 📘 Ứng Dụng Học Tiếng Trung - Từ Điển Của Bạn Học Lưu (GitHub Pages)

Ứng dụng web học từ vựng tiếng Trung qua **Câu chuyện chiết tự**, sử dụng tông màu **Xanh Dương** chủ đạo và tự động hiển thị chữ Hán bằng font **`Pinyinfont_V2.ttf`** (Le Minh Duc Pinyin V2 - có sẵn Pinyin phía trên mỗi chữ Hán).

## 📂 Cấu trúc bộ file trong gói GitHub Pages
- `index.html`: Giao diện chính của ứng dụng (Từ điển, Thêm từ mới, Bảng điền nội dung ứng với từ, Luyện tập điền từ & Flashcard, Quản lý dữ liệu).
- `vocab_data.js`: File dữ liệu 511 từ vựng đã được chuẩn hóa từ Google Sheet *"Bản sao của Bản sao của Từ điển của bạn học Lưu"*. Trang web tự động nạp file này khi mở.
- `vocab_data.json`: File dữ liệu định dạng JSON chuẩn để sao lưu hoặc tích hợp.
- `Pinyinfont_V2.woff2` (2.5 MB) & `Pinyinfont_V2.ttf` (10.5 MB): Font chữ tiếng Trung kèm Pinyin trên đầu chữ (áp dụng tự động cho mọi ký tự chữ Hán qua `unicode-range`).

## 🚀 Hướng dẫn cài đặt lên GitHub Pages (Miễn phí 100%)

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập [https://github.com/new](https://github.com/new).
2. Đặt tên tại ô **Repository name** (ví dụ: `hoc-tieng-trung` hoặc `tu-dien-luu`).
3. Chọn **Public** → bấm **Create repository**.

### Bước 2: Tải các file trong thư mục này lên Repository
1. Trong trang repository vừa tạo, bấm vào dòng chữ **uploading an existing file** (hoặc bấm nút **Add file** → **Upload files**).
2. Kéo thả toàn bộ các file trong gói này vào:
   - `index.html`
   - `vocab_data.js`
   - `vocab_data.json`
   - `Pinyinfont_V2.woff2`
   - `Pinyinfont_V2.ttf`
   - `README.md`
3. Ở ô bên dưới, bấm nút màu xanh **Commit changes**.

### Bước 3: Kích hoạt GitHub Pages
1. Trên thanh công cụ của repository, bấm vào tab **Settings** (biểu tượng bánh răng).
2. Ở menu bên trái, bấm vào mục **Pages**.
3. Tại phần **Build and deployment** → mục **Branch**, đổi từ `None` sang **`main`** (hoặc `master`), giữ nguyên thư mục **`/ (root)`**, rồi bấm **Save**.
4. Chờ khoảng 30–60 giây và tải lại trang. GitHub sẽ hiển thị đường dẫn web của bạn:
   `https://<tên-tài-khoản-github>.github.io/<tên-repository>/`

## 🔄 Cách thêm từ mới, điền nội dung và cập nhật dữ liệu cố định lên GitHub Pages
1. Mở trang web của bạn → vào mục **➕ Thêm từ & Điền nội dung**.
2. Bạn có thể:
   - **Thêm từ mới đầy đủ** (có hỗ trợ tự đổi số thành dấu Pinyin, ví dụ gõ `xue2 xi2` → `xué xí` và xem trước chữ Hán bằng font Pinyin V2).
   - Hoặc **Thêm nhanh danh sách chữ Hán** trước, sau đó chuyển sang tab **📝 Bảng điền nội dung cho từ** để điền Pinyin, Hán Việt, Từ loại, Nghĩa, Câu chuyện từ vựng và Ví dụ ứng với từng từ.
3. Mọi thay đổi được lưu ngay lập tức vào bộ nhớ trình duyệt (`localStorage`) của máy bạn.
4. Khi muốn cập nhật bộ từ mới lên GitHub Pages cho tất cả mọi người/thiết bị khác cùng thấy:
   - Vào tab **💾 File Dữ liệu & GitHub Pages** → bấm nút **⬇️ Tải vocab_data.js**.
   - Vào repository trên GitHub → bấm **Add file → Upload files** → kéo file `vocab_data.js` vừa tải vào để ghi đè lên file cũ → bấm **Commit changes**.
