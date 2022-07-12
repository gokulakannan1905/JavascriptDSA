class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].
                                    filter(x=>x!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].
                                    filter(x=>x!==v1);
    }
    removeVertex(vertex){
        this.adjacencyList[vertex].
            forEach(x=>this.removeEdge(vertex,x));
        delete this.adjacencyList[vertex];        
    }
    DFS(vertex){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vtx){
            if(!vtx) return null;
            visited[vtx] = true;
            result.push(vtx);
            adjacencyList[vtx].forEach(x=>{
                if(!visited[x])
                    return dfs(x);
            })
        }
        dfs(vertex);
        return result;
    }
    dfs(start){
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        while(stack.length){
            const currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(x=>{
                if(!visited[x]){
                    visited[x] = true;
                    stack.push(x);
                }
            });
        }
        return result;
    }
    BFS(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        while(queue.length){
           const currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

g.DFS("A");
g.dfs("A");