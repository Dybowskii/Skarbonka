import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

function TestCreate() {
  const [message, setMessage] = useState('');
  const initialValues = {
    name: "",
    amount: 0,
    photo: null,
    child: {
      username: "", 
      email: "",
      password: ""
    }
  };

   const handleSubmit = (values) => {
    axios.post('http://127.0.0.1:8000/parent/new', values).then(res => {
            console.log(res)
            console.log(res.status)
            setMessage(`Utworzono skarbonkę!`)
          })
          .catch((error) => 
          {
            console.log(error)
            setMessage(`Wystąpił błąd w trakcie tworzenia skarbonki!`)
          })
    console.log(values);
  };

  return (
    <div className="createChild-container">
      <div className="message">{message ? <p>{message}</p> : null}</div>
      <h1 className= "createChild-header">Utwórz skarbonkę</h1>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="name" placeholder="Imie" /><br/><br/>
        <Field type="number" name="amount" placeholder="Kwota" /><br/><br/>
        <Field type="text" name="child.username" placeholder="Nick dziecka" /><br/><br/>
        <Field type="email" name="child.email" placeholder="Email dziecka" /><br/><br/>
        <Field type="password" name="child.password" placeholder="Hasło dziecka" /><br/><br/>
        <button type="submit" className="register3-button">Zastosuj</button>
      </Form>
    </Formik>
    </div>
  );
}

export default TestCreate;
