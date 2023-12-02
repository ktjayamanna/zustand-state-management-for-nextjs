import { useRouter } from "next/router";
import Link from "next/link";

export default function Summary() {
  const router = useRouter();
  const { age, color } = router.query;

  return (
    <div className="container">
      <h1>Summary</h1>
      <p>Age: {age}</p>
      <p>Favorite Color: {color}</p>
      <Link href={`/color?age=${age}`}>
        <button className="btn btn-secondary">Back</button>
      </Link>
    </div>
  );
}
