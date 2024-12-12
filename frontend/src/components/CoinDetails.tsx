import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCoinDetails, fetchCoinHistory } from '../services/api';
import Chart from './Chart';


interface CoinDetails {
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
}

const CoinDetails: React.FC = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const [details, setDetails] = useState<CoinDetails | null>(null); // Use the defined type
  const [history, setHistory] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const data = await fetchCoinDetails(coinId!);
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadHistory = async () => {
      try {
        const data = await fetchCoinHistory(coinId!);
        setLabels(data.prices.map(([timestamp]: [number]) => new Date(timestamp).toLocaleDateString()));
        setHistory(data.prices.map(([, price]: [number, number]) => price));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
    loadHistory();
  }, [coinId]);

  if (loading) return <p className="container mx-auto p-4">Loading...</p>;
  if (!details) return <p className="container mx-auto p-4 text-red-500">Failed to load details</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{details.name}</h1>
      <div className="mt-2">
        <p>Symbol: {details.symbol.toUpperCase()}</p>
        <p>Current Price: ${details.market_data?.current_price?.usd?.toFixed(2)}</p>
        <p>Market Cap: ${details.market_data?.market_cap?.usd?.toLocaleString()}</p>
      </div>
      <Chart labels={labels} data={history} />
    </div>
  );
};

export default CoinDetails;
