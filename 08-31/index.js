// var let 값을 선언한 이후에 변경 가능
var a = 5;
let b = 3;
const c = 3;
// const 값을 선언한 이후 변경 불가
    // console.log('a :', a);
    // console.log('b :', b);
    // console.log('c :', c);

var aPlusB = a + b;
console.log('a+b=',aPlusB);
console.log('a-b=', a-b);
console.log('a*b=', a*b);
console.log('a/b=', a/b);
console.log('a%b=', a%b)
// a = a + 4;
a += 4;
a -= 4;
a *= 4;
a /= 4;
console.log('a를 9로 만드는 방법', a)

var e = 3;
var result = e++;
console.log('e:', e);
console.log('result:', result);

var f = true
var g = false
console.log('f:', f);
console.log('g:', g);

var aa = 3;
var bb = 3;

console.log('aa < bb :', aa < bb);
console.log('aa <= bb :', aa <= bb);
console.log('aa > bb :', aa > bb);
console.log('aa >= bb :', aa >= bb);
console.log('aa == bb :', aa == bb);
console.log('aa != bb :', aa != bb);