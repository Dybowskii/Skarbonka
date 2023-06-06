import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { setAuthToken } from "./setAuthToken";
import Card from "./Card";
import { useHistory, useNavigate } from "react-router-dom";

function NewChildrenBar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/parent/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleClick = (item) => {
    window.location.href = `/detail/${item}`;
  };

  return (
    <div className="child-view">
      <div class="title-childView">
        <span className="title-name">Utworzone skarbonki</span>
      </div>
      <div className="nav">
        {data.length != 0 ? (
          data.map((item) => (
            <li key={item.pk} onClick={() => handleClick(item.pk)}>
              <Card
                key={item.pk}
                src={item.photo}
                name={item.name}
                amount={item.amount}
              />
            </li>
          ))
        ) : (
          <h2>
            <br />
            <br />
            Nie masz skarbonek, które można wyświetlić. Stwórz jedną!
          </h2>
        )}
      </div>
    </div>
  );

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
export default NewChildrenBar;
