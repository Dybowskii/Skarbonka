import { useState, useEffect } from 'react';
import "../App.css"
import userIcon from "../Images/user-icon.png"
import axios from "axios";
import { setAuthToken } from "./setAuthToken";
import NewChildrenBar from "./NewChilderBar";

    

function ParentView()
{
    const [name, setName] = useState('');

    async function getName() {
        axios.get("http://127.0.0.1:8000/users/")
        .then(res => {
            let data = res.data;
            setName(data[0].username)
        }).catch(err => {
            setName("Wystapil blad")
        console.log(err);
        });
      }
      getName();

    return <div className="container">
        <div className="content-parent">
        {/* <Nav /> */}
        <div className="parent-header-container">
        <h1 className="parent-header-name">Witaj <br/>{name}</h1>
        </div>
        <div className="parent-content">
        <NewChildrenBar />
        </div>
        </div>
    </div>
}

export default ParentView;