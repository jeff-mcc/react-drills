import React, {Component} from 'react'
import axios from 'axios'

class Details extends Component{
    constructor(){
        super()
        this.state = {
            product: {}
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://practiceapi.devmountain.com/products`)
          .then(e=>{
            let data = e.data;
            let findItem = data.filter(e=>e.id===this.props.find)
            this.setState({product: findItem});
          })
    }
    
    render(){
        return(
            <div>
                <h2>{this.state.product.title}</h2>
                <img width="200" src={this.state.product.image} alt='devmountain product'/>
                <h4>{`Price: $${this.state.product.price}.00`}</h4>
            </div>
        )
    }
}

export default Details

//${this.props.match.params.id}