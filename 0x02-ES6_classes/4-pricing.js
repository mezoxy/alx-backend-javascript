import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amt) {
    this._amount = amt;
  }

  get amount() {
    return this._amount;
  }

  set currency(cur) {
    this._currency = cur;
  }

  get currency() {
    return this._currency;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
