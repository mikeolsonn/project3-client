import { setToken, getUserFromToken, removeToken } from './tokenService';

// declare a variable for URL to our API
// const BASE_URL= 'http://localhost:3001/api/users'; development url
const BASE_URL= 'https://crossingguide-api.herokuapp.com/api/users';

// define functions for making ajax REQUESTS
function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        // error handling
        throw new Error('Email already taken');
    }).then(data => setToken(data.token))
}

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        // error handling
        throw new Error('Bad Credentials');
    }).then(data => setToken(data.token))
} 

function logout() {
    removeToken();
}

function getUser() {
    return getUserFromToken();
}

// export our functions 
export {
    signup,
    login,
    logout,
    getUser
};