import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ month }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchChartData = async () => {
            const response = await axios.get(`/api/bar-chart?month=${month}`);
            const data = response.data;

            setChartData({
                labels: data.priceRanges,
                datasets: [
                    {
                        label: 'Number of Items',
                        data: data.itemCounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            });
        };
        fetchChartData();
    }, [month]);

    return (
        <div>
            <h2>Bar Chart for {month}</h2>
            <Bar
                data={chartData}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;