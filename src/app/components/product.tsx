export default function ProductPage() {
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">     
          <div className="md:w-1/4 px-4 mb-4 md:mb-0">    
          </div>
  
           
          <div className="md:w-3/4 px-4 flex flex-wrap">
            
            {/* Product Image */}
            <div className="lg:w-1/2 px-4 mb-4 lg:mb-0">
              <img src="/path-to-dress-image.jpg" alt="V-Neck Dress" className="w-full h-auto" />
            </div>
  
            {/* Product Info */}
            <div className="lg:w-1/2 px-4">
              <div className="text-2xl font-bold mb-2">V-NECK DRESS</div>
              <div className="text-lg line-through text-gray-500">$315</div>
              <div className="text-2xl text-red-500 mb-2">$94.5 <span className="text-base font-normal text-gray-500">70% Off</span></div>
  
              {/* Color Options */}
          <div className="flex space-x-2 mb-4">
            <div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-yellow-300"></div>
            <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-300"></div>
          </div>
           {/* Size Selection */}
           <div className="flex items-center mb-4">
            <div className="mr-4">Select Size</div>
            <div className="border border-gray-300 rounded px-2 py-1 mr-4">S</div>
            <div className="border border-gray-300 rounded px-2 py-1">M</div>
          </div>
            {/* Quantity Selection */}
            <div className="mb-4">
            <div className="mb-1">InStock</div>
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-4 py-2 bg-gray-100">{'<'}</button>
              <div className="px-4 py-2">1</div>
              <button className="px-4 py-2 bg-gray-100">{'>'}</button>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex space-x-4 mb-8">
            <button className="bg-red-500 text-white font-bold px-8 py-2 rounded">ADD TO CART</button>
            <button className="bg-black text-white font-bold px-8 py-2 rounded">BUY NOW</button>
          </div>
            {/* Description */}
            <div className="border-t pt-4">
            <div className="font-bold text-xl mb-2">Product Details</div>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
          </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  