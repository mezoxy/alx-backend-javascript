export default function updateStudentGrandeByCity(lis, str, gardes) {
  const arr1 = lis.filter((i) => i.location === str).map((obj) => obj.grade = grades.filter((gr) => gr.studentId === obj.id);
  const arr2 = lis.map((obj) => obj.grade = obj.grade === undefined ? 'N/A' : obj.grade.grade);
  return lis;
}
