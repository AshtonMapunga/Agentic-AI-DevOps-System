import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Trash2, ChevronRight, ShoppingCart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Checkout() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setLoading(true);
    setTimeout(() => {
      clearCart();
      navigate('/payment-success');
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="container flex-center" style={{ minHeight: '60vh', flexDirection: 'column', gap: '1rem' }}>
        <ShoppingCart size={48} color="var(--text-muted)" />
        <h2 style={{ fontSize: '1.5rem' }}>Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="btn-primary">Browse Products</button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Secure Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        
        {/* Cart Review */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Order Summary</h2>
          
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cart.map(item => (
              <div key={item.id} className="flex-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div>
                  <h4 style={{ fontWeight: 500 }}>{item.name}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    <div className="flex-center" style={{ gap: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', padding: '0.2rem' }}>
                      <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '0.2rem 0.5rem', color: 'var(--text-secondary)' }}>-</button>
                      <span style={{ fontSize: '0.875rem' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '0.2rem 0.5rem', color: 'var(--text-secondary)' }}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: '#ef4444' }} title="Remove"><Trash2 size={16} /></button>
                  </div>
                </div>
                <div style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
            
            <div className="flex-between" style={{ paddingTop: '1rem', marginTop: 'auto', fontSize: '1.25rem', fontWeight: 700 }}>
              <span>Total</span>
              <span style={{ color: 'var(--accent-color)' }}>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Mock */}
        <div>
           <h2 style={{ fontSize: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Payment Details</h2>
           <form className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handlePayment}>
             
             <div>
               <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Cardholder Name</label>
               <input type="text" className="input-premium" required defaultValue="Ashton Default" />
             </div>

             <div>
               <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Card Number</label>
               <div style={{ position: 'relative' }}>
                 <CreditCard size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                 <input type="text" className="input-premium" style={{ paddingLeft: '2.75rem' }} required defaultValue="4242 4242 4242 4242" />
               </div>
             </div>

             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
               <div>
                 <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Expiry</label>
                 <input type="text" className="input-premium" required defaultValue="12/28" />
               </div>
               <div>
                 <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>CVC</label>
                 <input type="text" className="input-premium" required defaultValue="123" />
               </div>
             </div>

             <button type="submit" className="btn-primary flex-center" style={{ gap: '0.5rem', height: '3rem', marginTop: '1rem' }} disabled={loading}>
               {loading ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
               {!loading && <ChevronRight size={18} />}
             </button>
           </form>
        </div>
      </div>
    </div>
  );

