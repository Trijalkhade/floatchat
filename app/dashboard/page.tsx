import OceanMap from '@/components/OceanMap';

export default function Dashboard() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        FloatChat Dashboard
      </h1>
      <OceanMap />
    </div>
  );
}
