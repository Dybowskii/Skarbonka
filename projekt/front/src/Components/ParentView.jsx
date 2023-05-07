import ChildrenBar from "./ChildrenBar";
import Nav from "./Nav";
import "../App.css"

function ParentView()
{
    return <div className="container">
    <div className="content">
    <Nav />
    <table>
    <tr>
        <td><h1 className="parent-header">Witaj, {"Marek"}</h1> </td>
        <td id="secondColumn">
        <button className="myButton">Stwórz nową skarbonkę</button> 
        </td>
        </tr>
    </table>
        <ChildrenBar />
    </div>
</div>
}

export default ParentView;