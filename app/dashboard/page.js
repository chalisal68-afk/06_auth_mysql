"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // โหลดข้อมูลผู้ใช้ที่ Login อยู่จาก API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  };

  const pageStyle = {
    minHeight: "100vh",
    background: "#fff0f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  if (!user) {
    return (
      <main style={pageStyle}>
        <p style={{ color: "#a64d73" }}>
          Loading...
        </p>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <div style={{
        background: "#ffffff",
        padding: "35px 28px",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "420px",
        textAlign: "center",
        boxShadow: "0 10px 30px #db709322",
      }}>
        <div style={{ fontSize: "42px" }}>
          💗
        </div>

        <h1 style={{
          color: "#a64d73",
          marginBottom: "12px",
        }}>
          Dashboard
        </h1>

        <p style={{ color: "#8b7180" }}>
          Welcome, {user.fullname}
        </p>

        <div style={{
          background: "#fff4f8",
          padding: "20px",
          borderRadius: "14px",
          margin: "25px 0",
          textAlign: "left",
        }}>
          <h3 style={{
            color: "#a64d73",
            marginBottom: "15px",
          }}>
            Profile Information
          </h3>

          <p style={{ color: "#755b69" }}>
            Name: {user.fullname}
          </p>

          <p style={{ color: "#755b69" }}>
            Email: {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "14px",
            background: "#e99fbd",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </main>
  );
}