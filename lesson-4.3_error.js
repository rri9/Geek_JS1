const li = ["bbb", "cccc", "aa", "aaaa"];
//li.sort((x, y) => { if (x > y) return 1; else return -1; }); //работает
li.sort((x, y) => {
    // console.log(x[0] - y[0]);
    console.log(Number(x[0]));
    return (y - x);
});
console.log(li);


