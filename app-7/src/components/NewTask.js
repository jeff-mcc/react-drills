import React from 'react'

function NewTask(props){
    return(
        <button onClick={props.updateList}>Add to To Do List</button>
    )
}

export default NewTask