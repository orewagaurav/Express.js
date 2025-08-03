import { useState } from 'react'
import axios from 'axios'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((e)=>{
      console.log(e); 
    })
  })

  return (
    <>
      <div>
        <h1>Hlw Gaurav </h1>
        <h2>JOKES: {jokes.length}</h2>
      </div>
      {
        jokes.map((jok,index)=>(
          <div key = {jok.id} >
            <h3>{jok.title}</h3>
            <h3>{jok.joke}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
