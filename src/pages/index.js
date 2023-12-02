import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [age, setAge] = useState("");

  const containerStyle = {
    paddingTop: "50px",
    backgroundColor: "#F0F4F8", // light grey background
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const titleStyle = {
    color: "#333333", // dark text for readability
    textAlign: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,.075)", // subtle inner shadow for depth
    fontSize: "16px", // increase font size for better readability
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#0056b3", // less bright blue
    borderColor: "#0056b3",
    color: "#FFFFFF", // white text for contrast
    padding: "10px 15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // button shadow for depth
    cursor: "pointer",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <h1 style={titleStyle}>Enter Your Age</h1>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="number"
            style={inputStyle}
            placeholder="Your age..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <Link href={`/color?age=${age}`}>
          <button style={buttonStyle}>Next</button>
        </Link>
      </div>
    </div>
  );
}
