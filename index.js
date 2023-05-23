

let dividend = 47285687;
let divisor = 23;
let result = dividend % divisor;

const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
//const numeroResto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
//const letraNumero = [T===0, R===1, W===2, A===3, G===4, M===5, Y===6, F===7, P===8, D===9, X===10, B===11, N===12, J===13, Z===14, S===15, Q===16, V===17, H===18, L===19, C===20, K===21, E===22];

const letraDNI = letrasDNI[result];

console.log ("la letra de tu DNI es", letraDNI);

let letraDNI2 = prompt ('¿Cuál es tu número de DNI?', letraDNI);
alert ("la letra de tu DNI es", letraDNI);
