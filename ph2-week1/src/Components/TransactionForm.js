import React, { useState } from "react";

function NewTransactionForm({ onTransactionSubmit }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "0",
  });

  const handleChange = (event) => 
  {
    const key=event.target.name
    const value=event.target.value
    // console.log(key)
    // console.log(value)
    setNewTransaction({ ...newTransaction, [key]: value });
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    fetch("http://localhost:8001/transactions",
    {
        method: "POST",
        headers: 
        {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newTransaction)
    })
        .then(response => response.json())
        .then(addedTransaction => 
            {
                onTransactionSubmit(addedTransaction)
                setNewTransaction({
                    date: "",
                    description: "",
                    category: "",
                    amount: "0",
                  });
            })

    // const servers = 
    // {
    //     method: "POST",
    //     Headers: {"content-type": "application/json" },
        
    //     body: JSON.stringify(newTransaction)
    // }
    //   fetch(` http://localhost:8001/transactions`, servers)
    //   .then((response) => response.json())
    //   .then((newForm) => onTransactionSubmit(newForm))
    // onTransactionSubmit(newTransaction);
    // setNewTransaction({ date: "", description: "", category: "", amount: "0" });
  };

  return (
    <form onSubmit={handleSubmit} id="newItem">
      <div className="form-inputs">
        <label htmlFor="date">Date:</label>
        <input
          onChange={handleChange}
          name="date"
          type="date"
          id="date"
        />
        <input
          onChange={handleChange}
          name="description"
          type="text"
          placeholder="Description"
        />
        <input
          onChange={handleChange}
          name="category"
          type="text"
          placeholder="Category"
        />
        <input
          onChange={handleChange}
          name="amount"
          placeholder="Amount"
          type="number"
          step="0.01"
        />
      </div>
      <div>
        <button type="submit">Add Transaction</button>
      </div>
    </form>
  );
}

export default NewTransactionForm;
