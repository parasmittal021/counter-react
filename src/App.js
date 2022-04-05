import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Counter from "./components/Counter";
import CounterValue from "./components/CounterValue";
function App() {
  const [count, setCounter] = useState(1);
  const [show, setShow] = useState(false);
  const changeCounter = (val) => {
    if (val == "") {
      return;
    }
    setCounter(val);
    async function setData() {
      try {
        setShow(true);
        const res = await axios.put(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
          { paras: val }
        );
        console.log(res);
        setShow(false);
      } catch (error) {
        console.log(error);
      }
    }
    setData();
  };
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
        );
        console.log(res);
        if (res && res.data) {
          setCounter(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="App">
      <div className="section">
        <div className="subsection">
          {show && <div class="loader"></div>}
          { show && <p className="para">Saving counter value</p>}
        </div>
        <Counter count={count} changeCounter={changeCounter} />
        <CounterValue count={count} />
      </div>
    </div>
  );
}

export default App;
