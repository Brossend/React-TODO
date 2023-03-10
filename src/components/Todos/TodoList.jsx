import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, removeTodo, completeTodo, toggleTodo }) => {
  return (
    <div className={styles.todoList}>
      {!todos.length && <h2>Todo list is empty!</h2>}
      {todos.map((todo) => {
        if (todo.text !== '') {
          return (
            <Todo
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              toggleTodo={toggleTodo}
              key={todo.id}
            />
          );
        } else {
          return undefined;
        }
      })}
    </div>
  );
};

export default TodoList;
