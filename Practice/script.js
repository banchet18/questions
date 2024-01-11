let students = [
  { name: "piyuysh", rollNumber: 31, marks: 80 },
  { name: "jenny", rollNumber: 15, marks: 68 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "dilpreet", rollNumber: 7, marks: 55 },
];
console.log(
  students
    .map((student) => {
      if (student.marks < 60) {
        student.marks = student.marks + 20;
      }
      return student;
    })
    .filter((x) => {
      return x.marks > 60;
    })
    .reduce((acc, cur) => {
      return acc + cur.marks;
    }, 0)
);
