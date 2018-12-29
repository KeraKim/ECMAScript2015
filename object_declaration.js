// Object 선언도 간편해 졌다.
// 기존에는 Object 안에 함수를 정의 할때 "function" 이라는 부분을 적어줘야 하였지만 이제는 생략이 가능하며
// 더욱 큰 변화는 변수값을 Object 의 Key 로 지정하려면 아래와 같이 Object 선언부 벆에서 하여야 하였지만
// 이제는 선언부 안에서 가능하게 되었다.

const a = `a`;
const oldObj = {
    oldFund : function() {
        console.log(`예전 함수`);
    }
};
oldObj[a + 1] = `예전 값 입니다.`


const b = `b`;
const newObj = {
    newFunc() {
        console.log(`새로운 함수`);
    },
    [b + 1] : `새로운 값 입니다.`
};

oldObj.oldFund();
newObj.newFunc();