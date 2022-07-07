class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){ //push
        const node = new Node(val);
        if(!this.first){
            this.first = this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
    dequeue(){ //shift
        if(!this.first) return null;
        const node = this.first;
        if(this.size===1){
            this.first = this.last = null;
        }
        else{
            this.first = node.next;
            node.next = null;
        }
        this.size--;
        return node.val;
    }    
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);