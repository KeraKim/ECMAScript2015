

// var 는 block-level scope 를 지원하지 않기에 varNumber 은 전역변수로 설정된다.
// 마찬가지로 block-level scope 를 지원하지 않기에 미리 10을 입력해 놓은 varNumber 에 20의 값이 덧입혀진 모습을 볼 수 있다.

console.log(`varNumber1 : `, varNumber);            //undefined

var varNumber = 10;

console.log(`varNumber2 : `, varNumber);            //10

{
    var varNumber = 20;
    console.log(`varNumber3 : `, varNumber);        //20
}

console.log(`varNumber4 : `, varNumber);            //20


// const 와 let 은  var 와는 다르게 block-level scope 이다.
// 블록 안에서 선언된 변수는 해당 블록 안에서만 사용이 가능하며 외부에서는 참조가 불가능하다.
// 그리고 const 와 let 의 차이는 const 는 변수에 값을 한번 할당하게 되면 다시 바꾸지 못하지만
// let 은 이와 다르게 변수를 다시 재할당 할 수있다.
// ※ const 는 직접 적으로 변수를 다시 재할당 할 수없지만 object 또는 array 에 담긴 값은 바꿀 수 있다.

//console.log(`letNumber1 : `, letNumber);            //실행시 에러가 떨어지게 된다.

let letNumber = 10;

console.log(`letNumber2 : `, letNumber);              //10

{
    let letNumber = 20;
    letNumber = 30;
    console.log(`letNumber3 : `, letNumber);          //30
}

console.log(`letNumber4 : `, letNumber);              //10


//console.log(`constNumber1 : `, constNumber);        //실행시 에러가 떨어지게 된다.

const constNumber = 10;

console.log(`constNumber2 : `, constNumber);          //10

{
    const constNumber = 20;
    //constNumber = 30;                               //실행시 에러가 떨어지게 된다.
    console.log(`constNumber3 : `, constNumber);      //20
}

console.log(`constNumber4 : `, constNumber);          //10


// var 는 이미 중복된 선언이 허용되지만 let 은 중복 선언이 허용되지 않는다. (const는 당연하게도 안된다.)


var varVar = 100;
var varVar = 200;

console.log(`varVar : `, varVar);

let letLet = 100;
//let letLet = 200;                                   //중복된 선언으로 인해 에러가 떨어진다,.

console.log(`letLet : `, letLet);




