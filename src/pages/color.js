import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Color() {
  const router = useRouter();
  const { age } = router.query; // Retrieve age from the query parameters
  const [color, setColor] = useState("");

  return (
    <div className="container">
      <h1>Choose Your Favorite Color</h1>
      <select
        className="form-select"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <Link href="/">
        <button className="btn btn-secondary mt-3">Back</button>
      </Link>
      <Link href={`/summary?age=${age}&color=${color}`}>
        <button className="btn btn-primary mt-3 ms-2">Next</button>
      </Link>
    </div>
  );
}
