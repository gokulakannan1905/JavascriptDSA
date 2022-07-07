class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
       this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        let current = this.root;
        if(!this.root){
            this.root = newNode;
        }
        else{
            let temp;
            while(current){
                if(val===current.val) return undefined;
                temp = current;
                if(val<current.val)
                    current = current.left;
                else
                    current = current.right;
            }
            if(val<temp.val)
                temp.left = newNode;
            else
                temp.right = newNode;
        }
        return this;
    }
    find(val){
        if(!this.root) return null;
        let current = this.root;
        while(true){
            if(current.val === val)
                return current;
            if(val < current.val)
                current = current.left;
            else
                current = current.right;
            if(!current)
                return null;
        }
    }
    contains(val){
        if(!this.root) return false;
        let current = this.root;
        while(true){
            if(current.val === val)
                return true;
            if(val < current.val)
                current = current.left;
            else
                current = current.right;
            if(!current)
                return false;
        }
    }
    bfs(){
        const queue = [],
            visited = [];
        queue.push(this.root.val);
        while(queue.length){
            const popped = queue.shift();
            visited.push(popped);
            const current = this.find(popped);
            if(current && current.left){
                queue.push(current.left.val);
            }
            if(current && current.right){
                queue.push(current.right.val);
            }
        }
        return visited;
    }
    BFS(){
        const queue = [],
            visited = [];
        queue.push(this.root);
        while(queue.length){
            const popped = queue.shift();
            visited.push(popped.val);
            if(popped.left){
                queue.push(popped.left);
            }
            if(popped.right){
                queue.push(popped.right);
            }
        }
        return visited;
    }
    DFSPreOrder(){
        const data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        const data = [];
        function traverse(node){            
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        const data = [];
        function traverse(node){            
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
