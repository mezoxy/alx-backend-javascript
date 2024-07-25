export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  set name(nm) {
    this._name = nm;
  }

  get name() {
    return this._name;
  }

  set code(c) {
    this._code = c;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
