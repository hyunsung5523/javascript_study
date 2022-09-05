/*
근국썜의 하루 지출 내역은 교통비 3,000원, 식비 6,000원, 음료비 3,000원 입니다.
삼항 조건 연성자를 사용하여 하루적정 지출 비용인 1만원을
초과 했을 경우에는 "000원 초과"라고 출력하여, 아닐경우에는
"{돈 관리를 잘했어요~!"라고 출력하세요
*/
var max = 10000;
var transportation = 3000;
var food = 6000;
var drink = 3000;
var plus = transportation + food + drink;
console.log(plus > max ? plus - max + "원 초과": "돈 관리를 잘했어요~!");

/*
var max = 3000;
var transportation = 1000;
var food = 1000;
var drink = 1000;
var plus = transportation + food + drink;
*/
//console.log(plus >= max ? plus - max + "원 초과": "돈 관리를 잘했어요~!");