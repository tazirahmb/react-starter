import React from 'react';
import { createRoot } from 'react-dom/client';


export default function OfflinePage() {
  return <div>Sorry, you are offline</div>;
}

const offlineEl = document.getElementById('offline-fallback');

if (offlineEl) {
  const root = createRoot(offlineEl)
  root.render(<OfflinePage />);
}
  