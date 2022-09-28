let students = ["문지영", "신현성", "임성민", "류한서"];
students.push("강유림"); // 뒤에 추가 (push)
students.splice(2, 0, "고근국"); //students.splice(시작위치, 1, "고근국") 중간에 추가 및 삭제
students.unshift("임다영"); // 앞에 추가 (unshift)
students.unshift("고근국");

// students.pop(); //뒤부터 차례대로 삭제
// students.shift(); //앞부터 삭제

console.log(students);
// console.log(students[0]);
// console.log(students.length) 길이