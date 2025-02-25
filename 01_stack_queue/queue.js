class Queue {
    constructor () {
        this.array = [];
    }

   print = () => {
    console.log(this.array);
   }
   
   enqueue = (...values) => {
    return this.array.push(...values);
   }

   dequeue = () => {
    return this.array.length === 0 ? console.log('Очередь пуста!') : this.array.shift();
   }

   isEmpty = () => {
    return this.array.length === 0 ? console.log('Очередь пуста!') : console.log(`Количество элементов в очереди: ${this.array.length}`)
   }

   size = () => {
    return this.array.length;
   }
}


const queue = new Queue()
queue.enqueue(10, 20, 30);
console.log(queue.dequeue())
queue.isEmpty()
console.log(queue.size())
queue.print()