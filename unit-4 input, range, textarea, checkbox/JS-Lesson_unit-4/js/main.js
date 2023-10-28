document.querySelector('.btn1').onclick = () => {
    console.log(document.querySelector('#one').value);
    document.querySelector('button').style.backgroundColor = 
    document.querySelector('#one').value
}

document.querySelector('#one1').oninput = () => {
    console.log(document.querySelector('#one1').value);
    document.querySelector('span').innerHTML = document.querySelector('#one1').value
}

document.querySelector('#btn2').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myChekBox = document.querySelector('#i2');
    if (myChekBox.checked) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

document.querySelector('#btn3').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'Vladislav';
    let form = document.querySelector('form');
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}