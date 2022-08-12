// calcula el total de palabras de un texto:

const text = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];


function solution(lines) {
	const separation = lines.join(' ').split(' ');
	const amount = separation.length;
	return amount;
}; 

console.log(solution(text));