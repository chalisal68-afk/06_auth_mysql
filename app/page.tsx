import Link from "next/link";

export default function Home() {
  const links = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#fff0f5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "white",
        borderRadius: "24px",
        padding: "36px 28px",
        width: "100%",
        maxWidth: "420px",
        textAlign: "center",
        boxShadow: "0 10px 30px #db709322"
      }}>
        <div style={{ fontSize: "38px" }}>💗</div>

        <h1 style={{
          color: "#a64d73",
          fontSize: "28px",
          margin: "15px 0 25px"
        }}>
          Auth Demo on Vercel
        </h1>

        <p>ชาลิสา ลิ้มประเสริฐ</p>
        <p>6806744</p>

        <nav style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "25px"
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                background: "#f8bbd0",
                color: "#803c5c",
                padding: "14px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}