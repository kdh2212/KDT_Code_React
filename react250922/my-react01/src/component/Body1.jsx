import './Body.css';
function Body1(props){
 const {name, location} = props; // 비구조화 할당 또는 destructuring 또는 구조 분해 할당
 const numA = 1;
 const numB = 2;
 const strA = "안녕";
 const strB = "리액트";
 const objA = {a:1, b:2}; // 객체 리터럴

 return(
    <div className="body">
        <h2>Body!!</h2>
        <h2> {name}는 {location}에 산다.</h2>
        <h2>{numA + numB}</h2>
        <h2>{strA + strB}</h2>
        <h2>objA.a: {objA.a}</h2>
        <h2>objA.b: {objA.b}</h2>
        
    </div>
  );
}

export default Body1;