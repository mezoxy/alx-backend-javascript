export default function updateStudentGrandeByCity(lis, str, gardes) {
  lis.map((o) => o.grade = grades.filter((i) => i.studentId === o.id).length === 0 ? 'N/A' : grades.filter(i => i.studentId === o.id)[0].grade);
  return lis.filter((o) => o.location === str);
}
