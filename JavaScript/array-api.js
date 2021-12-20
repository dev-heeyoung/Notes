// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // default delimiter: ','
  const result1 = fruits.join();
  console.log(result1); // apple,banana,orange
  const result2 = fruits.join('|'); // 
  console.log(result2); // apple|banana|orange
}
  
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result); // [ '🍎', ' 🥝', ' 🍌', ' 🍒' ]
}
  
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [ 5, 4, 3, 2, 1 ]
  console.log(array); // [ 5, 4, 3, 2, 1 ]
}
  
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(result); // [ 3, 4, 5 ]
  // cannot use splice because slice change the original array itself
}
  
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
  
// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
    // Student { name: 'C', age: 30, enrolled: true, score: 90 }
}
  
// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    // Student { name: 'A', age: 29, enrolled: true, score: 45 },
    // Student { name: 'C', age: 30, enrolled: true, score: 90 },
    // Student { name: 'E', age: 18, enrolled: true, score: 88 }
}
  
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
    // [ 45, 80, 90, 66, 88 ]
}
  
// Q8. check if there is a student with the score lower than 50
{
    const result1 = students.some((student) => student.score < 50);
    console.log(result1); // true

    // bonus question
    // check if all student are with the score lower than 50
    const result2 = students.every((student) => student.score < 50);
    console.log(result2); // false
}
  
// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length); // 73.8
}
  
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result1 = students.map((student) => student.score).join();
    console.log(result1); // 45,80,90,66,88

    // bonus question
    // make a string containing the scores which are greater than 50
    const result2 = students.map((student) => student.score)
    .filter((score)=>score >= 50)
    .join();
    console.log(result2); // 80,90,66,88
}
    

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student => student.score))
    .sort((a, b) => a - b)
    .join();
    console.log(result); // 45,66,80,88,90
}