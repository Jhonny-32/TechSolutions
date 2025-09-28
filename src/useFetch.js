import { useEffect, useState } from "react"

export function useFetch() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=> res.json())
        .then((res) => setData(res.results))
    },[])

    console.log('Dentro del usefetch: ',data);
    

    return {data}
}
