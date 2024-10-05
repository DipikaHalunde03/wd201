const todoList = require('../todo');

describe('Todo List Test Suite', () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
  });

  test('should create a new todo', () => {
    todos.add({ title: 'Test todo', dueDate: '2024-10-05', completed: false });
    expect(todos.dueLater().length).toBe(1);
  });

  test('should mark a todo as completed', () => {
    todos.add({ title: 'Test todo', dueDate: '2024-10-05', completed: false });
    todos.markAsComplete(0);
    expect(todos.dueLater()[0].completed).toBe(true);
  });

  test('should retrieve overdue items', () => {
    todos.add({ title: 'Overdue task', dueDate: '2024-10-03', completed: false });
    expect(todos.overdue().length).toBe(1);
  });

  test('should retrieve due today items', () => {
    todos.add({ title: 'Today task', dueDate: new Date().toDateString(), completed: false });
    expect(todos.dueToday().length).toBe(1);
  });

  test('should retrieve due later items', () => {
    todos.add({ title: 'Future task', dueDate: '2024-10-06', completed: false });
    expect(todos.dueLater().length).toBe(1);
  });

  test('should display the list properly', () => {
    todos.add({ title: 'Overdue task', dueDate: '2024-10-03', completed: false });
    todos.add({ title: 'Today task', dueDate: new Date().toDateString(), completed: false });
    todos.add({ title: 'Future task', dueDate: '2024-10-06', completed: false });
    const list = todos.toDisplayableList(todos.dueLater());
    expect(list).toBe('[ ] Future task 2024-10-06');
  });
});
