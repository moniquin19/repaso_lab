/*
Calcular el sueldo semanal de un trabajador con base en las horas que trabaja.
Ejemplo: Carol gana 10000 pesos por hora y trabaja 20h a las semana.
200000 resultado
*/
 // OPCION 1
// function SalaryWeek(hours, payment){
// 	var salary = hours * payment;
// 	return salary
// }

// OPCION 2 DE ESTA MANERA AHORRAS CODIGO
function SalaryWeek(hours, payment){
	return hours * payment;
}

// Calcular la cantidad de digitos de un número, por ejemplo: 1986, deberá retornar un 4

fuction numberOfDigits(number){
	var counter = 0;
	var digits = number.toString();//"1986"
	for(var i = 0; i<= digits.length, i++){
		counter++;
	}
	return counter;
}

//si una palabra es palindrome, se usa un solo parametro es porq es solo una palabra la q vamos a ver si es palindrome

function palindrome(word) {
	var long = word.length;
	for(var i = 0; i < word.length; i++){
		if (word[i] !== word[long -1-i]){
			
		}

	}
}