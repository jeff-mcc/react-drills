import React from 'react'
import List from './List'

function ToDo(props){
    return(
        <div>
            <List list={props.list}/>
        </div>
    )
}

export default ToDo