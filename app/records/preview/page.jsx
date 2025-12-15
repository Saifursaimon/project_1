import { Suspense } from 'react';
import PreviewPage from './Preview';

export default function page() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <PreviewPage />
    </Suspense>
  );
}