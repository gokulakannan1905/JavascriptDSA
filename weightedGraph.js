class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
     Dijkstra(begin,end){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
    
        for(let vertex in this.adjacencyList){
            if(vertex===begin){
                nodes.enqueue(vertex,0);
                distances[vertex] = 0;
            }
            else{
                distances[vertex] = Infinity;
            }
            previous[vertex] = null;
        }
        while(nodes.queue.length){
            smallest = nodes.dequeue().item;
            if(smallest===end){
                while(previous[smallest]){
                    path.unshift(smallest);
                    smallest = previous[smallest];
                }
                path.unshift(smallest);
                break;
            }
            if(smallest || distances[smallest]!==Infinity){
                for(let neighbor of this.adjacencyList[smallest]){
                    const newDistance = distances[smallest] + neighbor.weight;
                    if(newDistance < distances[neighbor.node]){
                        distances[neighbor.node] = newDistance;
                        previous[neighbor.node] = smallest;
                        nodes.enqueue(neighbor.node, newDistance);
                    }
                }
            }
        }
        return path;
    }
}
class PriorityQueue{
    constructor(){
        this.queue = [];
    }
    enqueue(item,priority){
        this.queue.push({item,priority});
        this.sort();
    }
    dequeue(){
        return this.queue.shift();
    }
    sort(){
        this.queue.sort((x,y)=>x.priority-y.priority);
    }   
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]