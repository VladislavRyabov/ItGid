let inputIn = document.querySelector('.input-in');  // input
let button = document.querySelector('button'); // button
let out = document.querySelector('.out');

button.onclick = function () {
    console.log('Работает');
    let b = +inputIn.value;
    console.log(b + 10);
    out.innerHTML = b;
    inputIn.value = '';
}