import "./App.css";
import { useEffect, useState } from "react";
import { getLSIncome, getLSAllExpenses } from "./localstorage";
import ExpenseTable from "./component/expenseTable";
import ShowExpensenRemainingDetails from "./component/ShowExpensenRemainingDetails";
import FormControl from "./component/FormControl";
import IncomeControl from "./component/IncomeControl";

function App() {
  const [income, setIncome] = useState(getLSIncome);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setexpenseAmount] = useState(0);
  const [allExpenses, setAllExpenses] = useState(getLSAllExpenses);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalRemaining, settotalRemaining] = useState(0);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function setINcomeHandler(e) {
    setIncome(e.target.value);
    localStorage.setItem("lsIncome", e.target.value);
    settotalRemaining(e.target.value);
  }

  useEffect(() => {
    setexpenseAmount("");
    setExpenseName("");
    let arrayNums = allExpenses.map((item) => parseInt(item.expenseAmount));
    let totalExpenseLocal = arrayNums.reduce((x, y) => x + y, 0);
    setTotalExpense(totalExpenseLocal);
    if (income > 0) settotalRemaining(income - totalExpenseLocal);
  }, [allExpenses, income]);

  function mySubmitHandler(e) {
    let today = new Date();
    let dateField = today.getDate() + "-" + months[today.getMonth()];

    //Unique key for storing the data in rows
    let uniqueKey = Math.floor(
      window.performance.now() + window.performance.timeOrigin
    );

    let newExpenses = [
      ...allExpenses,
      { uniqueKey, dateField, expenseName, expenseAmount },
    ];
    
    //Sorting all the expenses by descending order i.e wrt latest item 
    newExpenses.sort((x, y) => y.uniqueKey - x.uniqueKey);

    localStorage.setItem("LSAllExpenses", JSON.stringify(newExpenses));
    setAllExpenses(newExpenses);

    e.preventDefault();
    e.target.reset();
  }

  function resetExpenses() {
    setAllExpenses([]);
    setExpenseName("");
    setexpenseAmount("");
    setIncome("");
    settotalRemaining(0);
    localStorage.setItem("lsIncome", "");
    localStorage.setItem("LSAllExpenses", []);
  }

  function setExpenseNameHandler(e) {
    setExpenseName(e.target.value);
  }

  function setExpenseAmountHandler(e) {
    setexpenseAmount(e.target.value);
  }

  function deleteButtonClickHandler(deletingUniqueKey) {
    let newl = allExpenses.filter(
      (item) => item.uniqueKey !== deletingUniqueKey
    );

    setAllExpenses(newl);
    localStorage.setItem("LSAllExpenses", JSON.stringify(newl));
  }

  return (
    <div className="App bg-light">
      <IncomeControl income={income} setINcomeHandler={setINcomeHandler} />
      <hr className="m-1 text-white" />
      <FormControl
        expenseAmount={expenseAmount}
        expenseName={expenseName}
        mySubmitHandler={mySubmitHandler}
        setExpenseNameHandler={setExpenseNameHandler}
        setExpenseAmountHandler={setExpenseAmountHandler}
      />
      <hr className="m-1 text-white" />
      <ShowExpensenRemainingDetails
        totalExpense={totalExpense}
        totalRemaining={totalRemaining}
      />
      <br />
      <ExpenseTable
        allExpenses={allExpenses}
        deleteButtonClickHandler={deleteButtonClickHandler}
      />

      <div>
        <button className="btn btn-danger m-1" onClick={resetExpenses}>
          Reset Expenses
        </button>
      </div>
    </div>
  );
}

export default App;
