class Queue {
    constructor () {
        this.array = [];
    }

   print = () => {
    console.log(this.array);//распечатать в консоль массив
   }
   
   enqueue = (...values) => {
    return this.array.push(...values);//добавить в конец очереди
   }

   dequeue = () => {
    return this.array.length === 0 ? console.log('Очередь пуста!') : this.array.shift();//вывести с начала очереди
   }

   isEmpty = () => {
    return this.array.length === 0 ? console.log('Очередь пуста!') : console.log(`Количество элементов в очереди: ${this.array.length}`)//проверить очередь на пустоту
   }

   size = () => {
    return this.array.length;//вернуть размер
   }
}


const queue = new Queue()
queue.enqueue(10, 20, 30);
console.log(queue.dequeue())
queue.isEmpty()
console.log(queue.size())
queue.print()