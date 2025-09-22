import Header1 from "./component/Header1";
import Body1 from "./component/Body1";
import Footer1 from "./component/Footer1";
import Body2 from "./component/Body2";
const Header2 = () =>{
  return(
    <header>
      <h1>header22</h1>
    </header>
  );
}

function App() {
  const name = "홍길동";
  const BodyProps = {name:"김자바",location:"군포시"};
  return (
    <div>
      <Header1/>
      <Body1 name = {name} location={"성남시"}/>
      <Body2 {...BodyProps}/>  
      <Footer1/>
      
    </div>
  );
}

export default App
