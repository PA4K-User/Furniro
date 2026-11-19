import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001, // 🔹 กำหนดพอร์ตที่ต้องการ
    open: true, // 🔹 ให้เปิดเบราว์เซอร์อัตโนมัติเมื่อรัน
    host: true, // 🔹 ให้เข้าถึงได้จาก LAN (0.0.0.0)
  },
})
