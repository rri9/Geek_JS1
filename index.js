const a = 15;   //1.
let s = "R";    //2.
s = s + a;      //3.
let b = 3;      //4.
b++;            //5.
b= b+b/b;
b+=true;
const li = [1,2,3,4,5,6,7,8];  //6.
li.splice(3,3);     //7.
li.push(10, 5e9);   //8.
let ob = {
    numbers: ""     //9.
};
ob.numbers += li.join(";");   //10.
ob.newNumbers = li.join(";") + ";" + li[4] + ";" + li[4];   //11.
