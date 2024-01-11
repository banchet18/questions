// map ,filter ,reduce

//1.What is map?
//the map method is used fpr creating a new array from existing one by applying a function to each one of the elements of the first array.

const nums = [1, 2, 3, 4];

const mutiplyThree = nums.map((num, i, arr) => {
  return num * 3; // [3,6,9,12]
});

console.log(mutiplyThree);

//2. what is filter?
//takes each element in an array and it applies a conditional statement against it if the condition returns true the element gets pushed into the output array if the condition return false the element does not get pushed into the output array in short filter return only those element from the array which fulfills the provided criteria.

const nums1 = [1, 2, 3, 4];
const moreThanTwo = nums1.filter((num) => {
  return num > 2;
});
console.log(moreThanTwo); // [3,4]

//3. what is reduce method
//reduces an array of values down to just one value just like map and filter also executes the callback for each element of array.

const nums2 = [1, 2, 3, 4];

const sum = nums2.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum); //10

//4. polyfills for map()
// Array.map((num, i, arr) => {});

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums3 = [1, 2, 3, 4];

const mutiplyThree = nums.myMap((num, i, arr) => {
  return num * 3; // [3,6,9,12]
});

console.log(mutiplyThree);

//5.polyfills for filter()
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(cb(this[i]));
  }
  return temp;
};

const nums1 = [1, 2, 3, 4];
const moreThanTwo = nums1.myFilter((num) => {
  return num > 2;
});
console.log(moreThanTwo);

//6. polyfills reduce
Array.prototype.myReduce = function (cb) {
  var accumulator = initalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], [i], this) : this[i];
  }
  return accumulator;
};

const nums2 = [1, 2, 3, 4];

const sum = nums2.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

// 7. map vs reduce
const arr = [2, 5, 3, 4, 7];
const mapResult = arr.map((ar) => {
  return ar + 2; //[4,7,5,7,9]
});
// we can chain the map method

const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3; // [5,8,6,7,10]
});

console.log(mapResult, forEachResult, arr);

//8. map,filter and reduce - o/p based questions
//question1 - return only name of student in capital
let student = [
  { name: "piyuysh", rollNumber: 31, marks: 80 },
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

//9. map,filter and reduce - o/p based questions
//question2 - return only details of those who scored more than 60
let student = [
  { name: "piyuysh", rollNumber: 31, marks: 80 },
  { name: "jenny", rollNumber: 15, marks: 68 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "dilpreet", rollNumber: 7, marks: 55 },
];

console.log(
  student.filter((x) => {
    return x.marks > 60;
  })
);

//10. map,filter and reduce - o/p based questions
//question2 - More than 60 marks and rollNumber greater than 15
let student = [
  { name: "piyuysh", rollNumber: 31, marks: 80 },
  { name: "jenny", rollNumber: 15, marks: 68 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "dilpreet", rollNumber: 7, marks: 55 },
];

console.log(
  student.filter((x) => {
    return x.marks > 60;
  })
);
