import React, { useEffect } from "react";

export default function Popup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        background: "#242424)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        zIndex: 9999,
      }}
    >
      <div>
        <img src="../src/assets/logo.png" alt="BF" />
      </div>
    </div>
  );
}
