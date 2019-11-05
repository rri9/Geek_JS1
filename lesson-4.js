function foo(x) {
    let rezult = x;
    function f(b) {
        if (b) {
            rezult *= b;
            return f;
        } else return rezult;
    }
    return f;
}
console.log( foo(5)(2)() );         // 10
console.log(foo(5)());              //  5
console.log( foo(2)(1)(3)(4)() );   // 24

// Можем убрать пустые скобки в конце.
//Для этого надо переопределить функцию приведения к строке... :
function foo2(x) {
    let rezult = x;
    function f(b) {
        if (b) {
            rezult *= b;
            return f;
        } else return rezult;
    }
    f.toString = () => rezult;  // ... вот здесь
    return f;
}
console.log( foo2(5)(2) );         // 10
console.log( foo2(5) );            //  5
console.log( foo2(2)(1)(3)(4) );   // 24
