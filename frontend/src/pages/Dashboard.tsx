import React, { useEffect, useState } from 'react';
import { fetchMemeCoins } from '../services/api';
import './Dashboard.css';
import Chart from '../components/Chart';

const Dashboard: React.FC = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getCoins = async () => {
            const data = await fetchMemeCoins();
            console.log('Fetched coins data:', data);
            setCoins(data);
        };
        getCoins();
    }, []);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Meme Coins</h1>
            <table className="coins-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price (USD)</th>
                        <th>1h Change</th>
                        <th>24h Change</th>
                        <th>7d Change</th>
                        <th>Market Cap (USD)</th>
                        <th>Volume (24h, USD)</th>
                        <th>Price History</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr key={coin.id}>
                            <td>{coin.name} ({coin.symbol.toUpperCase()})</td>
                            <td>
                                {coin.current_price != null && coin.current_price > 0 
                                    ? `$${coin.current_price.toFixed(2)}` 
                                    : 'Price not available'}
                            </td>
                            <td>
                                {coin.price_change_percentage_1h != null 
                                    ? `${coin.price_change_percentage_1h.toFixed(2)}%` 
                                    : 'N/A'}
                            </td>
                            <td>
                                {coin.price_change_percentage_24h != null 
                                    ? `${coin.price_change_percentage_24h.toFixed(2)}%` 
                                    : 'N/A'}
                            </td>
                            <td>
                                {coin.price_change_percentage_7d != null 
                                    ? `${coin.price_change_percentage_7d.toFixed(2)}%` 
                                    : 'N/A'}
                            </td>
                            <td>
                                {coin.market_cap != null && coin.market_cap > 0 
                                    ? `$${coin.market_cap.toLocaleString()}` 
                                    : 'Market cap not available'}
                            </td>
                            <td>
                                {coin.total_volume != null && coin.total_volume > 0 
                                    ? `$${coin.total_volume.toLocaleString()}` 
                                    : 'Volume not available'}
                            </td>
                            <td>
                                <Chart 
                                    labels={['7d', '24h', '1h']} 
                                    data={[
                                        coin.price_change_percentage_7d || 0, 
                                        coin.price_change_percentage_24h || 0, 
                                        coin.price_change_percentage_1h || 0
                                    ]} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
