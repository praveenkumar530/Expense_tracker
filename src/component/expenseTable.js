import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExpenseTable({ allExpenses, deleteButtonClickHandler }) {
  return (
    <div className="mt-2">
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col" className="w-35">
              Date
            </th>
            <th scope="col" className="w-26">
              Name
            </th>
            <th scope="col" className="w-22">
              Cost
            </th>
            <th scope="col" className="pr-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((item, index) => (
            <tr key={item.uniqueKey}>
              <td>
                {item.dateField}
                <small>{item.strTime}</small>
              </td>
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
