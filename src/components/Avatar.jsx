import './Card.css';

function Avatar(props)
{
    return <div className='avatar'>
    <img src={props.src} />
    </div>
}
export default Avatar;