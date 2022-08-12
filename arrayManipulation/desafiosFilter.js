// retorna solo palabras de 4 letras y más
const input = ['amor', 'sol', 'piedra', 'día'];

function solution(array) {
    return array.filter((element) => {
        return element.length >= 4;
    });
}; 

console.log(solution(input));



// desafío usando filter y includes

const words1 = ["ana", "santi", "nico", "anastasia"];

function solution1(words, query) {
	return words.filter((element) => {
		return element.includes(query);
	});
}; 

console.log(solution1(words1,"an")); // devuelve los valores que coincidan con la búsqueda