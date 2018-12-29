
// 비 구조화 할당은 딱히 설명보다는 코드를 보는것이 이해하기가 더 도움이 될 것이다.

const array1 = ['a', 'b', 'c'];              //먼저 배열 비구조화 할당에 대해 설명하기 위해 기존에 변수에 선언된 값들을 변수에 할당하여 로그에 찍어보는 코드이다.

const a = array1[0];
const b = array1[1];
const c = array1[2];

console.log(a, b, c);



const array2 = ['d', 'e', 'f'];

const [d, e, f] = array2;                   //비구조화 할당을 통해 배열의 값을 변수에 담는 내용이다

console.log(d, e, f);





const object1 = {                           //객체 비구조화 할당에 비교를 위해 기존에 작성되던 객체의 값을 변수에 할당하는 코드이다.
    value1 : 'obj1',
    value2 : 'test2'
};

const value1 = object1.value1;
const value2 = object1.value2;

console.log(value1, value2);


const object2 = {
    value3 : 'obj3',
    value4 : 'test4'
};

const {value3, value4} = object2;           //비구조화 할당을 통해 배열의 값을 변수에 담는 내용이다

console.log(value3, value4);