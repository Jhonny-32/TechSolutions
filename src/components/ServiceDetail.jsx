import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "./Services";

export default function ServiceDetail() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const service = services.find(
    s => s.name.toLowerCase() === decodedName.toLowerCase()
  );

  const [quantity, setQuantity] = useState(1);

  if (!service) return <div style={{ textAlign: "center", margin: "2rem" }}>Service not found</div>;

  return (
    <section style={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        maxWidth: "1100px",
        width: "100%"
      }}>
        <img
          src={service.img}
          alt={service.name}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.name}</h2>
          <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>{service.price}</div>
          <p style={{ marginBottom: "2rem" }}>{service.description}</p>
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ marginRight: "1rem" }}>Quantity</span>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ width: "40px" }}>-</button>
            <span style={{ margin: "0 1rem" }}>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} style={{ width: "40px" }}>+</button>
          </div>
          <button style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #222",
            background: "#fff",
            cursor: "pointer"
          }}>Add to cart</button>
        </div>
      </div>
    </section>
  );
}