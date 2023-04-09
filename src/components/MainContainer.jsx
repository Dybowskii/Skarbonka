import ChildrenBar from "./ChildrenBar";
import MyButton from "./MyButton";
import Nav from "./Nav";
import ParentCard from "./ParentCard";
import './mainContainer.css';

function MainContainer()
{
    
    
    return <div className="container">
                <div className="content">
                <Nav />
                <table>
                <tr>
                    <td><ParentCard /> </td>
                    <td id="secondColumn"><MyButton /> </td>
                    </tr>
                </table>
                    <ChildrenBar />
                </div>
            </div>
}

export default MainContainer;