import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

const Todo = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
      onDoubleClick={() => removeTodo(todo.id)}
    >
      <RiTodoFill className={styles.todoIcon} />
      <p className={styles.todoText}>{todo.text}</p>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => removeTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};

export default Todo;
