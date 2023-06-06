import Amount from "./Amount";
import { useEffect, useState } from "react";
import axios from "axios";

function ChildView()
{       
    const [message, setMessage] = useState('');
    const initialValue = {
        add: 0
      }
    const [money, setMoney] = useState( initialValue );
    const [ data, setData ] = useState('')
    const [data2, setData2] = useState('')
    useEffect(() => {
        axios.get(('http://127.0.0.1:8000/child/'))
        .then(res => {
            setData(res.data[0]);
            console.log(res.data[0])
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    useEffect(() => {
        axios.get(('http://127.0.0.1:8000/users/'))
        .then(res => {
            setData2(res.data[0]);
            console.log(res.data[0])
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const handleChange = (event) => {
        setMoney({ add: event.target.value });
      };

    const subtrackMoney = async e => {
        e.preventDefault();
        
        await axios.put('http://127.0.0.1:8000/child/' + data.pk, {
            add: money.add
        }).then(response => {
        if (money.add <= 0)
            setMessage("Kwota musi być większa niż 0zł")
        else
        {
            window.location.reload(false);
        }
            

        }).catch((err) => 
        {
            console.log(err)
            if (money.add > data.amount)
                setMessage("Nie można wyplacić więcej niż jest w skarbonce")
        })
    }

    return <div>
        <div className="child-container">
                <div className="child-content">
                <h1 className="title">Witaj <br/>{data2.username}</h1>
                <div className="message">{message ? <p>{message}</p> : null}</div>
                <Amount amount={data.amount}/>
                <div className="pay-container">
                    <div className = "pay-content">
                    <h1>Podaj kwotę <br/>do wypłacenia</h1>
                    <form onSubmit={subtrackMoney} >
                        <input 
                            className="subtractMoneyInput"  placeholder="Wypłać pieniądze" 
                            value={money.add} 
                            onChange={handleChange} />

                        <br/>
                        <button type="submit" className="payment2Button">Wypłać pieniądze</button>
                        </form>
                    </div>
                    <div className = "payment-content">
                    <p>Wpłacić środki może tylko rodzic 
                    <br/>właścicela skarbonki!</p>
                        <button className="payment3Button">Poproś o wpłatę</button>
                    </div>
                </div>
                </div>
            </div>
    </div>
}
export default ChildView;