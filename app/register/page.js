"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Registration failed");
      }

      router.push("/login");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #f3cad9",
    borderRadius: "10px",
    background: "#fff8fb",
    color: "#633c50",
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
        maxWidth: "400px",
        padding: "32px",
        background: "white",
        borderRadius: "24px",
        boxShadow: "0 10px 30px #db709322",
      }}>
        <h1 style={{
          color: "#a64d73",
          textAlign: "center",
          marginBottom: "25px",
        }}>
          💗 Register
        </h1>

        <form onSubmit={handleSubmit}
          style={{ display: "grid", gap: "15px" }}>
          <input
            style={inputStyle}
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p role="alert" style={{ color: "#c0396b" }}>
              {error}
            </p>
          )}

          <button disabled={loading} style={{
            background: "#e99fbd",
            color: "white",
            padding: "13px",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/login" style={{ color: "#a64d73" }}>
            Already have an account? Login
          </Link>
        </p>
      </div>
    </main>
  );
}