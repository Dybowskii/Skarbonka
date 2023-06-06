import "../App.css"
import cashIcon from "../Images/cash-icon.png"

function Amount(props)
{
    return <div className="amountInfo">
  <h1 className="amountTitle">Zgromadzone oszczędności</h1>
        <h1 className="amount">{props.amount}zł
        <img src={cashIcon} alt="Currency Icon" className="cash-icon" /></h1>
        
    </div>
}
export default Amount;