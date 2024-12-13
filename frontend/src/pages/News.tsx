import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemeCoinNews: React.FC = () => {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const API_TOKEN = '0df6e1ac13da0e88777e00ef6a0e987c2a5605b9'; // Your CryptoPanic API token

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://cryptopanic.com/api/free/v1/posts/', {
                    params: {
                        auth_token: API_TOKEN,
                        public: true,
                        currencies: 'DOGE,SHIB,PEPE',
                        regions: 'en',
                    },
                });
                console.log('API Response:', response.data);
                if (response.data && response.data.results) {
                    setNews(response.data.results);
                } else {
                    setError('No news articles found.');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('Failed to fetch news articles. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p className="text-center text-lg">Loading news...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Meme Coin News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                                <p className="text-gray-600">{new Date(item.published_at).toLocaleString()}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemeCoinNews;
