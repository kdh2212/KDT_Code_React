import {useState,useRef} from 'react';

function Body(){
    const[text,setText] = useState("");
    const[text2,setText2] = useState("클릭하면 여기에 입력한 값 나오게");
    const handleOnClick = (e) => {
            setText2(text);
        
    }

    const handleOnChange = (e) =>{
        setText(e.target.value);
    }
    return(
        <>
            <h1>This is Body Component</h1>
            <input type="text" value={text} onChange={handleOnChange}/>
            <p>{text2}</p>
            <button onClick = {handleOnClick}> 클릭</button>
        </>
    );
}

export default Body;