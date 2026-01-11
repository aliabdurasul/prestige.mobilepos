import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to standalone POS HTML
    window.location.href = '/pos.html';
  }, []);

  return (
    <div style={{
      background: '#000',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          Prestige.POS
        </div>
        <div style={{ color: '#00ff88' }}>Yükleniyor...</div>
      </div>
    </div>
  );
}

export default App;
