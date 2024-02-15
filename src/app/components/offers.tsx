// components/Features.js
import React from 'react';
import { FiTruck, FiClock, FiGift, FiCreditCard } from 'react-icons/fi';
 
export default function Features() {
  return (
    <div className="max-w-sm mx-auto  -ml-1  ml-10 mt-80   ">
      <div className="flex items-center space-x-4 my-4">
        <div className="flex-shrink-0">
          <FiTruck className="h-6 w-6 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            Free Shipping
          </p>
          <p className="text-sm text-gray-500">
            Free Shipping World Wide
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 my-4">
        <div className="flex-shrink-0">
          <FiClock className="h-6 w-6 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            24 X 7 Service
          </p>
          <p className="text-sm text-gray-500">
            Online Service For 24 X 7
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 my-4">
        <div className="flex-shrink-0">
          <FiGift className="h-6 w-6 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            Festival Offer
          </p>
          <p className="text-sm text-gray-500">
            New Online Special Festival Offer
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 my-4">
        <div className="flex-shrink-0">
          <FiCreditCard className="h-6 w-6 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            Online Payment
          </p>
          <p className="text-sm text-gray-500">
            New Online Special Festival Offer
          </p>
        </div>
      </div>
    </div>
  );
}
