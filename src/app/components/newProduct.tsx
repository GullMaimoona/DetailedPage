'use client'
import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Trim Dress',
    price: '$145',
    imageUrl: '/images/trim-dress.jpg',  
    rating: 5,
  },
  {
    id: 2,
    name: 'Belted Top',
    price: '$98',
    imageUrl: '/images/belted-top.jpg',  
    rating: 4,
  },
  {
    id: 3,
    name: 'Waist Dress',
    price: '$230',
    imageUrl: '/images/waist-dress.jpg',  
    rating: 5,
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: '$120',
    imageUrl: '/images/summer-dress.jpg',  
    rating: 4,
  },
  {
    id: 5,
    name: 'Casual Shirt',
    price: '$70',
    imageUrl: '/images/casual-shirt.jpg',  
    rating: 3,
  },
  {
    id: 6,
    name: 'T-Shirts',
    price: '$25',
    imageUrl: '/images/t-shirts.jpg',  
    rating: 5,
  },
];

// ProductCard component
const ProductCard = ({ product }) => {
  return (
    <div className="flex w-full max-w-md m-2">
      <img className="w-1/2" src={product.imageUrl} alt={product.name} />
      <div className="flex flex-col justify-between p-4 w-1/2">
        <div>
          <div className="font-sm text-lg mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.price}</p>
        </div>
        <div className="text-yellow-500">
          {'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const maxPage = Math.ceil(products.length / itemsPerPage) - 1;

  const goToPrevious = () => {
    setCurrentPage((prevCurrentPage) => (prevCurrentPage > 0 ? prevCurrentPage - 1 : 0));
  };

  const goToNext = () => {
    setCurrentPage((prevCurrentPage) => (prevCurrentPage < maxPage ? prevCurrentPage + 1 : 0));
  };

  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-xl font-bold mb-6">PRODUCTS</h2> {/* Heading size reduced to text-xl */}
      <div className="flex flex-col items-center justify-center">
        <button onClick={goToPrevious} className="mb-4">
          &lt; Previous
        </button>
        <div className="flex flex-col items-center gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button onClick={goToNext} className="mt-4">
          Next &gt;
        </button>
      </div>
    </div>
  );
}