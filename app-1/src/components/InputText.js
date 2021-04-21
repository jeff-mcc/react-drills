import React, {Component} from 'react'

class InputText extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal: '',
            outputVal: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val){
        // console.log(val)
        this.setState({inputVal: val})
    }

    render(){
        // console.log(this.state.inputVal)
        return(
            <div className='input-copy-text'>
                <h1>App-1</h1>
                <input className='inputText' value={this.state.inputVal} onChange={e=>this.handleChange(e.target.value)}/>
                <h3>Output Text: {this.state.inputVal}</h3>
            </div>
        )
    }
}

export default InputText

//