// 화살표 함수는 기존에 함수를 선언 할 떄 사용하던 function 을 간략하게 => 표시로 줄여 사용할 수 있다.
// 하지만 function 을 대체 할 수있는 것은 아니다.

const func1 = function(x, y) {                  //기존에 사용하던 함수 선언 방법
    return x + y;
};

const func2 = (x, y) => {                       //화살표 함수를 이용해 선언
    return x + y;
};

const func3 = (x, y) => x + y;                  //함수 내용이 한줄이라면 {} 를 생략 가능하고 return 된다.

const func4 = x => {                            //매개변수가 한개인 경우 () 생략 가능하다.
    return x * x;
};

// 위 에서 언급했지만 function 을 화살표 함수가 대체 할 수있는 것은 아니다. 이유인 즉 this 키워드 때문이다.
// this 에 대한 설명을 자세하게 하자면 길어지기에 짧게만 설면하자면
// 일반적으로 function 을 호출 하게되면 호출하는 해당 개체의 scope 를 가지게 되는데 화살표 함수를 사용하게 되면 해당 개체의 scope 를 가지지 않는다.
// 말로하면 설명이 잘 안되니 아래쪽 코드를 살펴보자.


function normalFunctionObject() {
    console.log(`normal function object : `, this.number);                              //인자로 받은 10이 나오게 된다.
    return {
        number: 20,
        func: function() {
            console.log(`normal function object func : `, this.number);                 //Object 안에있는 20의 값이 나오개된다.
        },
    };
}

normalFunctionObject.call({number : 10}).func();


function arrowFuctionObject() {
    console.log(`arrow function object`, this.number);                                  //인자로 받은 10이 나온다.
    return {
        number: 20,
        func: () => console.log(`arrow function object func : `, this.number),          //화살표 함수로 인해 this scope 에 변화가 없어 10이 나오게 된다.
    };
}

arrowFuctionObject.call({number : 10}).func();
