// URL con base a un string En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays


const phrase = "La forma de correr Python";


function solution(title) {
	return title.split(' ').join('-');
}; 

console.log(solution(phrase));



