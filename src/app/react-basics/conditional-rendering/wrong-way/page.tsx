'use client';

import { useEffect, useState } from 'react';

export default function ProductCard({ id }: { id: number }) {
  if (!id) {
    return (
      <div className="flex items-center justify-center h-screen font-bold">
        No id provided
      </div>
    );
  }

  const [something, setSomething] = useState('bla-bla-bla');

  useEffect(() => {}, [something]);

  return <section>{/* Product Card */}</section>;
}
