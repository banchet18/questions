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

// polyfills reduce
Array.prototype.myReduce = function (cb) {
  var accumulator = initalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], [i], this) : this[i];
  }
  return accumulator;
};

onst nums2 = [1, 2, 3, 4];

const sum = nums2.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);