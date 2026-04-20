import { ShoppingCart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ProductCard({ product }) {
  const { addToCart } = useAppContext();

  return (
    <div className="glass-panel hover-lift animate-fade-in" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Product Image Placeholder (Beautiful Gradient) */}
      <div style={{ 
        height: '240px', 
        background: `linear-gradient(135deg, ${product.color1}, ${product.color2})`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
       }}>
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(5, 5, 5, 0.5)', backdropFilter: 'blur(8px)',
          padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem', fontWeight: 600, color: 'white'
        }}>
          Premium
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{product.name}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', flexGrow: 1 }}>{product.description}</p>
        
        <div className="flex-between">
          <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="btn-primary flex-center"
            style={{ width: '40px', height: '40px', padding: 0, borderRadius: 'var(--radius-full)' }}
            title="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
