// ECMAScript 2015에서 새로 추가된 문자열 표기 기법을 Template literal 이라고 하는데
// 가존의 ' (작은 따옴표), " (큰 따옴표) 가 아닌 ` (키보드 물결표에 있는 삐침 표시) 백틱(backtick) 을 사용한다.

const value1 = 100;
const value2 = '사과';

const string1 = '저는 ' + value1 + '개의 ' + value2 + '를 가지고 있습니다.';

console.log(`string1 : `, string1);

const string2 = `저는 ${value1}개의 ${value2}를 가지고 있습니다.`;

console.log(`string2 : `, string2);