import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // render component ไปที่ id root ใน index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//ใช้ npm start ในการรันถ้าใช้ create react app ในการสร้าง project
//ถ้าสร้าง project ด้วย vite จะใช้ npm run dev
