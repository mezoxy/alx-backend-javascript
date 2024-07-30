export default function cleanSet(set, start) {
  let str = '';
  set.forEach((i) => {
    if (i !== undefined && i.startsWith(start) && start.length !== 0) {
      if (i.substr(start.length).length !== 0) {
        str += `${i.substr(start.length)}-`;
      }
    }
  });
  return str.length !== 0 ? str.slice(0, -1): str;
}
