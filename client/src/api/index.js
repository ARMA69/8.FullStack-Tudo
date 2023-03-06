import CONSTANTS from '../constants'

export const registerUser = (date) => {
  return fetch(`${CONSTANTS.API_BASE}/user/registration`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(date)
  }).then(res => res.json())
}