const { logA, logB } = require(`./log`);
const { checkedEvenOrOdd } = require(`./function`);

console.log(logA);
console.log(logB);

checkedEvenOrOdd(3);

for(;;){
    console.log('for');
    process.exit();
}


