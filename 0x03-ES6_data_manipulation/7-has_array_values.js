export default function hasValuesFromArray(set, arr) {
  return !arr.map((i) => set.has(i)).includes(false);
}
