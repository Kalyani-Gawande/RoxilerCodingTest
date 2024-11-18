import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
    const [stats, setStats] = useState({ totalSales: 0, totalSold: 0, totalNotSold: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const response = await axios.get(`/api/statistics?month=${month}`);
            setStats(response.data);
        };
        fetchStats();
    }, [month]);

    return (
        <div>
            <h2>Statistics for {month}</h2>
            <p>Total Sales: {stats.totalSales}</p>
            <p>Total Sold Items: {stats.totalSold}</p>
            <p>Total Not Sold Items: {stats.totalNotSold}</p>
        </div>
    );
};

export default Statistics;