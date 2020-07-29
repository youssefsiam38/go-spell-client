import { PORT, HOST } from '../keys.js'
import Cookies from './cookies.js'

const { default: Axios } = require('axios')


let cookies = Cookies.getCookies()

console.log(cookies)

const url = `http://${HOST}:${PORT}`

Axios.defaults.headers.common['Authorization'] = cookies.Authorization
Axios.defaults.validateStatus = () => true
Axios.defaults.method = "GET"



let getUser = async (username) => {
    try {
        let res = await Axios.get(`${url}/user/${username}`)
        if (res.data.message)
            redirect(res.data.message)

        return res.data

    } catch (err) {
        console.log(err)
    }
}
let getMe = async () => {
    try {
        let res = await Axios.get(`${url}/me`)
        if (res.data.message)
            redirect(res.data.message)

        return res.data

    } catch (err) {
        console.log(err)
    }
}
let getAllTweets = async (username) => {
    try {
        let res = await Axios.get(`${url}/user/${username}/tweets`)
        if (res.data.message)
            redirect(res.data.message)


        return res.data

    } catch (err) {
        console.log(err)
    }
}
let tweet = async (body) => {
    try {
        let res = await Axios.post(`${url}/tweet`, {
            body
        })
        if (res.data.message)
            alert(res.data.message)

        return res.data

    } catch (err) {
        console.log(err)
    }
}

let login = async (username, pass) => {
    try {
        let res = await Axios.post(`${url}/login`, {
            username,
            password: pass
        })
        if (res.data.message)
            redirect(res.data.message)
        else {
            let token = `Bearer ${res.data.token}`

            Cookies.setCookie('Authorization', token, 2)
            Cookies.setCookie('username', res.data.user.username, 2)

            window.location.href = `/${username}`

        }

        return res.data

    } catch (err) {
        console.log(err)
    }
}
let signup = async (username, pass, bio) => {
    try {
        let res = await Axios.post(`${url}/signup`, {
            username,
            password: pass,
            bio
        })
        if (res.data.message)
            alert(res.data.message)
        else {
            let token = `Bearer ${res.data.token}`

            Cookies.setCookie('Authorization', token, 2)
            Cookies.setCookie('username', res.data.user.username, 2)

            window.location.href = `/${username}`
        }

        return res.data

    } catch (err) {
        console.log(err)
    }
}

function redirect(message) {
    if (message) {
        window.location.href = '/signin'
        alert(message)
    }
}



export default {
    getAllTweets,
    getMe,
    getUser,
    tweet,
    login,
    signup
}