import "./index.css"; // ⭐ 이거 무조건 먼저

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { registerSW } from "virtual:pwa-register";

// registerSW();



function Splash() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#ffffff"
      }}
    >
      <img src="/icon512.png" style={{ width: 120, height: 120 }} />
      <p>집수리 바로매칭</p>
    </div>
  );
}

function Root() {
  const [loading, setLoading] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      setFadeOut(true);

      setTimeout(() => {
        setLoading(false);
      }, 300); // 부드러운 전환
    });
  }, []);

  return loading ? (
    <div style={{
      opacity: fadeOut ? 0 : 1,
      transition: "opacity 0.3s ease"
    }}>
      <Splash />
    </div>
  ) : (
    <App />
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);