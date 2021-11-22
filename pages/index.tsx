import dynamic from 'next/dynamic';
import React from 'react';

function App() {
  const Map = dynamic(
    () => import('components/map/map'),
    { ssr: false }, // This line is important. It's what prevents server-side render
  );

  return (
    <>
      <React.StrictMode>
        <Map />
      </React.StrictMode>
    </>
  );
}

export default App;
