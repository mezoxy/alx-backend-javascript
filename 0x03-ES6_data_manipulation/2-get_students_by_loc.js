export default function getStudentsByLocation(arr, loca) {
  return arr.filter((i) => i.location === loca);
}
