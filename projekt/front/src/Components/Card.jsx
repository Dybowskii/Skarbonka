import '../App.css';

function Card(props)
{
    
    return <div className='containterCard'>
    <div className="card">
        <h1 className='name'>{props.name}</h1> 
        <h3 className='saldo'>Saldo: {props.amount}zł</h3>
        <div className='photoContainer'>
            <img className='avatar' src={props.src} />
        </div>
    </div></div>
}

export default Card;