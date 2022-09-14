/*
    ID = easy1004
    PW = 12345678

    user_ID "easy1004"
    user_PW "1234"

    중첩 IF 문을 사용하여
    아이디가 일치하지 않으면 console.log("아이디가 일치하지 않습니다.")
    아이디는 일치하는데 비밀번호가 일치하지 않는다면
    console.log("비밀번호가 일치하지 않습니다.")
    아이디, 비밀번호 모두 일치한다면
    console.log("모두 일치 합니다.")
 */

var id = 'easy1004';
var pw = '12345678';

var user_id = 'easy1004';
var user_pw = '12345678';

if (id == user_id) {
    if (pw === user_pw) {
        console.log("모두 일치합니다.");
    } else {
        console.log("비밀번호가 일치 하지 않습니다.");
    }
} else {
    console.log("아이디가 일치하지 않습니다.");
}



