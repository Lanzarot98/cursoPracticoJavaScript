// multiplica todos los elementos por dos
input1 = [2, 4, 5, 6];

function solution(array) {
    // Tu código aquí 👈 
   let result = array.map((x) => {
       return x * 2;
   })
   return console.log(result);
}; 

solution(input1);
//

// calcula y agrega una nueva propiedad en un array
example = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
];

function solution1(array) {
    return array.map((element) => {
        return ({
            ...element, 'taxes': Math.trunc(element.price*0.19)
        });

    });
};
console.log(solution1(example));
//