import { CheckCircle, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container flex-center animate-fade-in" style={{ minHeight: '80vh', flexDirection: 'column', textAlign: 'center' }}>
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
        boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)'
      }}>
        <CheckCircle size={40} color="#10b981" />
      </div>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Payment Successful
      </h1>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '500px', marginBottom: '2.5rem' }}>
        Thank you for your purchase! We've received your order and are preparing it for shipment.
      </p>

      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        <div className="flex-center" style={{ flexDirection: 'column', gap: '0.5rem' }}>
          <Package size={24} color="var(--accent-color)" />
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Order Placed</span>
        </div>
        <div style={{ width: '2px', background: 'var(--border-color)', height: '100%' }}></div>
        <div className="flex-center" style={{ flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>#ORD-{Math.floor(Math.random() * 10000)}</div>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Order Number</span>
        </div>
      </div>

      <button onClick={() => navigate('/')} className="btn-primary flex-center" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
        Continue Shopping
      </button>
    </div>
  );
}
