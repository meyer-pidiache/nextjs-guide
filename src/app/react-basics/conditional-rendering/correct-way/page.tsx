'use client';

import { useEffect, useState } from 'react';

export default function ProductCard({ id }: { id: number }) {
  const [something, setSomething] = useState('bla-bla-bla');

  useEffect(() => {}, [something]);

  return (
    <section className="flex items-center justify-center h-screen font-bold">
      {!id ? 'No id provided' : <>{/* Product Card */}</>}
    </section>
  );
}
