import Amount from "./Amount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
    console.log(params.childID)



    useEffect(() => {
        axios.get(('http://127.0.0.1:8000/parent/' + params.childID))
        .then(res => {
            setChild(res.data);
            console.log(res.data)
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
    

    return <div>
        <div className="container">
                <div className="content">
                {message ? <p>{message}</p> : null}
                <table>
                <tr>
                    <td><h1 className="title">Skarbonka dziecka: {child.name}</h1>
                    </td>
                    <td id="secondColumn"><Amount amount={child.amount}/> </td>
                    </tr>
                    <tr>
                        <td className="buttons">
                        <br/>
                        <p>Wypłacić środki może tylko właścicel skarbonki</p>
                        <button className="payoffButton" disabled>Wypłać</button>
                        


                        </td>
                        <td className="buttons">
                        <br/>
                        <form onSubmit={addMoney} >
                        <input 
                            className="subtractMoneyInput"  placeholder="wplac" 
                            value={money.add} 
                            step="any"
                            onChange={handleChange} />

                        <br/>
                        <button type="submit" className="paymentButton">Wpłać</button>
                        </form>

                        </td>
                    </tr>
                </table>
                </div>
            </div>
    </div>
}
export default ChildDetail;