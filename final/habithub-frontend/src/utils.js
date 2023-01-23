// https://svelte.dev/tutorial/module-exports
import { jwt, loggedIn, userFirstName } from './stores'

export async function validateToken() {
    const response = await fetch('https://habithub-api.herokuapp.com/auth/validate', { //API base url should be stored somewhere for the whole site
        method: 'GET',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json',
            'Authorization': 'BEARER ' + localStorage.getItem('jwt')
        }
    })


    //NOTE - should put in another check here which ensures jwt data (e.g. u_id) matches existing user data
    if (!response.ok) {
        loggedIn.set(false)
        jwt.set('')
        signout()
        return false
    }

    loggedIn.set(true)
    jwt.set(localStorage.getItem('jwt'))
    let loggedInVar
    loggedIn.subscribe((data) => loggedInVar = data)

    let jwtVar
    jwt.subscribe((data) => jwtVar = data) 

    return true
}

export function signout() {
    localStorage.clear()
    loggedIn.set(false)
    jwt.set('')
    userFirstName.set('')

    let loggedInVar
    loggedIn.subscribe((data) => loggedInVar = data)
}

export function redirectToLocation(location) {
    window.location.href = location
}
// might be useful for local storage: https://chasingcode.dev/blog/svelte-persist-state-to-localstorage/

export async function loadUserData(id, token) {
    const fetchURL = 'https://habithub-api.herokuapp.com/user/' + id
      
    const response = await fetch(fetchURL, {
      method: 'GET',
      headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json',
        'Authorization': 'BEARER ' + token
      }
    })
    
    const data = await response.json()
    return data
}

export async function loadUserPic(id, token) {
    var fetchURL = 'https://habithub-api.herokuapp.com/pic/' + id
    const response = await fetch (fetchURL, {
        method: 'GET',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json',
            'Authorization': 'BEARER ' + token
        }
    })

    const data = await response.json()
    return data
}

