// interface

function foo(x) {
    y++;
    z = x * y;
}

function bar1(cx, cz) {
    var [oy, oz] = [y, z];

    foo(cx);
    // i don't like interfacing. I understand it but it just seems cheap to me.
    return [y, z];
}

// functional

function bar2(x, y) {
    var z;
    foo2(x);
    return [y, z];

    function foo2(x) {
        y++;
        z = x * y;
    }
}

var y = 5,
    z;

temp = bar1(20, 5);
console.log('bar1: ', temp);
z; // 120

temp2 = bar2(25, 6);
console.log('bar2: ', temp2);
z; // 175