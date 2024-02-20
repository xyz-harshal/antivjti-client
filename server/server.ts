"use server"
import axios from "axios"
import { env } from "@/app/env.mjs"
import {cookies} from "next/headers"
let authToken:any=cookies().get('user')
let headers = {
    'Content-Type': 'application/json',
    'Key': env.KEY,
    'Authorization':authToken?.value,
}
export async function server(resData:any,route:string) {
    try {
        let res = await axios.post(`${env.SERVER_URL}/${route}`, resData, { headers })
        return res.data
    }
    catch (e: any) {
        console.log(e.message);
    }
}
export async function serverGet(route:string) {
    try {
        let res = await axios.get(`${env.SERVER_URL}/${route}`, { headers })
        return res.data
    }
    catch (e: any) {
        console.log(e.message);
    }
}