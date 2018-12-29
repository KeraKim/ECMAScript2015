
// object 간에 상속을 시킬 수 있는데 __proto__ 를 이용하면 된다.

const parent = {
    name : 'parent',
    makeToy() {
        console.log(`${this.name} maked toy`)
    }
};

const child = {
    __proto__ : parent,                             // __proto__ 를 이용해 부모의 변수, 함수 값을 그대로 받음
    name : 'child'
};

parent.makeToy();                                   // parent maked toy
child.makeToy();                                    // child maked toy