import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import useStore from "./store";

export default function Color() {
  const router = useRouter();
  const { age, color, setColor } = useStore((state) => ({
    age: state.age,
    color: state.color,
    setColor: state.setColor,
  }));

  const containerStyle = {
    paddingTop: "50px",
    backgroundColor: "#F0F4F8", // light grey background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const titleStyle = {
    color: "#333333", // dark text for readability
    marginBottom: "20px",
  };

  const selectStyle = {
    width: "50%",
    padding: "10px",
    marginBottom: "200px",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,.075)", // subtle inner shadow for depth
    fontSize: "16px", // increase font size for better readability
    cursor: "pointer",
  };

  const buttonStyle = {
    padding: "10px 15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // button shadow for depth
    cursor: "pointer",
    textDecoration: "none",
    display: "block",
    width: "calc(90% - 4px)", // accounting for the margin
    margin: "2px",
    textAlign: "center",
    border: "none",
  };

  const backButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d", // a standard bootstrap secondary button color
    color: "#FFFFFF", // white text for contrast
    marginRight: "4px", // to separate it from the next button
  };

  const nextButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff", // a standard bootstrap primary button color
    color: "#FFFFFF", // white text for contrast
    marginLeft: "4px", // to separate it from the back button
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center", // This will center the buttons
    alignItems: "center", // This will vertically align the buttons in case they have different heights
    width: "100%",
    maxWidth: "500px",
    marginTop: "20px", // Adds some space above the buttons
  };

  // Inside your component's return statement:
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Choose Your Favorite Color</h1>
      <select
        style={selectStyle}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <div style={buttonContainerStyle}>
        <Link href="/">
          <button style={backButtonStyle}>Back</button>
        </Link>
        <Link href={`/summary?age=${age}&color=${color}`}>
          <button style={nextButtonStyle}>Next</button>
        </Link>
      </div>
    </div>
  );
}
