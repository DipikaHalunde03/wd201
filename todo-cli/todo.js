const todoList = () => {
  const todos = [];

  const add = (todo) => {
    todos.push(todo);
  };

  const markAsComplete = (index) => {
    if (todos[index]) {
      todos[index].completed = true;
    }
  };

  const overdue = () => {
    const now = new Date();
    return todos.filter((todo) => new Date(todo.dueDate) < now && !todo.completed);
  };

  const dueToday = () => {
    const now = new Date().toDateString();
    return todos.filter((todo) => new Date(todo.dueDate).toDateString() === now);
  };

  const dueLater = () => {
    const now = new Date();
    return todos.filter((todo) => new Date(todo.dueDate) > now);
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        const checkbox = todo.completed ? '[x]' : '[ ]';
        const displayDate = new Date(todo.dueDate).toDateString() === new Date().toDateString() ? '' : todo.dueDate;
        return `${checkbox} ${todo.title} ${displayDate}`;
      })
      .join('\n');
  };

  return { add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
};

module.exports = todoList;
