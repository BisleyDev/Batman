
// Работа с prompt
/* let age = prompt('What is your name?', );

alert('Hello ' + age + " !")*/
//--------------------------------------------
// работа с confirm
/* let isBoss = confirm("Ты здесь главный?");

if (isBoss === true) {
   alert('Welcome Boss')
} else {
   alert('go out')
}
alert(prompt('What do you do?',)) */
//----------------------------------------------
// result = (a + b < 4) ? 'Мало' : 'Много';
//----------------------------------------------
/* let login = prompt('Login', )

let message = (login == 'enployer') ? 'Hello':
   (login == 'boss') ? 'Good day!':
   (login == '') ? 'Not login':
   'Who is it?'; 

alert(message); */
//-----------------------------------------------
/* let login = prompt('Who is there?', );

if (login == 'Admin') {
	let password = prompt('Password:', );

   if (password == 'Boss') {
	  message = 'Welcome!!';
   } else if (password == '' || password == null) {
	  message = 'Cancel';
   } else {
		message = 'Incorrect password';
	}

} else if (login == '' || login == null) {
   message = 'Cancel';
} else  {
	message = 'I do not know you!';
};

alert(message); */
//-------------------------------------------------
/* ;
for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(i);
	};
}; */


/* let number = 0;
while (number < 100 && number != null) {
	number = prompt('Введите число больше 100:');
} */



/* let i = prompt('От какого числа выводить простые числа', );
let quantityNumber = prompt('До какого числа выводить простые числа', );

for (i; i < quantityNumber; i++) {
	if ((i >= 0 && i <= 3) || (i % 2 != 0) && (i % 3 != 0)) {
		console.log(i)
	}
} */
//---------------------------------------------------------------------

/* let brow = prompt('What do you have got browser?', );
if (brow == 'Edge') {
	alert( "You've got the Edge!" );
} else if (brow == 'Chrome' 
	|| brow == 'Firefox' 
	|| brow == 'Safari' 
	|| brow == 'Opera') {
	alert( 'Okay we support these browsers too' );
} else {
	alert( 'We hope that this page looks ok!' );
} */

/* const number = +prompt('Введите число между 2 и 3', '');

switch (number) {
	case 0:
		alert('Вы ввели число 0');
		break;
	case 1:
		alert('Вы ввели число 1');
		break;
	case 2:
	case 3:
		alert('Вы ввели число 2, а может и 3');
		break;
	default:
		alert('Нормально число ввести не можешь???');
}
	 */
/* 
	 function pow( x, n ) {
		 return( n > 0 ? x ** n : 'Введите число больше 0' )
	 }

	 let number = prompt('Number:', )
	 let degree = prompt('Degree:', )

	 alert(pow(number, degree)); */