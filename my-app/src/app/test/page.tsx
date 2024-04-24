"use client"

import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {

    const[data,setData] = useState('initial');

    useEffect(() => {
        setData('Hello World !')
    }, []);


    return(
        <>
            <h1>{data}</h1>
            <li>
                <ul><Link href={`/test/${1}`}><p>page 1</p></Link></ul>
                <ul><Link href={`/test/${2}`} title={'page 2'}><p>page 2</p></Link></ul>
                <ul><Link href={`/test/${3}`} title={'page 3'}><p>page 3</p></Link></ul>
            </li>
        </>
    )
}