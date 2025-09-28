import React from "react";

export default function Hero() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4rem 2rem",
      minHeight: "400px"
    }}>
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          We provide top-notch technology services
        </h1>
        <button style={{
          padding: "0.5rem 2rem",
          border: "1px solid #222",
          background: "#fff",
          cursor: "pointer"
        }}>Now</button>
      </div>
      <img src="https://img.freepik.com/vector-gratis/vector-tecnologia-red-futurista-azul_53876-151537.jpg?semt=ais_incoming&w=740&q=80"
        alt="Tech"
        style={{ width: "350px", height: "350px", objectFit: "cover", borderRadius: "4px" }}
      />
    </section>
  );
}