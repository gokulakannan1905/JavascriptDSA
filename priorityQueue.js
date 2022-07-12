class Node{
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        const newNode = new Node(val,priority);
        this.values.push(newNode);
        let index = this.values.length-1;    
        while(index>0){
            const parentIndex = Math.floor((index-1)/2);
            const parent = this.values[parentIndex];
            if(priority < parent.priority){
                this.values[parentIndex] = newNode;
                this.values[index] = parent;
                index = parentIndex;
            }
            else break;
        }
        return this;
    }
    dequeue(){
        if(this.values.length===0) return undefined;
        if(this.values.length===1) return this.values.pop();
        const min = this.values[0];          
        this.values[0] = this.values.pop();
        let index = 0;
        const length = this.values.length;
        while(index<length){
            let left = 0;
            let right = 0;
            const leftIndex = 2*index+1;
            const rightIndex = 2*index+2;
            if(leftIndex < length)
            left = this.values[leftIndex];
            if(rightIndex < length)
            right = this.values[rightIndex];
            if(left.priority<right.priority){
                if(left.priority<this.values[index].priority){
                    const temp = this.values[index];
                    this.values[index] = left;
                    this.values[leftIndex] = temp;
                    index = leftIndex;
                }
                else break;
            }
            else{
                if(right.priority<this.values[index].priority){
                    const temp = this.values[index];
                    this.values[index] = right;
                    this.values[rightIndex] = temp;
                    index = rightIndex;
                }
                else break;
            }
        }
        return min;
    }
}

let ER = new PriorityQueue();
ER.enqueue("Common cold",5);
ER.enqueue("High fever",4);
ER.enqueue("concussion",2);
ER.enqueue("Brokem hand",1)