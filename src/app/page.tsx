import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <h1 className="text-4xl font-bold">Next App Guide</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          className="text-blue-500 hover:text-blue-700 font-bold"
          href="/react-basics"
        >
          React Basics
        </Link>
      </div>
    </div>
  );
}
