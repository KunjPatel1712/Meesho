import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Western = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/westrendress')
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
    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', padding: '24px', width: '100%' }}>
    {data.map((e) => (
            <Link to={`/product/${e.id}`} className="">
      <div key={e.id} style={{
        maxWidth: '100%',
        border: '1px solid #ddd',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div style={{
          height: '250px',
          overflow: 'hidden',
          borderRadius: '12px',
          marginBottom: '16px',
        }}>
          <img src={e.image} alt={e.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
  
        <h2 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#333',
        }}>
          {e.name}
        </h2>
  
        <p style={{
          fontSize: '20px',
          color: 'green',
          fontWeight: 'bold',
          marginBottom: '4px',
        }}>
          {e.price}
        </p>
        <p style={{
          fontSize: '14px',
          color: '#555',
          marginBottom: '8px',
        }}>
          {e.delivery}
        </p>
  
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px',
        }}>
          <span style={{
            backgroundColor: '#038d63',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '14px',
          }}>
            ★ {e.rating}
          </span>
          <span style={{
            fontSize: '13px',
            color: '#888',
          }}>
            {e.reviews}
          </span>
        </div>
  

  
        <button style={{
          padding: '10px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
          Buy Now
        </button>
      </div>
      </Link>
    ))}
  </div>
  
  );
};

export default Western;
