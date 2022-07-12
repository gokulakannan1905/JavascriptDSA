class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    insert(val){
        this.values.push(val);
        let index = this.values.length-1;    
        while(index>0){
            const parentIndex = Math.floor((index-1)/2);
            const parent = this.values[parentIndex];
            if(val > parent){
                this.values[parentIndex] = val;
                this.values[index] = parent;
                index = parentIndex;
            }
            else break;
        }
        return this;
    }
    extractMax(){
        if(this.values.length===1) return this.values.pop();
        const max = this.values[0];          
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
            if(left>right){
                if(left>this.values[index]){
                    const temp = this.values[index];
                    this.values[index] = left;
                    this.values[leftIndex] = temp;
                    index = leftIndex;
                }
                else break;
            }
            else{
                if(right>this.values[index]){
                    const temp = this.values[index];
                    this.values[index] = right;
                    this.values[rightIndex] = temp;
                    index = rightIndex;
                }
                else break;
            }
        }
        return max;
    }
}
let heap = new MaxBinaryHeap();
heap.insert(55);
heap.extractMax();