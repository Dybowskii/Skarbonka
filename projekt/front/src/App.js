import React from "react";
import axios, * as others from 'axios';

axios.get('http://127.0.0.1:8000/wel/')
  .then(function (response) {
    console.log(response);
  })


function App() {
  return (
    <div>
      hej
    </div>
  );
}

export default App;
