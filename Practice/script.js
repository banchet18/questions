let student = [
  { name: "piyuysh", rollNumber: 31, marks: 8 },
  { name: "jenny", rollNumber: 15, marks: 68 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "dilpreet", rollNumber: 7, marks: 55 },
];

// ans -1
let element = [];
for (let i = 0; i < student.length; i++) {
  element.push(student[i].name.toUpperCase());
}
console.log(element);
//ans - 2
console.log(
  student.map((x) => {
    return x.name;
  })
);
