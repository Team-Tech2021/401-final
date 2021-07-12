import axios from 'axios'

export async function fetchAll(web=true) {

    // switch between the real and mock here

    if (web) {
        return webFetchAll();
    } else {
        return mockFetchAll();
    }
}

export async function fetchOne(id, web=true) {

    if (web) {
        return webFetchOne(id);
    } else {
        return mockFetchOne(id);
    }
}

function mockFetchAll() {

    return [
        {id: 1, name:"BST",description:"test"},
        {id: 2, name:"BT",description:"test2"},
    ]
}

function mockFetchOne(id) {

    const problems = mockFetchAll();

    for(let problem of problems) {
        if (problem.id == id) {
            return problem;
        }
    }

    return null;
}


async function webFetchAll() {

    const base = 'https://kuro-space-rest-api.herokuapp.com'

    try {

        const tokenResponse = await axios.post(base + '/api/token/', {
            username: "kuro",
            password: "kuro123",
        });

        const { refresh, access } = tokenResponse.data;

        const config = {
            headers: { Authorization: `Bearer ${access}` }
        };

        const problemsResponse = await axios.get(base + "/api/v1/problem/", config);
        // console.log(problemsResponse.data)

        return problemsResponse.data

    } catch (error) {
        console.error(error);
    }


    return [];
}

async function webFetchOne(id) {

    const base = 'https://kuro-space-rest-api.herokuapp.com'

    try {

        const tokenResponse = await axios.post(base + '/api/token/', {
            username: "kuro",
            password: "kuro123",
        });

        const { refresh, access } = tokenResponse.data;

        const config = {
            headers: { Authorization: `Bearer ${access}` }
        };

        const problemsResponse = await axios.get(`${base}/api/v1/problem/${id}/`, config);

        return problemsResponse.data

    } catch (error) {
        console.error(error);
    }


    return null;
}