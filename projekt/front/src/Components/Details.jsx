import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const params = useParams();
    console.log(params.childID);
    const [ child, setChild ] = useState('')
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
  
    return (
      <div>
        <h1>Szczegóły skarbonki: {child.name}</h1>
        <h2>Saldo: {child.amount}</h2>
      </div>
    );
  };
  
  export default Details;