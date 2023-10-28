const one = document.querySelector('.one');
one.style.width = '150px';
one.style.paddingBottom = '50px';

console.log(one.style);

one.classList.add('two', 'three');

one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    this.classList.toggle('three')
}

console.log(one.getAttribute('data'));

one.setAttribute('data-num', 6);

let out = document.querySelector('.out');
let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons*amount);
        out.innerHTML = gallons * amount;
    }
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('one');
a.onclick = function() {
    alert('Hello');
}

console.log(a);

document.querySelector('.test').appendChild(a);


const base = document.querySelector('.base');
let div = document.createElement('div');

div.textContent = 'append';
div.classList.add('append');

base.append(div);

// prepend

let div1 = document.createElement('div');

div1.textContent = 'prepend';
div1.classList.add('prepend');

base.prepend(div1);


// before

let div2 = document.createElement('div');

div2.textContent = 'before';
div2.classList.add('before');

base.before(div2);

// before

let div3 = document.createElement('div');

div3.textContent = 'after';
div3.classList.add('after');

base.after(div3);

// replaceWith

// let div4 = document.createElement('div');

// div4.textContent = 'replaceWith';
// div4.classList.add('replace-with');

// base.replaceWith(div4)


// remove

// div4.remove();