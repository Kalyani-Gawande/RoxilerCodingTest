import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable';
import Statistics from './Statistics';
import BarChart from './BarChart';

const App = () => {
    const [month, setMonth] = useState('March');

    return (
        <div>
            <h1>Transactions Dashboard</h1>
            <Statistics month={month} />
            <TransactionsTable setMonth={setMonth} />
            <BarChart month={month} />
        </div>
    );
};

export default App;