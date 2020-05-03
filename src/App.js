import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [todo, setTodo] = useState('');

  function handleDelete(id) {
    const newTodos = todos.filter(v => v.id !== id);
    setTodos(newTodos);
  }

  function handleCheck(id) {
    const newTodos = [...todos];
    let currTodo = newTodos.find(v => v.id === id);
    currTodo.done = !currTodo.done;
    setTodos(newTodos);
  }

  function handleAdd() {
    setTodoCount(todoCount + 1);
    setTodos([...todos, {id: todoCount, value: todo, done: false}])
    setTodo('');
  }

  return (
      <div>
        {todos.map((todo) => (
            <div key={todo.id}>
              {todo.value}
              <input type='checkbox' checked={todo.done} onChange={() => handleCheck(todo.id)}/>
              {todo.done ? 'Completed' : 'Not Completed'}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
        ))}
        <input type='text' value={todo} onChange={e => setTodo(e.target.value)}/>
        <button onClick={() => handleAdd()}>Add ToDo</button>
      </div>
  );
}

export default App;
