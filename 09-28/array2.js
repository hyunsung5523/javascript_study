// let students = [
//     "문지영",
//     "신현성",
//     "임성민",
//     "류한서",
//     "임다영",
//     "강유림",
// ];

let students = [
    {
        name: "문지영",
        age: 19
    },
    {
        name: "신현성",
        age: 18
    },
    {
        name: "임성민",
        age: 18
    },
    {
        name: "류한서",
        age: 15
    },
    {
        name: "임다영",
        age: 19
    },
    {
        name: "강유림",
        age: 17
    },
];

let aGroup = []; // 18세 이상만
let bGroup = []; // 18세 미만

for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
        aGroup.push(students[i].name);
    } else {
        bGroup.push(students[i].name);
    }

    // console.log(i);
    // console.log(students[i])
}

console.log('aGroup 친구들', aGroup);
console.log('bGroup 친구들', bGroup);
