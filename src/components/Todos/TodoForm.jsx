import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    addTodo(text);
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={`${styles.inbtn}`}
        placeholder="Enter new Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title="submit" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
