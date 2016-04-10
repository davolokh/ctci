/**
 * Class StackWithMinimum 
 * Provides base Stack functionality extended with min() method
 * push(x)  - O(1) time complexity
 * pop()    - O(1) time complexity
 * min()    - O(1) time complexity
 */
class StackWithMinimum {
    constructor() {
        this.valuesStack = [];
        this.minimumsStack = [];
    }
    
    push(value) {
        if (value <= this.min()) {
            this.minimumsStack.push(value);
        }
        this.valuesStack.push(value);
    }
    
    pop() {
        let value = this.valuesStack.pop();
        if (value === this.min()) {
            this.minimumsStack.pop();
        }
        return value;
    }
    
    min() {
        let length = this.minimumsStack.length;
        if (length) {
            return this.minimumsStack[length - 1];
        }
        return Infinity;
    }
}