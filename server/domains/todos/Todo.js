const uuid = require('uuid/v4');

class Todo {
  constructor() {
    this.todos = [{
      text: 'example',
      done: true,
    }];
  }

  all() {
    return this.todos;
  }

  new(text) {
    const todo = {
      id: uuid(),
      text,
      done: false,
    };
    this.todos.push(todo);
    return todo;
  }

  done(id, isDone) {
    const todoIndex = this.todos.findIndex(t => t.id === id);
    this.todos[todoIndex].done = isDone;
  }
}

module.exports = new Todo();
