export default function cleanSet(set, start) {
  let str = '';
  set.forEach((i) => i.startsWith(start) && start.length !== 0 ? str += i + '-' : str += '');
  return str.length !== 0 ? str.substr(0, str.length -1) : str;
}
