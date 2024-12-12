import React from 'react';
import { Link } from 'react-router-dom';

interface CoinCardProps {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume: number;
}

const CoinCard: React.FC<CoinCardProps> = ({
  id,
  name,
  symbol,
  price = 0,
  change1h = 0,
  change24h = 0,
  change7d = 0,
  marketCap = 0,
  volume = 0,
}) => {
  return (
    <Link to={`/coin/${id}`}>
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-lg font-bold">{name} ({symbol?.toUpperCase()})</h2>
        <p>Price: ₹{price?.toFixed(2) || '0.00'}</p>
        <p className={change1h >= 0 ? 'text-green-500' : 'text-red-500'}>
          1h: {change1h?.toFixed(2) || '0.00'}%
        </p>
        <p className={change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
          24h: {change24h?.toFixed(2) || '0.00'}%
        </p>
        <p className={change7d >= 0 ? 'text-green-500' : 'text-red-500'}>
          7d: {change7d?.toFixed(2) || '0.00'}%
        </p>
        <p>Market Cap: ₹{marketCap?.toLocaleString() || '0'}</p>
        <p>Volume (24h): ₹{volume?.toLocaleString() || '0'}</p>
      </div>
    </Link>
  );
};

export default CoinCard;
