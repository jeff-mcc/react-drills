import React from 'react'

function Image(props){
    // console.log(props)
    return(
        <div>
            <h1>See The Beautiful Image</h1>
            <img src={props.source} alt='placeholder'/>
        </div>
    )
}

// class Image extends Component{
//     constructor(){
//         super()
//         this.state = {

//         }
//     }

//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }

export default Image