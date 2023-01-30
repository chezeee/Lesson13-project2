export default class Bill {
  constructor() {
    this.amounts = [];
  }

  /** @param {string} amountStr */

  addAmount(amountStr) {
    this.amounts.push(+amountStr);
  }

  getCount() {
    return this.amounts.length;
  }

  getTotal() {
    return this.amounts.reduce((total, current) => total + current);
  }

  getAverage() {
    return this.getTotal() / this.getCount();
  }
}
