class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        const node = new Node(val);
        if(!this.first){
            this.first = this.last = node;
        }
        else{
            node.next = this.first;
            this.first = node;
        }
        return ++this.length;
    }
    pop(){
        if(!this.first) return null;
        const node = this.first;
        if(this.length===1){
            this.first = this.last = null;
        }
        else{
            this.first = node.next;
            node.next = null;
        }
        this.length--;
        return node.val;
    }
}