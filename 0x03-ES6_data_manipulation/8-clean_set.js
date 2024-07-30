export default function cleanSet(set, start) {
  const lis = []
  let str = ''
  set.forEach((i) => i.starsWith(start) && start.length !== 0 ? lis.push(i.substr(start.length)) : lis.push(''));
  lis.forEach((i) => i.length !== 0 ? str += i + '-' : str += '');
  return str.length !== 0 ? str.substr(0, str.length -1) : str;
}
