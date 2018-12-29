// Rest Parameter 는 (...) 연산자를 사용해 파라미터를 정의한 것이다.
// Rest Parameter 를 사용하면 갯수가 일정치 않은 특정 값들을 이용하기 편해진다.

const array = ['a', 'b', 'c', 'd'];                     //a, b, c, d 4개의 문자를 배열에 저장

const [a, b, ...c] = array;                             //배열에 있는 값을 Rest Parameter 를 이용해 다시 저장

console.log(a);                                         //a
console.log(b);                                         //b
console.log(c);                                         //['c', 'd']


const rest = (...rest) => console.log(rest);            //Rest Parameter 를 인자로 가지는 함수를 선언

rest('1',2,3,4,5);                                 //[ '1', 2, 3, 4, 5 ]