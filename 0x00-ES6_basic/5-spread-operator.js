/*export default function concatArrays(array1, array2, string) { 
  return array1.concat(array2).concat(string.split(''));
}*/
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
