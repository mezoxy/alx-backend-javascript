export default function getListStudentIds(arr) {
  return Array.isArray(arr) ? arr.map((i) => i.id) : [];
}
