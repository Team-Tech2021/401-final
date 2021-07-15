import axios from 'axios'
const baseURL = "https://kuro-space-rest-api.herokuapp.com/"
const token = "/api/token/"

export async function sign(username,password){
    const url = baseURL+signExt
    const response = axios.post(url,{
        username,
        password,
    })
    return response
}

export async function getToken(username,password){
    const url = baseURL+token
    const response = axios.post(url,{
        username,
        password
    })
    return response
}

export async function getData(username,password,apiExt){
    const response = await getToken(username,password)
    const {access:token,refresh} = response.data
    const url = baseURL+apiExt
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(url,config)
}
