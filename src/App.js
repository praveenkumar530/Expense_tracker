import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { getLSIncome, getLSAllExpenses } from "./localstorage";

function App() {
  const [income, setIncome] = useState(getLSIncome);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setexpenseAmount] = useState();
  const [allExpenses, setAllExpenses] = useState(getLSAllExpenses);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalRemaining, settotalRemaining] = useState(0);

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
    let newExpenses = [...allExpenses, { expenseName, expenseAmount }];
    localStorage.setItem("LSAllExpenses", JSON.stringify(newExpenses));
    setAllExpenses(newExpenses);
    e.preventDefault();
    e.target.reset();
  }

  function resetExpenses() {
    setAllExpenses([]);
    setExpenseName("");
    setexpenseAmount("");
    localStorage.setItem("LSAllExpenses", []);
  }

  function setExpenseNameHandler(e) {
    setExpenseName(e.target.value);
  }

  return (
    <div className="App bg-light">
      <h1 className="text-info"> EXPENSE TRACKER</h1>
      <hr />
      <b className="h4">
        Income(
        <FontAwesomeIcon icon={faRupeeSign} size="xs" />
        ):{" "}
      </b>
      <input
        type="text"
        pattern="[0-9]*"
        value={income}
        className=" col-sm-6 form-control-sm border border-success "
        required
        onChange={setINcomeHandler}
      ></input>

      <hr className="m-1 text-white" />

      {/* expencse inputs===================================================================================================  */}

      <form onSubmit={mySubmitHandler}>
        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-5 col-form-label col-form-label-sm  "
          >
            Expense Name:
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control form-control-sm border border-success "
              id="colFormLabelSm"
              placeholder="Expense name"
              value={expenseName}
              required
              onChange={setExpenseNameHandler}
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="colFormLabel"
            className="col-sm-5 col-form-label col-form-label-sm "
          >
            Expense Amount (<FontAwesomeIcon icon={faRupeeSign} />) :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control form-control-sm border border-success"
              id="colFormLabel"
              value={expenseAmount}
              pattern="[0-9]*"
              required
              onChange={(e) => setexpenseAmount(e.target.value)}
              placeholder="Expense Amount"
            />
          </div>
        </div>
        <div className="form-group row">
          <input
            type="submit"
            className="btn btn-success col-6 mx-auto col-sm-2"
          />
        </div>
      </form>
      <hr className="m-1 text-white" />

      <div className="mb-1">
        <h2 className="float-lg-left m-1 form-control-lg ml-2">
          Total Expense Amount : {totalExpense}
        </h2>
        <h2 className="float-lg-right m-1 form-control-lg ml-2 mb-xs-1">
          Remaining Amount : {totalRemaining}
        </h2>
      </div>
      <br />

      <div className="mt-2">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Sl No</th>
              <th scope="col">Expense Name</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {allExpenses.map((item, index) => (
              <tr key={index + 1}>
                <th scope="col">{index + 1}</th>
                <td>{item.expenseName}</td>
                <td>{parseInt(item.expenseAmount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="btn btn-danger m-1" onClick={resetExpenses}>
          Reset Expenses
        </button>{" "}
      </div>
    </div>
  );
}

export default App;
