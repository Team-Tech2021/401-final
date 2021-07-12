import axios from 'axios'

// TODO: ask API team to supply hours array

export const apiUrl = 'https://kuro-space-rest-api.herokuapp.com/api/v1/problem/';



// get a JSON Web Token from server
export async function getToken(values) {
    const url = "https://kuro-space-rest-api.herokuapp.com/api/token/";
    const response = await axios.post(url, values);
    
    const refreshUrl = "https://kuro-space-rest-api.herokuapp.com/api/token/refresh";
    
    const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });
    console.log(refreshResponse.data.access,"-------------------------");

    return refreshResponse.data.access;
}


// GET from API with authentication
export async function fetchWithToken(url, token) {

    const config = makeConfig(token);

    const response = await axios.get(url, config);

    console.log(response, "--------------------");
    return response;
}


// POST to API with authentication
export async function postWithToken(token, values) {

    const body = {
        id: -1, // will be overwritten once cache revalidates
        location: values.location,
        minimum_customers_per_hour: values.min,
        maximum_customers_per_hour: values.max,
        average_cookies_per_sale: values.avg,
    }

    const config = makeConfig(token);

    const response = await axios.post(apiUrl, body, config);

    return response.data;
}

export async function deleteWithToken(id, token) {
    const config = makeConfig(token);

    const url = apiUrl + id + '/';

    await axios.delete(url, config);

}

// helper function to handle getting Authorization headers EXACTLY right
function makeConfig(token) {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}