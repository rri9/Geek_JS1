function sum(x) {
    let sum = 0;
    sum += x;

    function f(b) {
        sum += b;
        return f;
    }
    f.toString = function() {
        return sum;
    };

    return f;
}

function foo(y) {
    let rez = y;
    function f(b) {
        if (b) {
            rez *= b;
            return f;
        } else return rez;
    }
    //f.toString = () => rez;
    return f;
}

console.log( sum(2)(3)(4) );
console.log( foo(2)(3)(4)() );
