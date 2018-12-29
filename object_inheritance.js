
// object 간에 상속을 시킬 수 있는데 __proto__ 를 이용하면 된다.

const parent = {
    name : 'parent',
    makeToy() {
        console.log(`${this.name} maked toy`)
    }
};

const child = {
    __proto__ : parent,
    name : 'child'
};

parent.makeToy();
child.makeToy();