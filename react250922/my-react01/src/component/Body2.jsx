import './Body.css';
import { useState } from 'react';
function Body2(props){
  const [count,setCount] = useState(0);
  const onIncrement = () =>{
    setCount(count + 1);
  }


  function handleOnClick(e){
   console.log(e.target.name);
  }

  function handleOnClick2(e){
  console.log(e.target.value);
  }

 return(
    <div className="body">
        <input type="text" onChange={handleOnClick2}></input>
        <h2> {props.name}는 {props.location}에 산다.</h2>
        <h2>{count}</h2>
        <button onClick={onIncrement}>카운트 증가</button>
        <button onClick={handleOnClick} name="A버튼">클릭</button>
    </div>
  );
}

export default Body2;