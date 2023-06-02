import "../App.css"

function Amount(props)
{
    return <div className="amountInfo">
        <h1 className="amountTitle">Zgromadzone oszczędności</h1>
        <h1 className="amount">{props.amount}zł</h1>
    </div>
}
export default Amount;