import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/Form';
import Header from './components/Header';
import "./App.css"

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <Header />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;