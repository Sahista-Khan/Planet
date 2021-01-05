import React,{useState,useEffect} from 'react'
import axios from 'axios'


function People(props) {
    const [people, setpeople] = useState(null)
    
    useEffect(() => {
        let api=props.location.state.replace("http","https");
        axios.get(api)
        .then((res)=>{
            console.log(res)
            setpeople(res.data)
     
        })
        .catch(()=>{})

    },[])


    return (
     
        <div>
            <p>People Details</p>
           {people? <div>Name: {people.name} -- Height: {people.height} --- Mass: {people.mass}</div> :<p>Loading....</p>}
        </div>
    )
}

export default People
