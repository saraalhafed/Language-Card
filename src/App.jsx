
import reactvsg from "../src/assets/react.svg"
import './App.scss'
import CardContainer from "./component/CardContainer"
import Menu from "./component/Menu.jsx"
function App() {
  

  return (
    <div>
      
        <img src={reactvsg} alt="logo" className="header-img" />
         
         <Menu>
           <div className="top-card">Language</div>
           <div className="bars"></div>
          <CardContainer/>
          </Menu>
      
    </div>
  )
}

export default App
