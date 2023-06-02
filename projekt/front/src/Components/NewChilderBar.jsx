import ChildrenBar from "./ChildrenBar";
import { useState, useEffect } from 'react';
import Nav from "./Nav";
import "../App.css"
import { Link, Route, Routes } from 'react-router-dom';
import axios from "axios";
import { setAuthToken } from "./setAuthToken";
import Card from "./Card";
import { useHistory, useNavigate } from 'react-router-dom';
  

function NewChildrenBar()
{
    // const [children, setChildren] = useState('');
    // const [error, setError] = useState(false);

    // async function getChildren() {
    //     axios.get("http://127.0.0.1:8000/parent/")
    //     .then(res => {
    //         // let data = res.data;
    //         console.log(res.data)
    //         setChildren(res.data)
    //     }).catch(err => {
    //         setError(true)
    //     });
    //   }
    //   getChildren();

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/parent/')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    const handleClick = (item) => {
        // Przekierowanie na stronę z szczegółami produktu
        window.location.href = `/detail/${item}`;
        console.log(item)
      };

    return( 
            <div>
            <div className="nav">
            <h1 className="title">Twoje skarbonki:</h1>
            {data.map(item => (
                
                <li key={item.pk} onClick={() => handleClick(item.pk)}>
                <Card key={item.pk} src={item.photo} name={item.name} amount={item.amount}/>
                </li>
            ))}
            
            
    
        </div>
        </div>)
    
    
    
    // <div className="nav">
    // <h1 className="title">Twoje skarbonki:</h1>
    // <div className="navBar" id="navBar" onWheel={onWheel}><div className="childrenCards">
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // <Card src="https://www.mustela.pl/sites/refacto_pologne/files/2022-12/13%20miesi%C4%85c%20%C5%BCyia%20dziecka%20%281%29.jpg" name="Agnieszka" amount="200"/>
    // </div></div>
    
    // </div>
}
export default NewChildrenBar