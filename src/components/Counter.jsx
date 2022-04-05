import styles from "./Counter.module.css";
const Counter = (props) => {
  const changeHandler = (e) => {
    props.changeCounter(e.target.value);
  };
  return (
    <div className={styles.section}>
      <div className={styles.minus}>-</div>
        <input
          type="number"
          className={styles.counter}
          defaultValue={props.count}
          max="1000"
          onChange={changeHandler}
        />
      <div className={styles.plus}>+</div>
    </div>
  );
};
export default Counter;
