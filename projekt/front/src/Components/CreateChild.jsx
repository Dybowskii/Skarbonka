import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field } from 'formik';

function CreateChild()
{
  <Formik
       initialValues={{
        name: "",
        amount: 0,
        photo: "",
        child: {
            username: "",
            email: "",
            password: ""
        }
       }}
       onSubmit={values => {
         // same shape as initial values

         console.log(values);
       }}
     ></Formik>


       
    const initialValue = {
        name: "",
        amount: 0,
        photo: "",
        child: {
            username: "",
            email: "",
            password: ""
        }
      }
    const [data, setData] = useState( initialValue );

  
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nestedName = name.split(".");

    if (nestedName.length > 1) {
      setData((prevState) => ({
        ...prevState,
        [nestedName[0]]: {
          ...prevState[nestedName[0]],
          [nestedName[1]]: value
        }
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };
    // const handleChange = (event) => {
    //     setData({ add: event.target.value });
    //   };


      const submit = async e => {
        e.preventDefault();

        const user = {
            name: data.name,
            amount: data.amount,
            photo: data.photo,
            child: {
            username: data.username,
            email: data.email,
            password: data.pass,
            user_type: null
        }
          };

          await axios.post('http://127.0.0.1:8000/parent/new', user).then(res => {
            console.log(res)
            console.log(res.status)
          })
          .catch((error) => 
          {
            console.log(error)
          })
      }


    return <div>
    <form onSubmit={submit}>
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
    <label htmlFor="name">
      Nazwa skarbonki</label><br/>
          <input
            type="text"
            name="name"
            placeholder="Nazwa skarbonki"
            value={data.name}
            onChange={handleChange}
            
          /><br/>
    <label htmlFor="amount">
      Ilość środków</label><br/>
          <input
            type="number"
            name="amount"
            placeholder="środki"
            value={data.amount}
            onChange={handleChange}
          /><br/>
    <label htmlFor="photo">
      Prześlij zdjecie</label><br/>
          <input
            type="file"
            name="photo"
            value={data.photo}
            onChange={handleChange}
          /><br/><br/><br/>
        
    <label htmlFor="username">
      Username dziecka</label><br/>
          <input
            type="text"
            name="username"
            value={data.child.username}
            onChange={handleChange}
          /><br/>
    <label htmlFor="email">
      Email dziecka</label><br/>
          <input
            type="email"
            name="email"
            value={data.child.email}
            onChange={handleChange}
          /><br/>
        <label htmlFor="password">
      Hasło dziecka</label><br/>
          <input
            type="password"
            name="password"
            value={data.child.password}
            onChange={handleChange}
          /><br/>
          <button type="submit">Stwórz nową skarbonke</button>

    </form>
    </div>
}

export default CreateChild;