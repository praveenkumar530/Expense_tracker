import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

function IncomeControl({income, setINcomeHandler}) {
  return (
    <div>
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
    </div>
  );
}

export default IncomeControl;
