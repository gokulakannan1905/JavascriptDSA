class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head)
            this.head = this.tail = newNode;
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        const removed = this.tail;
        if(this.length===1){
            this.head=this.tail=null;
        }
        else{
        this.tail = removed.prev;
        removed.prev.next = null;
        removed.prev = null;
        }
        this.length--;
        return removed;
    }
    shift(){
        if(this.length===0) return undefined;
        const oldHead = this.head;    
        if(this.length===1){
            this.head = this.tail = null;
        }
        else{
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head=this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head  = newNode;            
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0||index>=this.length) return null;
        let current,counter;
        if(index<=Math.floor(this.length/2)){
            counter = 0;
            current = this.head;
            while(counter!=index){
                current = current.next;
                counter++;
            }
        }
        else{
            counter = this.length-1;
            current = this.tail;
            while(counter!=index){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index,val){
        const node = this.get(index);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
    print(){
        const arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    insert(index,val){
        const newNode = new Node(val);
        if(index===0) return !!this.unshift(val);
        if(index==this.length) return !!this.push(val);
        const prev = this.get(index-1);
        if(!prev) return false;
        newNode.next = prev.next;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        const removed = this.get(index);
        if(!removed) return false;
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.prev = removed.next = null;
        this.length--;
        if(this.length===0){
            this.head=this.tail=null;
        }
        return removed;
    }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.insert(5,6);
list.push(7);
list.push(8);
list.unshift(0);
list.print();
