"use client"

import {useEffect, useState} from "react";


export default function Home({params}:any) {

    const[data,setData] = useState('initial');

    useEffect(() => {
        setData(params.id)
    }, []);


    return(
        <h1>Page number {data}</h1>
    )
}