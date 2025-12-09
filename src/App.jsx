import axios from "axios";
import React, { useEffect } from "react";


const App=()=>{
useEffect(()=>{
  axios.get('https://simple-todo-task.onrender.com/api/todos/getData')
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
},[])
return(
  <h1>Hello</h1>
)
}

export default App;

