import {useState,useRef} from 'react';

function BodyRef(){
    const inputRef = useRef(null);

    const[text2,setText2] = useState("클릭하면 여기에 입력한 값 나오게");

    const handleOnClick = (e) => {
            const value = inputRef.current.value;
            setText2(value);
        
    }

    return(
        <>
            <h1>This is Body Component</h1>
            <input type="text"  ref={inputRef}/>
            <p>{text2}</p>
            <button onClick = {handleOnClick}> 클릭</button>
        </>
    );
}

export default BodyRef;