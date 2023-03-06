import React, { useState, useEffect } from 'react'
import {registerUser} from '../api/index'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'


function Home() {
 const [state, setState] = useState(false)
 const [data, setData] = useState()

 useEffect(()=>{
  if(data){
    registerUser(data)
    .then(result => {console.log(result)})  
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
    </>
  )
}

export default Home