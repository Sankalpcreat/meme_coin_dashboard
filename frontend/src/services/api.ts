import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchMemeCoins = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                category: 'meme-token',
                order: 'market_cap_desc',
                per_page: 50,
                page: 1,
                sparkline: false,
                price_change_percentage: '1h,24h,7d'
            },
        });

        // Map the response to ensure we have all percentage changes
        const mappedData = response.data.map(coin => ({
            ...coin,
            price_change_percentage_1h: coin.price_change_percentage_1h_in_currency || 0,
            price_change_percentage_24h: coin.price_change_percentage_24h || 0,
            price_change_percentage_7d: coin.price_change_percentage_7d_in_currency || 0
        }));

        return mappedData;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching meme coins:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return [];
    }
};

export const fetchCoinDetails = async (coinId: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/${coinId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coin details:', error);
        throw error;
    }
};

export const fetchCoinHistory = async (coinId: string) => {
    try {
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
        
        const response = await axios.get(`${BASE_URL}/coins/${coinId}/market_chart`, {
            params: {
                vs_currency: 'usd',
                days: '30',
                interval: 'daily'
            }
        });

        if (!response.data || !response.data.prices) {
            throw new Error('Invalid data received from API');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching coin history:', error);
        return null;
    }
};
