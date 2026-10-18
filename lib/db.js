import mysql from "mysql2/promise";
console.log("DB_USER loaded:", Boolean(process.env.DB_USER));
console.log("DB_USER has prefix:", process.env.DB_USER?.includes("."));
// connection pool นำการเชื่อมต่อกลับมาใช้ซ้ำในทุก request แทนการเปิดการเชื่อมต่อใหม่ทุกครั้ง
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME, // หรือ process.env.DB_USERNAME ตามที่คุณใช้ในไฟล์ .env
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  // TiDB Cloud บังคับใช้ TLS ส่วน CAMPP บนเครื่องไม่ใช้ จึงเปิดตามค่า DB_SSL
  ssl:
    process.env.DB_SSL === "true"
      ? { minVersion: "TLSv1.2", rejectUnauthorized: true }
      : undefined,
});