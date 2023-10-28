// for

// for (старт; работаем пока верно; счетчик) {

// }

// for (let i = 0; i < 6; i = i + 2) {
//     console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i < 6; i++) {
//     if (i == 4) break;
//     console.log(i);
// }

// let div = document.querySelectorAll('.one');
// console.log(div);
// div.style.background = 'red';

// for (let i = 0; i < div.length; i = i + 1) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }

// function two() {
//     console.log('work!!!');
// } 


// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
// }

// document.querySelector('.btn1').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// } 

let out = '';
for (let i = 0; i < 10; i++) {
    if (i == 6) continue;
    out += i + ' ';
    // if (i == 6) break;
}
document.querySelector('#out').innerHTML = out;