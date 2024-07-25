export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name
    this.length = length;
    this.students = students;
  }

  set name(nom) {
    if (typeof nom !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nom;
  }

  get name() {
    return this._name;
  }
   
  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  get length() {
    return this._lenght;
  }

  set students(arr) {
    if (!(arr instanceof Array)) {
      throw new TypeError('Students must be an array of string');
    }
    if (!arr.every((std) => typeof std === 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = arr;
  }

  get students() {
    return this._students;
  }
}
