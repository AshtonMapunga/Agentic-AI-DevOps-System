import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, LogOut, Package } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { cartItemCount, user, logout } = useAppContext();
  const navigate = useNavigate();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(5, 5, 5, 0.75)', backdropFilter: 'blur(16px)', -webkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)', height: '76px'
    }}>
      <div className="container flex-between" style={{ height: '100%' }}>
        
        {/* Logo */}
        <Link to="/" className="flex-center hover-lift" style={{ gap: '0.75rem' }}>
          <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-glow)' }}>
            <Package size={22} color="var(--accent-color)" />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #a3a3a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            AstraShop
          </span>
        </Link>

        {/* Right Actions */}
        <div className="flex-center" style={{ gap: '1.5rem' }}>
          <button onClick={() => navigate('/checkout')} className="flex-center hover-lift" style={{ position: 'relative', color: 'var(--text-primary)', padding: '0.5rem' }}>
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="flex-center animate-fade-in" style={{
                position: 'absolute', top: '0', right: '-4px', background: 'var(--accent-color)', color: 'white',
                fontSize: '0.75rem', fontWeight: 'bold', width: '20px', height: '20px', borderRadius: '50%'
              }}>
                {cartItemCount}
              </span>
            )}
          </button>
          
          {user && (
            <div className="flex-center" style={{ gap: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem' }}>
              <div className="flex-center" style={{ gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <User size={18} />
                <span style={{ fontSize: '0.875rem' }}>{user.name}</span>
              </div>
              <button 
                onClick={() => { logout(); navigate('/login'); }}
                className="btn-secondary flex-center hover-lift"
                style={{ padding: '0.5rem', borderRadius: '50%', color: 'var(--text-muted)' }}
                title="Log Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
