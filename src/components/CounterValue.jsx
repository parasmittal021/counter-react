import styles from './CounterValue.module.css'
const CounterValue = (props) => {
  return <p className={styles.para}>Counter value : {props.count}</p>;
};
export default CounterValue;
