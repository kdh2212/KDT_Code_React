import {useState,useRef} from 'react';

function Body(){
    const [text, setText] = useState("홍길동"); // 초기값을 홍길동으로 주겠다.
    const textRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick= () =>{
        if(text.length < 5){
            textRef.current.focus();
        }else {
            alert(text);
            setText("");
        }
    };

    return(
        <div>
            <input ref = {textRef} type="text" value={text} onChange={handleChange}/>
            <button onClick={handleOnClick}>Alert Text</button>
        </div>
    );
}
export default Body;