import Link from "next/link";

export default function ReactBasics() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <h1 className="text-4xl font-bold">React Basics</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          className="text-blue-500 hover:text-blue-700 font-bold"
          href="/react-basics/state-updates"
        >
          State Updates
        </Link>
      </div>
    </div>
  );
}