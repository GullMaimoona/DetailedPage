import React from 'react';

const relatedProducts = [
  {
    id: 1,
    name: 'Trim Dress',
    price: '$145',
    imageUrl: '/images/trim-dress.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Belted Dress',
    price: '$185',
    imageUrl: '/images/belted-dress.jpg',
    rating: 3,
  },
  {
    id: 3,
    name: 'Fitted Dress',
    price: '$174',
    imageUrl: '/images/fitted-dress.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Belted Top',
    price: '$98',
    imageUrl: '/images/belted-top.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Waist Dress',
    price: '$230',
    imageUrl: '/images/waist-dress.jpg',
    rating: 5,
  },
  {
    id: 6,
    name: 'Crop Top',
    price: '$121',
    imageUrl: '/images/crop-top.jpg',
    rating: 4,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '160px' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '160px', height: '240px', objectFit: 'cover' }} />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < product.rating ? '#FFD700' : '#C0C0C0' }}>&#9733;</span>
        ))}
      </div>
      <div style={{ fontWeight: 'bold' }}>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', textAlign: 'center' }}>RELATED PRODUCTS</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}>
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
