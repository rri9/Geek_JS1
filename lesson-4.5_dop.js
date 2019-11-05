function makeCounter() {
    let count = 0;
    
    function counter() {
        return count++;
    };

    counter.set = function(value) { //counter.set = value => count = value;
        count = value;
    };
    counter.decrease = function() { //counter.decrease = () => count--;
        count--;
    };
    
    return counter;
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());     // 0
console.log(counter1());     // 1
console.log(counter1());     // 2

console.log(counter2());    // 0
console.log(counter2());    // 1

console.log(counter1());     // 3

console.log(counter1.set(10));    // 
console.log(counter1());          // 10
console.log(counter1());          // 11
console.log(counter1.decrease());   //
console.log(counter1());          // 11
