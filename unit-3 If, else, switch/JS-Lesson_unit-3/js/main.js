// let a = 6;

// if ( a > 9 ) {
//     console.log('Yes');
// } else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num <= 60) {
        console.log('Добро пожаловать');
    }
    else if (num > 60) {
        console.log('Ты точьно сюда');
    }
    else {
        console.log('Ты не пройдеш');
    }

    switch (num) {
        case 15:
            console.log('Еще год потерпи');
            break;
        case 16:
            console.log('Ура можно!!!!!');
            break;
        default:
            console.log('oooook!!!');
    }
}

let b = 5;
