/*

    2 - 0
   / \
  1 - 3
*/

// Edge List

const graph_ = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
];

// Adjacent List

const graph__ = [[2], [2, 3], [0,1,3], [1,2]];

const graph = {
    0: [2], // cero esta conectado con el 2
    1: [2,3], // 1 esta conectado con el 2 y 3
    2: [0,1,3], // 2 esta conectado con 0, 1 y 3
    3: [1,2], // 3 esta conectado con 1 y 2
}

// Adjacent Matrix
const graph___ = [
    // contando los indices
    [0,0,1,0], // cero esta conectado con el 2 
    [0,0,1,1], // 1 esta conectado con el 2 y 3
    [1,1,0,1], // 2 esta conectado con 0, 1 y 3
    [0,1,1,0], // 3 esta conectado con 1 y 2
]

// with object and matrix
const graph1 = {
    0: [0,0,1,0], // cero esta conectado con el 2
    1: [0,0,1,1], // 1 esta conectado con el 2 y 3
    2: [1,1,0,1], // 2 esta conectado con 0, 1 y 3
    3: [0,1,1,0], // 3 esta conectado con 1 y 2
}

