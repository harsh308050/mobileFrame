import MobileFrame from './components/MobileFrame';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <MobileFrame
        url="https://fitnessappharsh.netlify.app/"
      />
    </div>
  );
}

export default App
