// Stack implementation in JavaScript
export class Stack {
    constructor() {
        this.items = [];
    }
    // Add a new element to the stack
    push(element) {
        // Your code here
        this.items.push(element);
    }
    // Remove the top element from the stack
    pop() {
        // Your code here
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    // View the top element in the stack
    peek() {
        // Your code here
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    // Check if the stack is empty
    isEmpty() {
        // Your code here
        return this.items.length === 0;
    }
    // Get the size of the stack
    size() {
        // Your code here
        return this.items.length;
    }
    // Clear the stack
    clear() {
        // Your code here
        this.items = [];
    }
}









