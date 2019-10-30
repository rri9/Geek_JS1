const tel = "79602203738";

let success = false;
let error = "Some error"

if (tel.length === 11) {
    switch (tel[0]) {
        case "8":
            success = true;
            break;
        case "7":
            error = "First 7!";
            break;
    }
}
const s = (success ? "Ok" : "Wrong " + error);
console.log(s);


// console.log(success);
// console.log(error);

