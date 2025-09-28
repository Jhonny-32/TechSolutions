import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "1rem 2rem",
      borderBottom: "1px solid #eee",
      background: "#fff"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "1.5rem" }}>🖥️</span>
        <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#000" }}>Tech Solutions</span>
      </div>
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        gap: "2rem"
      }}>
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>Home</Link>
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>Services</Link>
        <Link to="/contact" style={{ color: "#000", textDecoration: "none" }}>Contact</Link>
        <Link to="/login" style={{ color: "#000", textDecoration: "none" }}>Login</Link>
        <Link to="/register" style={{ color: "#000", textDecoration: "none" }}>Register</Link>
      </div>
    </nav>
  );
}