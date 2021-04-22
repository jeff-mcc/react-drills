import React from 'react'

function List(props){
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

export default List