import React, {Component} from 'react'

class FilterList extends Component{
    constructor(){
        super()
        this.state = {
            arrEl: ['first','second','third','fourth','fifth','sixth'],
            filtEl: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val){
        console.log(val)
        let newArr = [];
        let arr = this.state.arrEl;
        if (val!==''){
            for (let i = 0; i<this.state.arrEl.length; i++){
                if (arr[i].includes(val)){
                    newArr.push(arr[i])
                }
            }
        }
        this.setState({filtEl: newArr})
        // console.log(this.state.filtEl)
    }

    render(){
        return(
            <div>
                <h1>Original List:</h1>
                <div>
                    {this.state.arrEl.map(e=>{
                        return(
                            <li>{e}</li>
                        )
                    })}
                </div>
                <h1>Filtered List:</h1>
                <input onChange={e=>this.handleChange(e.target.value)}/>
                <div>
                    {this.state.filtEl.map(e=>{
                        return(
                            <li>{e}</li>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FilterList

//value="type here to filter list above"