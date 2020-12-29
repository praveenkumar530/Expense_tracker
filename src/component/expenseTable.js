import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExpenseTable({ allExpenses, deleteButtonClickHandler }) {
  return (
    <div className="mt-2">
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col" className="col-sm-2">
              Date
            </th>
            <th scope="col" className="col-sm-4">
              Name
            </th>
            <th scope="col" className="col-sm-4">
              Cost
            </th>
            <th scope="col" className="col-sm-2"></th>
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((item, index) => (
            <tr key={item.uniqueKey}>
              <td>{item.dateField}</td>
              <td>{item.expenseName}</td>
              <td>{parseInt(item.expenseAmount)}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteButtonClickHandler(item.uniqueKey)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
