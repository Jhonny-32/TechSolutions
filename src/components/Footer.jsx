import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#fafafa",
      padding: "2rem 2rem",
      borderTop: "1px solid #eee",
      marginTop: "2rem"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap"
      }}>
        <div>
          <span style={{ fontSize: "1.5rem" }}>🖥️</span>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem", marginLeft: "0.5rem" }}>Tech Solutions</span>
        </div>
        <div>
          <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Connect</div>
          <div>Instagram</div>
          <div>Facebook</div>
          <div>Pinterest</div>
          <div>YouTube</div>
        </div>
        <div>
          <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Resources</div>
          <div>Return Policy</div>
          <div>Track An Order</div>
          <div>FAQs</div>
          <div>Privacy Policy</div>
        </div>
        <div>
          <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>About</div>
          <div>Our Story</div>
          <div>Careers</div>
          <div>Press</div>
        </div>
        <div>
          <select>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem", color: "#888" }}>
        © 2025 Tech Solutions
      </div>
    </footer>
  );
}