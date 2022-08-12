// busca dentro de un string y descubre si ¿tiene la clave?

const words1 = "Ana lava la tina";
const words2 = "Santiago";
const words3 = "Nicolas";

function solution(word, query){
    return word.toLowerCase()
    .includes(query.toLowerCase());
}; 

console.log(solution(words1,'ana'))