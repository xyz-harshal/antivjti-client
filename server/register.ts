"use server"
import axios from "axios"
import { env } from "@/app/env.mjs"
let headers = {
    'Content-Type': 'application/json',
    'Key': env.KEY,
}
export async function verify(resData:any) {
    try {
        let res = await axios.post(`${env.SERVER_URL}/verify`, resData, { headers })
        return res.data
    }
    catch (e: any) {
        console.log(e.message);
    }
}
export async function register(resData:any) {
    try {
        let res = await axios.post(`${env.SERVER_URL}/register`, resData, { headers })
        return res.data
    }
    catch (e: any) {
        console.log(e.message);
    }
}