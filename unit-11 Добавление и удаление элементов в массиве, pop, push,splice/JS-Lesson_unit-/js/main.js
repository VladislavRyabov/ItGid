let out = document.querySelector('.out');

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

 console.log(a.length);

//  Добавить єлемент '  push  '
 console.log(a.push(10, 11, 44 ,55, 66));
 console.log(a);
 out.innerHTML = a.length;

 b.push('j', 'e');
 console.log(b);

//  Удалить последний єлемент  массива '  pop  '
 console.log(b.pop());
 console.log(b.pop());

 console.log(b);

//  Удалить єлемент внутри массива js  '  splice  '
delete a[3]; // не желательно
console.log(a);


a.splice(3, 3, 'hi');
console.log(a);


// shift     unshift 

