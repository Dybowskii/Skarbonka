
import Card from "./Card";
import {
    useQuery,
  } from 'react-query'

const fetchChildren = async () => {
        const res = await fetch('http://127.0.0.1:8000/parent/');
        return res.json();
      }

function ChildrenBar()
{
      const { data, status } = useQuery('children', fetchChildren);
      console.log(data);

      const onWheel = e => {
        e.preventDefault();
        const container = document.getElementById("navBar");
        const containerScrollPosition = document.getElementById("navBar").scrollLeft;
        container.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY,
          behaviour: "smooth"
        });
      };

    return(
        <div>
            <div className="nav">
            <h1 className="title">Twoje skarbonki:</h1>
            <div className="navBar" id="navBar" onWheel={onWheel}>{status === "error" && (
                <div>Błąd podczas pobierania danych.</div>
            )}
            {status === "loading" && (
                <div>Ładowanie...</div>
            )}
            {status === "success" && (
                <div className = "childrenCards-container">
                {data.map(data => (
            <div className="childrenCards"><Card 
                key={data.id}
                name={data.name}
                amount={data.amount}
                src={data.Image}
                /></div>))}
                </div>
            )}</div>
        </div>
            
        </div>
    )
                }


export default ChildrenBar;