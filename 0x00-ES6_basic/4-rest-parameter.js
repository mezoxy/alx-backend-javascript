export default function returnHowManyArguments(...args) {
  let sum = 0;

  for (let arg of args) {
    sum += Number(arg); }
  return sum
}
