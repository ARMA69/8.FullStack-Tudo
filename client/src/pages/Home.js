import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

function Home() {
 const [state, setState] = useState(false)

 const buttonHadler = () =>  {
  return setState(!state)
 }

  const textButton = state ? "SignUp" : "SignIn"

  return (
    <>
    <header>
      <button onClick={buttonHadler}>{textButton}</button>
    </header>
    <main>
      {state ? <SignIn/> : <SignUp/>} 
    </main>
    </>
  )
}

export default Home