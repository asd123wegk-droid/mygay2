
class TodoApp {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    addTodo(title) {
        const todo = {
            id: this.nextId++,
            title: title,
            completed: false
        };
        this.todos.push(todo);
        console.log("Added:", title);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log("Removed todo with id:", id);
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            console.log("Toggled todo:", id);
        }
    }

    listTodos() {
        console.log("Todo List:");
        if (this.todos.length === 0) {
            console.log("No todos yet.");
        }
        this.todos.forEach(todo => {
            const status = todo.completed ? "[x]" : "[ ]";
            console.log(`${status} ${todo.id}: ${todo.title}`);
        });
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Cleared completed todos.");
    }
}

// ลบรายการ
const app = new TodoApp();

app.addTodo("Learn JavaScript");
app.addTodo("Practice coding");
app.addTodo("Build a project");

app.listTodos();

app.toggleTodo(2);
app.listTodos();

app.removeTodo(1);
app.listTodos();

app.addTodo("Read documentation");
app.toggleTodo(3);

app.clearCompleted();
app.listTodos();

// End of program
