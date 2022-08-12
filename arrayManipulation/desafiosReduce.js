// Calcula la suma total de los elementos

array1 = [1,1,1];
array2 = [2,4,8];

function solution(numbers) {
	return numbers.reduce((sum, element) => {
		return sum + element;
	}, 0); 
}; 
console.log(solution(array1));