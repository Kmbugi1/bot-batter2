import React, {useState, useEffect} from 'react';
//import TransactionItem from './Components/TransactionItem';
import NewTransactionForm from './TransactionForm';
import Transactions from './Transactions';
function App() {
     const [transactions, setTransactions]= useState([])
     const [search, setSearch] = useState("")

      useEffect(() => {
    fetch( "http://localhost:8001/transactions")
    .then((response) => response.json())
    .then((transaction) => setTransactions(transaction))
},[]);
  
function addNewTransactions(newForm) 
{
  setTransactions([...transactions, newForm])
}

  return(
    <div>
      <div className="header-container">
        <h2>The Royal Bank Of Flatiron</h2>
      </div>

      <div>
        
        <NewTransactionForm onTransactionSubmit={addNewTransactions} />
        <Transactions transactions={transactions}/>
      </div>
    </div> 
  )
  }



export default App;
