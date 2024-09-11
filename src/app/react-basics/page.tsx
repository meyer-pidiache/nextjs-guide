import Header from '@/components/Header';
import Link from 'next/link';

export default function ReactBasics() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <Header title="React Basics" />
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          className="text-blue-500 hover:text-blue-700 font-bold"
          href="/react-basics/state-updates"
        >
          State Updates
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-700 font-bold"
          href="/react-basics/conditional-rendering"
        >
          Conditional Rendering
        </Link>
      </div>
    </div>
  );
}
