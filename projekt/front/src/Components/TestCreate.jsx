import React, { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

function TestCreate() {
    const [tekst, setTekst] = useState()
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
  const fileRef = useRef(null);
  

   const handleSubmit = (values) => {
    setTekst(values)

    axios.post('http://127.0.0.1:8000/parent/new', values).then(res => {
            console.log(res)
            console.log(res.status)
          })
          .catch((error) => 
          {
            console.log(error)
          })
    console.log(values);
  };

  return (
    <div><pre>{JSON.stringify(tekst, undefined, 2)}</pre>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    
      <Form>
        <Field type="text" name="name" placeholder="Name" /><br/><br/>
        <Field type="number" name="amount" placeholder="Amount" /><br/><br/>
        <FileUpload name="files" fileRef={fileRef} />
        <Field type="text" name="child.username" placeholder="Child Username" /><br/><br/>
        <Field type="email" name="child.email" placeholder="Child Email" /><br/><br/>
        <Field type="password" name="child.password" placeholder="Child Password" /><br/><br/>
        <button type="submit">Save</button>
      </Form>
    </Formik>
    </div>
  );
}

export default TestCreate;
