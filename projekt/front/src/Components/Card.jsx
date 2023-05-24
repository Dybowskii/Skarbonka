import '../App.css';
import cashIcon from "../Images/cash-icon.png"
import childIcon from "../Images/child-icon.png"
function Card(props)
{
    
    return <div className='containterCard'>
    <div className="card">
    <div className='photoContainer'>
            <img className='avatar' src={props.src} />
        </div>
    <div class="quarter"></div>
        <h1 className='name'><img src={childIcon} alt="child-icon"></img>{props.name}</h1> 
        <h3 className='saldo'><img src={cashIcon} alt="cash-icon"></img>Saldo: {props.amount}zł</h3>
    </div></div>
}

export default Card;