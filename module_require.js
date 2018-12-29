//외부에서 작성된 함수 또는 변수를 사용하기위해 require 해준다.

const { color, colorTester } = require('./module_export');

console.log(color);             //white
colorTester('green');     //color is green
