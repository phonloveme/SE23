class Stack {
    constructor() {
        this.array = []
    }

    print = () => { // распечатать в консоль массив
        console.log(this.array);
    }

    push = (...values) => { // добавить на вершину
        this.array.push(...values);
    }

    pop = () => { // снять с вершины и вернуть last
        return this.array.length === 0 ? console.log('Стек пуст!') : this.array.pop();
    }

    peek = () => { // вернуть с вершины, не меняя стек
        return this.array.length === 0 ? console.log('Стек пуст!') : this.array[this.array.length - 1];
    }

    size = () => { // вернуть размер
        return this.array.length;
    }
}

const stack = new Stack();
stack.push(10, 20, 30);
stack.print(); // Output: [10, 20, 30]
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2