import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

function FormControl({ expenseName, expenseAmount, mySubmitHandler, setExpenseNameHandler ,setExpenseAmountHandler }  ) {
  return (
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
            autoComplete="off"
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
            autoComplete="off"
            pattern="[0-9]*"
            required
            onChange={setExpenseAmountHandler}
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
  );
}

export default FormControl;
