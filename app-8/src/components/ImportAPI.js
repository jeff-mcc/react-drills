import React, {Component} from 'react'
import axios from 'axios'

class ImportAPI extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            height: '',
            mass: '',
            hair_color: '',
            skin_color: '',
            eye_color: '',
            birth_year: '',
            gender: '',
            arrayPos: 0,
            arrayComp: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        axios.get('https://swapi.dev/api/people/')
            .then(e=>{
                const people = e.data.results;
                let person = people[this.state.arrayPos]
                // console.log(people)
                this.setState({arrayComp: people,name: person.name,height: person.height,mass: person.mass,hair_color: person.hair_color,skin_color: person.skin_color,eye_color: person.eye_color,birth_year: person.birth_year,gender: person.gender});
            })
    }

    handleChange(val){
        if (parseInt(val,10)>=0 && parseInt(val,10)<10){
            this.setState({arrayPos: parseInt(val,10)})
            const people = this.state.arrayComp;
            let person = people[parseInt(val,10)]
            this.setState({name: person.name,height: person.height,mass: person.mass,hair_color: person.hair_color,skin_color: person.skin_color,eye_color: person.eye_color,birth_year: person.birth_year,gender: person.gender})
            // console.log(val)
        } else{
            this.setState({arrayPos: 0})
        }
    }

    render(){
        return(
            <div>
                <h1>People of Star Wars</h1>
                <h4>Enter a number between 0 and 9 in the box below</h4>
                <input onChange={e=>this.handleChange(e.target.value)}/>
                <div>
                    <ul>
                        <h4>Name: {this.state.name}</h4>
                        <li>Height: {this.state.height}cm</li>
                        <li>Mass: {this.state.mass}kg</li>
                        <li>Hair Color: {this.state.hair_color}</li>
                        <li>Skin Color: {this.state.skin_color}</li>
                        <li>Eye Color: {this.state.eye_color}</li>
                        <li>Birth Year: {this.state.birth_year} (Before the Battle of Yavin)</li>
                        <li>Gender: {this.state.gender}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ImportAPI