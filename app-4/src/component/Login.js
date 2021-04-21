import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginUP = this.loginUP.bind(this);
    }

    handleChange(obj){
        if (obj.id==='username'){
            this.setState({username: obj.value})
        } else{
            this.setState({password: obj.value})
        }
    }

    loginUP(){
        // console.log(this.state.username)
        if(this.state.username!=='' && this.state.password!==''){
            alert(`Login was successfully completed using username: ${this.state.username} and password: ${this.state.password}`)
        } else{
            alert('Login was unsuccessful due to missing username and/or password')
        }
    }

    render(){
        return(
            <div>
                <h1>User Login Page</h1>
                <input id='username' onChange={e=>this.handleChange(e.target)}/>
                <input id='password' onChange={e=>this.handleChange(e.target)}/>
                <button onClick={this.loginUP}>Login</button>
            </div>
        )
    }
}

export default Login