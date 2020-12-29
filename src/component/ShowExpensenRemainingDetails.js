import React from "react";

function ShowExpensenRemainingDetails({ totalExpense, totalRemaining }) {
  return (
    <div className="mb-1">
      <h2 className="float-lg-left m-1 form-control-lg ml-2  col-sm-6">
        Total Expense Amount : {totalExpense}
      </h2>
      <h2 className="float-lg-right m-1 form-control-lg ml-2 col-sm-5 ">
        Remaining Amount : {totalRemaining}
      </h2>
    </div>
  );
}

export default ShowExpensenRemainingDetails;
