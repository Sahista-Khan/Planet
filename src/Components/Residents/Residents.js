import React from 'react'
function Residents(props) {
    console.log(props)

    let residents= props.location.state ? props.location.state.residents :[];

    let peopleHandler = (res)=>{
        props.history.push("/people",res)
    }

    return (
        <div>
            <p>All Residents</p>
            {residents.length>0 ? 
                residents.map(res=><li onClick={()=>{peopleHandler(res)}}>{res}</li>) : 
                <p>No Residents Found</p>}
        </div>
    )
}

export default Residents
