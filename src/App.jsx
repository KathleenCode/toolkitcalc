import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNum, multiplyNum, divideNum, subtractNum } from './store/features/Number/numSlice';
import './App.css'

function App() {
  const [num, setNum] = useState(0);

  const data = useSelector((state) => state.number.num)
  console.log(data);

  const dispatch =useDispatch();


  return (
    <>
    <div className="al">
     <label htmlFor="num">Kindly type in a number</label>
      <input type="num" value={num} onChange={(e) => setNum(e.target.value)} /> <br />
      <button onClick={() => dispatch(addNum(num))} >Add</button>
      <button onClick={() => dispatch(subtractNum(num))} >Subtract</button>
      <button onClick={() => dispatch(multiplyNum(num))} >Multiply</button>
      <button onClick={() => dispatch(divideNum(num))} >Divide</button>
      <br/>
      <p>Your number: {num}</p>
      <hr />
      <p>The answer: {data}</p>
    </div>
    </>
  )
}

export default App
