import ProductCard from '../components/ProductCard';

const MOCK_PRODUCTS = [
  { id: 1, name: "Astra Wireless Headphones", price: 299.99, description: "Noise-cancelling over-ear premium audio experience.", color1: "#3b82f6", color2: "#1d4ed8" },
  { id: 2, name: "Nebula Smartwatch", price: 199.50, description: "Track your vitals with aerospace grade materials.", color1: "#8b5cf6", color2: "#6d28d9" },
  { id: 3, name: "Quantum Keyboard", price: 149.00, description: "Mechanical linear switches with per-key RGB glow.", color1: "#10b981", color2: "#047857" },
  { id: 4, name: "Void Pro Ergonomic Mouse", price: 89.99, description: "Hyper-fast scrolling with zero latency.", color1: "#f43f5e", color2: "#be123c" },
  { id: 5, name: "Starlight Webcam 4K", price: 129.99, description: "Crystal clear video with automatic low-light correction.", color1: "#f59e0b", color2: "#b45309" },
  { id: 6, name: "Nova Display 27\"", price: 499.00, description: "144Hz OLED panel for breathtaking visuals.", color1: "#06b6d4", color2: "#0369a1" },
];

export default function Home() {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ 
        padding: '4rem 0', 
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15), transparent 70%)',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #a3a3a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Discover the Future of Tech
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore our premium selection of devices, curated for those who demand excellence.
        </p>
      </section>

      {/* Product Grid */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          Trending Now
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
    </div>
  );
}
