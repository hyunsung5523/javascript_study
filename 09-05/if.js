total = 9000;
if (total > 10000) {
    console.log(`${total - 10000}원 초과`);
} else if (total === 10000) {
    console.log('정말 잘했습니다');
} else {
    console.log(`${10000 - total }원 더 쓰세요`);
}

