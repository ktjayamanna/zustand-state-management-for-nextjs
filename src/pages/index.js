import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [age, setAge] = useState("");

  return (
    <div className="container">
      <h1>Enter Your Age</h1>
      <input
        type="number"
        className="form-control"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Link href={`/color?age=${age}`}>
        <button className="btn btn-primary mt-3">Next</button>
      </Link>
    </div>
  );
}
