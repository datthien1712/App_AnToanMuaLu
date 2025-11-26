# AnToanMuaLuApp

## Ứng dụng "An Toàn Mùa Lũ"

Ứng dụng di động đa nền tảng (Android và iOS) nhằm hỗ trợ cộng đồng trong mùa mưa lũ, cung cấp thông tin kịp thời và công cụ hỗ trợ khẩn cấp.

### Tính năng chính:

1.  **Định vị & Đánh dấu vị trí an toàn (Safe Spots):** Người dùng có thể đánh dấu và xem các điểm an toàn trên bản đồ, giúp cộng đồng dễ dàng tìm nơi trú ẩn.
2.  **Hệ thống cảnh báo lũ theo thời gian thực:** Cung cấp thông báo và cập nhật về tình hình lũ lụt, giúp người dân chủ động phòng tránh.
3.  **Chia sẻ vị trí người gặp nạn (SOS Live Share):** Cho phép người dùng chia sẻ vị trí trực tiếp khi gặp nạn, hỗ trợ đội cứu hộ tiếp cận nhanh chóng.
4.  **Danh sách nơi trú ẩn – điểm cứu trợ:** Cung cấp thông tin chi tiết về các địa điểm trú ẩn và điểm cứu trợ khẩn cấp.
5.  **Bản đồ cộng đồng (Crowdsourcing):** Cho phép người dùng đóng góp thông tin về tình hình lũ lụt, các tuyến đường an toàn hoặc nguy hiểm, và các điểm cần hỗ trợ.
6.  **Hoạt động “ngoại tuyến” (offline-first):** Đảm bảo các tính năng cốt lõi vẫn hoạt động được ngay cả khi không có kết nối internet.

### Vấn đề an toàn & pháp lý cần lưu ý:

*   **Không thu thập dữ liệu quá nhạy cảm:** Tránh thu thập các thông tin cá nhân như địa chỉ nhà, CMND.
*   **Bảo mật dữ liệu vị trí người gặp nạn:** Dữ liệu vị trí SOS chỉ được chia sẻ với đội cứu hộ.
*   **Chia sẻ cộng đồng an toàn:** Khi chia sẻ thông tin cộng đồng, chỉ hiển thị mốc khu vực, không chia sẻ tọa độ chính xác của từng nhà.

### Công nghệ sử dụng:

*   **Frontend Mobile (App):**
    *   React Native
    *   Expo
    *   **Thư viện bản đồ:** `react-native-maps` hoặc `@rnmapbox/maps`
    *   **Thư viện định vị:** `expo-location` hoặc `react-native-geolocation-service`
*   **Backend:**
    *   Node.js (Express)
    *   Firebase (cho Realtime Database / Authentication)
*   **Database:**
    *   MongoDB (NoSQL)
*   **Map & GPS:**
    *   Google Maps Platform
    *   Mapbox

### Cài đặt và chạy dự án (Local Setup):

1.  **Clone repository:**
    ```bash
    git clone [URL của repository]
    cd AnToanMuaLuApp
    ```
2.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```
3.  **Khởi động ứng dụng:**
    *   **Android:**
        ```bash
        npm run android
        ```
    *   **iOS:** (Yêu cầu macOS)
        ```bash
        npm run ios
        ```
    *   **Web:**
        ```bash
        npm run web
        ```

### Backend API (`/backend`)

1.  **Cài đặt:**
    ```bash
    cd backend
    npm install
    cp env.example .env # chỉnh sửa thông số MongoDB, PORT nếu cần
    ```
2.  **Chạy server (yêu cầu MongoDB đang hoạt động):**
    ```bash
    npm run dev
    ```
3.  **Các endpoint chính:**
    *   `GET /health` – kiểm tra trạng thái API.
    *   `GET/POST /api/safe-spots` – quản lý điểm an toàn.
    *   `GET/POST /api/alerts` – cảnh báo lũ.
    *   `GET/POST/PATCH /api/sos` – yêu cầu cứu hộ.
    *   `GET/POST /api/shelters` – danh sách nơi trú ẩn.

### Hướng dẫn phát triển:

*   Mở dự án bằng Visual Studio Code.
*   Sử dụng Expo Go app trên điện thoại để kiểm tra ứng dụng nhanh chóng bằng cách quét QR code.

---
