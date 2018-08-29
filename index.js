var exit = false;
while (exit == false) {
  var inputting = prompt('Which function: ');
  var num1 = null;
  var num2 = null;
  if (inputting == 'percent' || inputting == 'add' || inputting == 'minus' || inputting == 'divide' || inputting == 'multiply') {
      var num1 = parseInt(prompt('Enter first number: '));
        console.log(num1);
        console.log(inputting);
      var num2 = parseInt(prompt('Enter second number: '));
        console.log(num2);
      switch (inputting) {
        case 'add':
          alert(add(num1,num2));
          break;
        case 'divide':
          alert(divide(num1,num2));
          break;
        case 'minus':
          alert(minus(num1,num2));
          break;
          case 'percent':
            alert(percent(num1,num2) + '%');
            break;
        case 'multiply':
          alert(multiply(num1,num2));
          break;
        default:
          alert('ERROR');
      }
  }
  else if (inputting == 'help') {
    alert('You can use functions like add, minus, divide, percent, multiply or exit to exit out')
  }
  else if (inputting == 'exit') {
    console.log('BYE!')
    exit = true;
  }
  else {
    alert('ERROR404 - Type in "help" for more information.');
  }
}
function add(num1,num2) {
  console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
  return num1 + num2;
}
function minus(num1,num2) {
  console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
  return num1 - num2;
}
function divide(num1,num2) {
  console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
  return num1 / num2;
}
function multiply(num1,num2) {
  console.log(num1 + ' x ' + num2 + ' = ' + (num1 * num2));
  return num1 * num2;
}
function percent(num1,num2) {
  console.log(((num1/num2) * 100) + '% of ' + num2 + ' is ' + num1);
  return (num1/num2) * 100;

}
