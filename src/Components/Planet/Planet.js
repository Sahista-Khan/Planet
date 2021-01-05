import React,{useState,useEffect} from 'react'

import axios from 'axios'

export default function Planet(props) {
    const [planet, setplanet] = useState(null)
    
    useEffect(() => {
        const planet = axios.get("https://swapi.dev/api/planets/")
        .then((res)=>{
            console.log(res.data.results)
            setplanet(res.data.results)
     
        })
        .catch(()=>{})

    },[])

    console.log(props)

    let residentsHandler = (value)=>{
        props.history.push("/residents",value)
    }

    return (
        <div>
            <p>All Planets</p>
            <ul>
                {planet? 
                    planet.map(value=><li key={value.name} onClick={()=>{residentsHandler(value)}}>{value.name}</li>):
                    <p>Loading...</p>}
            </ul>

         

            
        </div>
    )
}
