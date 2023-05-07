
import Nav from "./Nav";
import Amount from "./Amount";
import ChildHistory from "./ChildHistory";

function ChildView()
{
    return <div>
        <div className="container">
                <div className="content">
                <Nav />
                <table>
                <tr>
                    <td><h1 className="title">Witaj, {"Anastazja"}</h1>
                    </td>
                    <td id="secondColumn"><Amount amount={200}/> </td>
                    </tr>
                    <tr>
                        <td className="buttons">
                        <button className="payoffButton">Poproś o wypłatę</button>
                        </td>
                        <td className="buttons">
                        <button className="paymentButton">Poproś o wpłatę</button>
                        </td>
                    </tr>
                </table>
                    <ChildHistory />
                </div>
            </div>
    </div>
}
export default ChildView;