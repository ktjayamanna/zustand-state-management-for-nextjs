import { useRouter } from "next/router";
import Link from "next/link";

export default function Summary() {
  const router = useRouter();
  const { age, color } = router.query;

  const containerStyle = {
    paddingTop: "50px",
    backgroundColor: "#F0F4F8", // light grey background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    color: "#333333", // dark text for readability
    marginBottom: "0.5rem", // gives some space between the text lines
  };

  const buttonStyle = {
    backgroundColor: "#6c757d", // a standard bootstrap secondary button color
    color: "#FFFFFF", // white text for contrast
    padding: "10px 15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // button shadow for depth
    cursor: "pointer",
    textDecoration: "none",
    display: "block", // for full width
    width: "100%", // full width of the parent container
    maxWidth: "500px", // max-width of the button
    textAlign: "center",
    border: "none",
    marginTop: "20px", // space above the button
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...textStyle, marginBottom: "1rem" }}>Summary</h1>{" "}
      {/* More margin for the heading */}
      <p style={textStyle}>Age: {age}</p>
      <p style={textStyle}>Favorite Color: {color}</p>
      <Link href={`/color?age=${age}`}>
        <button style={buttonStyle}>Back</button>
      </Link>
    </div>
  );
}
