let a = 'hello, hi, mahai';
console.log(a.split(','));

let b = [8,9,7];
console.log(b.join());

b.forEach((elem, index) => {
    console.log(index);
    console.log(elem * 2);
    console.log('--');
});