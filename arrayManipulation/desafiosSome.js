
const array1 = [1, 3, 5, 7, 10, 11];
const array2 = [1, 3, 5];

function solution(numbers) {
	return numbers.some((element) => {
		return element % 2 === 0;
	 })
}; 

console.log(solution(array2));