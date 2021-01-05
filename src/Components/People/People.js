import React,{useState,useEffect} from 'react'
import axios from 'axios'


function People(props) {
    const [people, setpeople] = useState(null)
    
    useEffect(() => {
        axios.get(props.location.state)
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
