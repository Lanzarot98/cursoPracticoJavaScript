// nodos se conocen como vertices y los vertices que se conocen como edge
class graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    // creación de nodos
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }

    //conexiones con los nodos
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new graph();

// generar nodos
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");

// crear conexiones
myGraph.addEdge("3","5"); // borde uno conexión con 3 y 5
myGraph.addEdge("6","3");
myGraph.addEdge("1","6");
myGraph.addEdge("1","3");
myGraph.addEdge("1","4");
myGraph.addEdge("4","5");
myGraph.addEdge("8","4");

console.log(myGraph);