let k = 0;
while (k < 5) {
    // k++;
    console.log('k: ' + k);
    k++;
}

let sum = 0;
let p = 0;

while (p <= 10) {
    sum = sum + p;
    p++
}
console.log('sum = ' + sum);


let out = document.querySelector('.out');

let outStr = '';
let flag = 3;
let j = 0;
while (j < 4) {
    p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '&nbsp';
        }
        else {
            outStr += '*';
        }
        p1++
    }
    flag--;
    outStr += '<br>';
    j++
}
out.innerHTML = outStr;