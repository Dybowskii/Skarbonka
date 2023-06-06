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
      setMessage("Utworzono skarbonkę")
          })
          .catch((error) => 
          {
            setMessage("Wystąpił błąd")
            console.log(error)
          })
    console.log(values);
  };

  return (
    <div>
    <div className="message">{message ? <p>{message}</p> : null}</div>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        Nazwa skarbonki:<br/>
        <Field type="text" name="name" placeholder="Name" /><br/><br/>
        Środki w skarbonce:<br/>
        <Field type="number" name="amount" placeholder="Amount" /><br/><br/>
        Username dziecka:<br/>
        <Field type="text" name="child.username" placeholder="Child Username" /><br/><br/>
        Email dziecka:<br/>
        <Field type="email" name="child.email" placeholder="Child Email" /><br/><br/>
        Hasło dziecka:<br/>
        <Field type="password" name="child.password" placeholder="Child Password" /><br/><br/>
        <button type="submit">Save</button>
      </Form>
    </Formik>
    </div>
  );
}

export default TestCreate;