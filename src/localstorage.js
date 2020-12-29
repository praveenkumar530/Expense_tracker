export function getLSIncome() {
  let income = localStorage.getItem("lsIncome");
  if (income) {
    return income;
  }
  return "";
}

export function getLSAllExpenses() {
  let LSAllExpenses = localStorage.getItem("LSAllExpenses");
  if (LSAllExpenses) {
    return JSON.parse(LSAllExpenses);
  }
  return [];
}
const logger = {
  getLSIncome,
  getLSAllExpenses,
};

export default logger;
