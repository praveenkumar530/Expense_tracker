import "./App.css";
import { Children, useEffect, useState } from "react";

function getLSIncome() {
  let income = localStorage.getItem("lsIncome");
  if (income) {
    return income;
  }
}

function getLSAllExpenses() {
  let LSAllExpenses = localStorage.getItem("LSAllExpenses");
  if (LSAllExpenses) {
    return JSON.parse(LSAllExpenses);
  }
  return [];
}

function App() {
  const [income, setIncome] = useState(getLSIncome);
  const [expenseName, setExpenseName] = useState("");
  const [expenceAmout, setExpenseAmout] = useState();
  const [allExpenses, setAllExpenses] = useState(getLSAllExpenses);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalRemaining, settotalRemaining] = useState(0);

  function setINcomeHandler(e) {
    setIncome(e.target.value);
    localStorage.setItem("lsIncome", e.target.value);
    settotalRemaining(e.target.value);
  }

  useEffect(() => {
    setExpenseAmout();
    setExpenseName("");
    let arrayNums = allExpenses.map((item) => parseInt(item.expenceAmout));
    let totalExpenseLocal = arrayNums.reduce((x, y) => x + y, 0);
    setTotalExpense(totalExpenseLocal);
    if (income > 0) settotalRemaining(income - totalExpenseLocal);
  }, [allExpenses]);

  function mySubmitHandler(e) {
    let newExpenses = [...allExpenses, { expenseName, expenceAmout }];
    setAllExpenses(newExpenses);

    localStorage.setItem("LSAllExpenses", JSON.stringify(newExpenses));

    e.preventDefault();
    e.target.reset();
  }
  function resetExpenses() {
    setAllExpenses([]);
    localStorage.setItem("LSAllExpenses", []);
  }

  return (
    <div className="App">
      <h1 className="text-info"> EXPENSE TRACKER</h1>
      <hr />
      <input
        type="text"
        value={income}
        className="form-control-lg"
        required
        onChange={setINcomeHandler}
      ></input>
      <span> Income:{income}</span>
      <hr className="m-1 text-white" />

      {/* expencse inputs===================================================================================================  */}
      <form onSubmit={mySubmitHandler}>
        <span>Expense Name: </span>
        <input
          type="text"
          value={expenseName}
          className="form-control-lg"
          required
          onChange={(e) => setExpenseName(e.target.value)}
        ></input>
        {"  "}
        <span>Expense Amount: </span>
        <input
          type="text"
          value={expenceAmout}
          className="form-control-lg"
          required
          onChange={(e) => setExpenseAmout(e.target.value)}
        ></input>
        <input type="submit" className="btn btn-success p-2 m-2" />
      </form>
      <hr className="m-1 text-white" />
      <div className="mb-5">
        <h2 className="float-left m-1">
          {" "}
          Total Expense Amount : {totalExpense}
        </h2>
        <h2 className="float-right m-1">
          {" "}
          Remaining Amount : {totalRemaining}
        </h2>
      </div>
      <hr className="m-1 text-white" />
      <ul className="list-group  list-group-flush">
        {allExpenses.map((item) => (
          <li className="list-group-item">
            <div className="row">
              <div className="col">{item.expenseName}</div>
              <div className="col">{item.expenceAmout}</div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button className="btn btn-danger m-1" onClick={resetExpenses}>
          Reset Expenses
        </button>{" "}
      </div>
    </div>
  );
}

export default App;
