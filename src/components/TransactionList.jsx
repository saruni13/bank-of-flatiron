// TransactionList.js
import React, { useState } from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        id='search-bar'
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleChange}
      />
      <table id='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
