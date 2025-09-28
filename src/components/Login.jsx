import React from "react";

export default function Login() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4rem 2rem",
      background: "#f5f5f5",
      minHeight: "500px"
    }}>
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "3rem",
        width: "100%",
        maxWidth: "900px"
      }}>
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Login</h1>
          <form>
            <label>Username</label>
            <input type="text" placeholder="username" style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #aaa",
              borderRadius: "4px"
            }} />
            <label>Password</label>
            <input type="password" placeholder="password" style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #aaa",
              borderRadius: "4px"
            }} />
            <button type="submit" style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #222",
              background: "#fff",
              cursor: "pointer"
            }}>Login</button>
          </form>
        </div>
        <img src="https://tumatera.co/cdn/shop/files/5905197585925_03_700x700.webp?v=1757002455"
          alt="Login"
          style={{ width: "350px", height: "350px", objectFit: "cover", borderRadius: "4px", marginTop: "70px" }}
        />
      </div>
    </section>
  );
}