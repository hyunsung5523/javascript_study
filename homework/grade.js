/*
근국쌤이 시험의 봤습니다.
근국썜이 성적이 79점 나왔습니다.
여기서 성적을 측정하는 기준은 다음과 같습니다.

  100  점일 경우 A+ 입니다.
90 ~ 99점일 경우 A 입니다.
80 ~ 89점일 경우 B+ 입니다.
70 ~ 79점일 경우 B 입니다.
60 ~ 69점일 경우 C+ 입니다.
50 ~ 59점일 경우 C 입니다.
49점 이하면 F 입니다.

조건문을 만들어보세요.
 */
var score = 89;
if (score === 100) {
    console.log('A+');
} else if (score >= 90 && score <= 99) {
    console.log('A');
} else if (score >= 80 && score <= 89) {
    console.log('B+');
} else if (score >= 70 && score <= 79) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C+');
} else if (score >= 50 && score <= 59) {
    console.log('C');
} else {
    console.log('F');
}