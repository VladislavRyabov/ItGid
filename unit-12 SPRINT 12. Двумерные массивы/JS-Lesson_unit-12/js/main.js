let a = [4, 5, 6];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// console.log(b);

// for (let i = 0; i < b.length; i++) {
//     // console.log(b[i]);
//     let c = b[i];
//     // console.log(c);
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }

// for (let i = 0; i < b.length; i++) {
//     let c = b[i];
//     for (let k = c.length - 1; k >= 0; k--) {
//         console.log(c[k]);
//     }
// }

let wrap = document.querySelector('.wrap');
let out = '';

for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        out += b[i][k] + ' ';
    }
    out += '<br>';
}

wrap.innerHTML = out;


let wrap1 = document.querySelector('.wrap1');
let out1 = '';

for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        if (b[i][k] > 4) {
        out1 += b[i][k] + ' ';
        }
    }
    out1 += '<br>';
}

wrap1.innerHTML = out1;


let wrap2 = document.querySelector('.wrap2');
let btn = document.querySelector('.btn');

let d = [1,0,0,0,0,0];
wrap2.innerHTML = d;

let k = 0;
btn.onclick = () => {
    if (k + 1 <= 5) {
    d[k] = 0;
    d[k + 1] = 1;
    k++
    }
    wrap2.innerHTML = d;
}
