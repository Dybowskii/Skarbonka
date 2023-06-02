
import Nav from "./Nav";
import Amount from "./Amount";
import { useLocation, Link, useParams } from "react-router-dom";
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
        <div className="container">
                <div className="content">
                {message ? <p>{message}</p> : null}
                <table>
                <tr>
                    <td><h1 className="title">Witaj, {data.name}</h1>
                    </td>
                    <td id="secondColumn"><Amount amount={data.amount}/> </td>
                    </tr>
                    <tr>
                    
                        <td className="buttons">
                        <form onSubmit={subtrackMoney} >
                        <input 
                            className="subtractMoneyInput"  placeholder="wyplac" 
                            value={money.add} 
                            onChange={handleChange} />

                        <br/>
                        <button type="submit" className="paymentButton">Wypłac</button>
                        </form>
                        </td>
                        <td className="buttons">
                        <p>Wpłacić środki może tylko rodzic właścicela skarbonki</p>
                        <button className="paymentButton">Poproś o wpłatę</button>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
    </div>
}
export default ChildView;