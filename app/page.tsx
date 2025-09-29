'use client';

export default function Landing() {
  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>FloatChat</h1>
        <p style={{ marginBottom: '2rem' }}>Ocean Data Dashboard</p>
        <a 
          href='/dashboard' 
          style={{
            padding: '1rem 2rem',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Enter Dashboard
        </a>
      </div>
    </main>
  );
}
