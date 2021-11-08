import dynamic from 'next/dynamic';

function App() {
  const Map = dynamic(
    () => import('components/map/map'),
    { ssr: false }, // This line is important. It's what prevents server-side render
  );

  return (
    <>
      <Map />
    </>
  );
}

export default App;
