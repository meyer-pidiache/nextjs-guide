import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <Header title="Next App Guide" />
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
