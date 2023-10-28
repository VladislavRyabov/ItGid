let out = document.querySelector('.out');

// for (let i = 0; i < 10; i++) {
//     // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>'; Конкатенация js
//     out.innerHTML += `3*${i}=${i * 3}<br>`  // Интерполяция js ES6
// }


for (let i = 2; i < 10; i++) {
    // out.innerHTML += `3*${i}=${i * 3}<br>`
    for (let k = 1; k <= 10; k++) {
        out.innerHTML += `${i}*${k}=${i * k}<br>`
    }
    out.innerHTML += '<hr>';
}
