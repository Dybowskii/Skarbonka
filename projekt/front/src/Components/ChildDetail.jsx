import Amount from "./Amount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import alertIcon from "../Images/alert-icon.png"

function ChildDetail()
{      
    const [message, setMessage] = useState(''); 
    const initialValue = {
        amount: 0,
        add: 0
      }
    const [money, setMoney] = useState( initialValue );
    const params = useParams();
    const [ child, setChild ] = useState('')



    useEffect(() => {
        axios.get(('http://127.0.0.1:8000/parent/' + params.childID))
        .then(res => {
            setChild(res.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const handleChange = (event) => {
        setMoney({ add: event.target.value });
      };

    const addMoney = async e => {
        e.preventDefault();
        const moneyToAdd =
        {
            amount: 0,
            add: money.add
        }
        await axios.put('http://127.0.0.1:8000/parent/add/' + params.childID, moneyToAdd).then(response => {
            
        if (money.add <= 0)
            setMessage("Kwota musi być większa niż 0zł")
        else
        {
            window.location.reload(false);
        }
        }).catch((err) => 
        {
            console.log(err)
            if (money.add < 0 )
                setMessage("Kwota musi być większa niż 0zł")
            else
                setMessage("Wystapił błąd.")
        })
    }
    const sendRequest = (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('photo');
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append('photo', file);

        axios({
        method: 'put',
        url: 'http://127.0.0.1:8000/parent/photo/' + params.childID,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(function (response) {
        setMessage("Zdjęcie zostało zmienione")
        })
        .catch(function (error) {
            setMessage("Wystąpił błąd podczas zmieniania zdjęcia")
        });
    }
    return <div>
        <div className="child-container">
                <div className="child-content">
                <input  className="photo-change" type="file" id="photo" accept="photo/*"/>
                <button type="submit" id="changePhoto"onClick={sendRequest}>Zmień zdjęcie</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
                <h1 className="title-detail">Skarbonka {child.name}</h1>
                <Amount amount={child.amount}/>
                <div className="childDetail-container">
                    <div className='childDetail-payment'>
                    <p>Wypłacić środki <br/>może tylko <br/>właścicel <br/>skarbonki!<img src={alertIcon} alt="alert-icon" width="36" height="36" /></p>
                        <button className="payoffButton2" disabled>Wypłać pieniądze</button>
                        <br/>
                        <form onSubmit={addMoney} >
                        <input 
                            className="subtractMoneyInput2"  placeholder="Wpłać pieniądze" 
                            value={money.add} 
                            step="any"
                            onChange={handleChange} />
                            <button type="submit" className="paymentButton2">Wpłać pieniądze</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
    </div>
}
export default ChildDetail;