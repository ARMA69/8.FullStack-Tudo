import CONSTANTS from '../constants'

export const registerUser = async(date) => {
  const responce = await fetch(`${CONSTANTS.API_BASE}/user/sign-up`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(date)
  })
  

  if(responce.status === 400) {
   const res = await responce.json()
   return Promise.reject(res.err)
  }

}