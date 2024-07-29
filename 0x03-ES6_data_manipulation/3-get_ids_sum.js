export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, num) => sum + num.id, 0);
}
