import styles from './Button.module.css';

const Button = (props) => {
  const { children, onClick, title, disabled } = props;

  return (
    <button
      {...props}
      onClick={() => {
        onClick();
      }}
      className={styles.button}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
