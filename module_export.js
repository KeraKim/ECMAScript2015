// 외부에서 함수 또는 변수를 사용하기위해서는 먼저 export 시켜줘야 한다.

const color = 'white';

const colorTester = (color) => {
    console.log(`color is ${color}`)
};

module.exports = {
    color,
    colorTester
};