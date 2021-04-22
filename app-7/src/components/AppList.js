import React, {Component} from 'react'
import NewTask from './NewTask'
import ToDo from './ToDo'

class AppList extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            taskList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    addToList(){
        let newList = [...this.state.taskList,this.state.userInput]
        // console.log(newList)
        this.setState({taskList: newList})
    }

    render(){
//         // console.log(this.state.taskList)
        return(
            <div>
                <h1>To Do List</h1>
                <input onChange={e=>this.handleChange(e.target.value)}/>
                <NewTask updateList={this.addToList}/>
                <ToDo list={this.state.taskList}/>
            </div>
        )
    }
}

export default AppList