const BASE_URL = 'https://acnhapi.com/v1/';

// get all the houseware items
export function getItems() {
    return fetch(BASE_URL + 'bugs/').then(res => res.json());
}