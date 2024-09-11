'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // State updates aren't immediate
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <button
        onClick={handleClick}
        className="bg-blue-500 font-bold text-white px-4 py-2 rounded-md"
      >
        Click me
      </button>

      <p>Count is: {count}</p>
    </div>
  );
}
