import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoButton from './components/Todos/TodoButton';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodosHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeTodoListHandler = () => {
    setTodos([]);
  };

  const removeCompleteTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
          return todo;
        } else {
          return todo;
        }
        //Другой вариант обновления состояния
        //return todo.id === id
        //? { ...todo, isCompleted: !todo.isCompleted }
        //: { ...todo };
      })
    );
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodosHandler} />
      {todos.length > 0 && (
        <TodoButton
          completedCount={!!completedTodosCount}
          removeTodoList={removeTodoListHandler}
          removeComplete={removeCompleteTodos}
        />
      )}
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2 className="completed">
          {`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}
        </h2>
      )}
    </div>
  );
}

export default App;
