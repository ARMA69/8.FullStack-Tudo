import React, { useState, useEffect } from 'react'
import {registerUser} from '../api/index'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'


function Home() {
 const [state, setState] = useState(false)
 const [data, setData] = useState()
 const [error, setError] = useState(null)

 useEffect(()=>{
  if(data){
    registerUser(data)
    .then(result => {console.log(result)})  
    .catch(err => {
      setError(err)
    })
  }
   }, [data])

 const buttonHadler = () =>  {
  return setState(!state)
 }
 
 const getData = (userData) => {
  setData(userData)
 }

  const textButton = state ? "SignUp" : "SignIn"

  return (
    <>
    <header>
      <button onClick={buttonHadler}>{textButton}</button>
    </header>
    <main>
      {state ? <SignIn sendData={getData}/> : <SignUp sendData={getData}/>} 
    </main>
  {error && <div style={{color: 'red', fontWeight: 'bold'}}>{error}</div>}
    </>
  )
}

export default Home