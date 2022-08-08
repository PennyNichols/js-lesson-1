// console.time - start a timer

console.time('timer1');
var age = 12;
console.log(age);

// console.timeEnd - end a timer and print the time 
console.timeEnd('timer1');

console.error('This is an error');
console.warn('This is a warning');
console.info('This is an info message');
console.log('%cThis is my stylish message', 'color: red')
alert('This is a popup alert')

//prompt

var name = prompt('Enter your name: ');
console.log(name);