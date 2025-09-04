import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Decore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://meesho-server-hrpv.onrender.com/homedecore")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-lg py-10">Loading...</div>;
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;

  return (
  <div
  className="product-grid"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    padding: '20px',
    width: '100%',
  }}
>
  {data.map((e) => (
    <Link
      to={`/product/${e.id}`}
      key={e.id}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        }}
      >
        <div
          style={{
            height: '200px',
            overflow: 'hidden',
            borderRadius: '12px',
            marginBottom: '12px',
          }}
        >
          <img
            src={e.image}
            alt={e.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>

        <h2
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            marginBottom: '6px',
            color: '#333',
          }}
        >
          {e.name}
        </h2>

        <p
          style={{
            fontSize: '18px',
            color: 'green',
            fontWeight: 'bold',
            marginBottom: '4px',
          }}
        >
          ₹{e.price}
        </p>
        <p
          style={{
            fontSize: '13px',
            color: '#555',
            marginBottom: '6px',
          }}
        >
          {e.delivery}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              backgroundColor: '#038d63',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '13px',
            }}
          >
            ★ {e.rating}
          </span>
          <span
            style={{
              fontSize: '13px',
              color: '#888',
            }}
          >
            {e.reviews} Reviews
          </span>
        </div>

        
      </div>
    </Link>
  ))}
</div>
  
  );
};

export default Decore

