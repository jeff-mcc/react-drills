import React from 'react'

function ToDo(props){
    return(
        <div>
            {props.list.map((e,i)=>{
                return(
                    <li key={i}>{e}</li>
                )
            })}
        </div>
    )
}

export default ToDo