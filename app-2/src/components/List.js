import React, {Component} from 'react'

class List extends Component{
    constructor(){
        super()
        this.state = {
            listElements: ['first','second','third','fourth','fifth']
        }
    }

    render(){
        return(
            <div>
                <h1>My List:</h1>
                <div>
                    {this.state.listElements.map(e=>{
                        return(
                            <li>{e}</li>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default List