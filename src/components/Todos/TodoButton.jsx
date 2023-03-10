import Button from '../UI/Button';
import { RiDeleteBin2Line, RiArrowGoBackLine } from 'react-icons/ri';
import styles from './TodoButton.module.css';

const TodoButton = ({ removeTodoList, removeComplete, completedCount }) => {
  return (
    <div className={styles.todoButton}>
      <Button title="Reset todos" onClick={removeTodoList}>
        <RiArrowGoBackLine />
      </Button>
      <Button
        title="Clear completed todos"
        onClick={removeComplete}
        disabled={!completedCount}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodoButton;
