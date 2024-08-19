import React from 'react';
import sunImage from './sun.png';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Mousam</div>
      <nav className="flex-grow">
        <ul className="flex space-x-4">
          <li>Guide</li>
          <li>API</li>
          <li>Dashboard</li>
          <li>Marketplace</li>
          <li>Pricing</li>
          <li>Maps</li>
          <li>For Business</li>
        </ul>
      </nav>
      <img src={sunImage} alt="Right Image" className="h-10 w-10" />
    </header>
  );
}

export default Header;
