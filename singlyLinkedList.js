class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const node = new Node(val);
        if(!this.head){
                this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        else if(!this.head.next){
            this.length--;
            const val = this.head.val;
            this.head = this.tail = null;
            return val;
        }
        else{
            let current = this.head;
            while(current.next != this.tail){
                current = current.next;
            }
            const val = current.next.val;
            current.next = null;
            this.tail = current;
            this.length--;
            return val;
        }
    }
    shift(){
        if(!this.head) return undefined;
        const current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return current;
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        let node = this.get(index);
        if(node){
           node.val = val;
           return true;
        }
        return false;
    }
    insert(index,val){
        if(index<0 || index>this.length) return false;
        if(index===0) return !!this.unshift(val);
        if(index===this.length) return !!this.push(val);
        let prev = this.get(index-1);
        let newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0||index>=this.length) return undefined;
        if(index===this.length-1) return this.pop();
        if(index===0) return this.shift();
        let prev = this.get(index-1);
        let deletedNode = prev.next;
        prev.next = deletedNode.next;
        this.length--;
        return deletedNode;
    }
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    reverse(){
        let current = null,prev,after;
        after = this.head;
        this.tail = after;
        while(after){
            prev = current;
            current = after;
            after = after.next;
            current.next = prev;
        }
        this.head=current; 
        return this;
    }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.print();
list.reverse();
list.print();