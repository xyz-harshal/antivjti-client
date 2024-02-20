"use server"
import axios from "axios"
import { env } from "@/app/env.mjs"
let headers = {
    'Content-Type': 'application/json',
    'Key': env.KEY,
}
export async function login(resData:any) {
    try {
        let res = await axios.post(`${env.SERVER_URL}/login`, resData, { headers })
        return res.data
    }
    catch (e: any) {
        console.log(e.message);
    }
}