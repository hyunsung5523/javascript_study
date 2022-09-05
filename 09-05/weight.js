/*
*적정 체중 = (본인 신장 -100) x 0.9
*
*신장 : 180cm
*체중 : 78kg
*적정 체중 :
* 결과: 적정 체중이 kg이며, 현재 적정 체중에서 kg
*/

var height = 180;
var weight = 78;
var total = (height - 100) * 0.9;
console.log('적정 체중이', total,'kg이며, 현재 적정 체중에서', weight - total, 'kg 초과했습니다.');
console.log(`적정 체중이 ${total}kg이며, 현재 체중에서 ${weight - total}kg 초과 했습니다.`);
