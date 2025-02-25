class Stack {
    constructor() {
        this.array = []
    }

    print = () => { // распечатать в консоль массив
        console.log(this.array);
    }

    push = (value) => { // добавить на вершину
        if (this.array.length === 0) {
            console.log('Стек пуст!');
            return null;
        }
    }

    pop = () => { // снять с вершины и вернуть last
        
    }

    peek = () => { // вернуть с вершины, не меняя стек
        
    }

    size = () => { // вернуть размер
        
    }
}

const stack = new Stack()
stack.print()