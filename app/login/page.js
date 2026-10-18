"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ส่งข้อมูล Login ให้ API ตั้ง cookie token
  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // โหลดหน้าใหม่ให้ proxy.js ตรวจ cookie
      window.location.href = "/dashboard";
    } else {
      setMessage(data.message);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "13px",
    border: "1px solid #f3cad9",
    borderRadius: "12px",
    background: "#fff8fb",
    color: "#633c50",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#fff0f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        background: "#ffffff",
        padding: "36px 28px",
        borderRadius: "24px",
        boxShadow: "0 10px 30px #db709322",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "42px" }}>
          💗
        </div>

        <h1 style={{
          color: "#a64d73",
          fontSize: "30px",
          margin: "12px 0 28px",
        }}>
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Email"
            style={inputStyle}
            required
          />

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Password"
            style={inputStyle}
            required
          />

          <button
            type="submit"
            style={{
              background: "#e99fbd",
              color: "#ffffff",
              border: "none",
              borderRadius: "12px",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        {message && (
          <p style={{
            color: "#c0396b",
            marginTop: "15px",
          }}>
            {message}
          </p>
        )}

        <p style={{
          marginTop: "24px",
          color: "#8b7180",
        }}>
          No account yet?{" "}
          <Link
            href="/register"
            style={{
              color: "#a64d73",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}