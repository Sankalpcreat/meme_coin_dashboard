import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartProps {
  labels?: string[];
  data?: number[];
}

const Chart: React.FC<ChartProps> = ({ labels = [], data = [] }) => {
  // Reverse the arrays to show 7d first, then 24h, then 1h
  const reversedLabels = ['7d', '24h', '1h'];
  const reversedData = data.slice().reverse();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y.toFixed(2)}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
          callback: (value: number) => `${value.toFixed(2)}%`
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        }
      }
    }
  };

  const chartData = {
    labels: reversedLabels,
    datasets: [
      {
        label: 'Price Change %',
        data: reversedData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        fill: true
      },
    ],
  };

  return (
    <div style={{ height: '100px', width: '200px' }}>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default Chart;
