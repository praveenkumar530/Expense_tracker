
export function getLSIncome() {
    let income = localStorage.getItem("lsIncome");
    if (income) {
      return income;
    }
  }
  
  export function getLSAllExpenses() {
    let LSAllExpenses = localStorage.getItem("LSAllExpenses");
    if (LSAllExpenses) {
      return JSON.parse(LSAllExpenses);
    }
    return [];
  }

  export default { getLSIncome, getLSAllExpenses}