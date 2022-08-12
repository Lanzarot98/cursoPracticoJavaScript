// retorna un booleano si todos los elementos son pares.

const array1 = [2, 4, 6, 8, 10]; 
const array2 = [1, 3, 5, 7, 10, 11]; 
const array3 = [1, 3, 5]; 

function solution(numbers) {
	return numbers.every((element) => {
		return element % 2 === 0;
	});
}; 

console.log(solution(array1));




