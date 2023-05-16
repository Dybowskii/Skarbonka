import ChildrenBar from "./ChildrenBar";
import Nav from "./Nav";
import "../App.css"
import userIcon from "../Images/user-icon.png"

function ParentView()
{
    // <tr>
    // <td><h1 className="parent-header">Witaj {"Marek"}</h1> </td>
    // <td id="secondColumn">
    // <button className="myButton">Stwórz nową skarbonkę</button> 
    // </td>
    // </tr>
    return <div className="container">
    <div className="content-parent">
    <Nav />
    <div className="parent-header-container">
    <span className="parent-header">Witaj użytkowniku!</span> 
    <h1 className="parent-header-name"><img className = "parent-icon"src={userIcon} alt="child-icon"></img>{"Marek"}</h1>
    </div>
    <div className="parent-content">
    <ChildrenBar />
    </div>
    </div>
</div>
}

export default ParentView;