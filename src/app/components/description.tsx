 'use client'
import React, { useState } from 'react';

const Tab = ({ name, activeTab, setActiveTab }) => {
  return (
    <li
      className={`pb-2 ${activeTab === name ? 'text-red-500 border-b-2 border-red-500' : 'text-black hover:text-red-500'}`}
      onClick={() => setActiveTab(name)}
    >
      {name}
    </li>
  );
};

const tabs = ['DESCRIPTION', 'DETAILS', 'VIDEO', 'WRITE REVIEW'];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="container mx-auto p-10">
      {/* Navigation bar */}
      <ul className="flex cursor-pointer space-x-6 border-b">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            name={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>

      {/* Content */}
      <div className="mt-4 text-gray-600">
      
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum." sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}
