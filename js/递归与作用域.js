var i = 0;
let j = 1;
let k = 2;

var f1 = function f1(a1) {
    j++;
    if (i > 10 && j > 10) return
    console.log('a1', a1, this);
    f2(a1);
}
let f2 = function f2(a2) {
    ++k
    console.log('a2', a2)
    f4('111');
    f3(a2);
}

const f3 = function (a3) {
    console.log('a3', a3)
    f1(1111);
}

const f4 = function f4ff(a4) {
    i++;
    console.log('a4', a4);
}