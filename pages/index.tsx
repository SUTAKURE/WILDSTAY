import dynamic from 'next/dynamic';
import TemporaryDrawer from 'components/nav-bar/nav-var';

function App() {
  const Map = dynamic(
    () => import('components/map/map'),
    { ssr: false }, // This line is important. It's what prevents server-side render
  );

  return (
    <>
      <TemporaryDrawer />
      <Map />
    </>
  );
}

export default App;
