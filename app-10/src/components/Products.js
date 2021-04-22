import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Products extends Component{
    constructor(){
        super()
        this.state = {
            dataArr: []
        }
    }

    componentDidMount(){
        axios.get('https://practiceapi.devmountain.com/products')
          .then(e=>{
            const data = e.data;
            this.setState({dataArr: data})
            // console.log(e)
            })
    }

    render(){
        let prodImgs = this.state.dataArr.map((e,i)=>{
            if(e.image){
                return(
                    <Link key={i} to={`/details/${e.id}`} find={e.id}>
                      <img width="200" src={e.image} alt='devmountain products' find={e.id}/>
                    </Link>
                )
            } else{
                return(
                    console.log('no images found')
                )
            }
        });
        return(
            <div>
               {/* <h1>test</h1> */}
               {prodImgs}
                {/* <img class='prodImg' src={this.state.dataArr[0].image} alt='product for sale'></img>
                 <img class='prodImg' src={this.state.dataArr[1].image} alt='product for sale'></img>
                <img class='prodImg' src={this.state.dataArr[2].image} alt='product for sale'></img>
                <img class='prodImg' src={this.state.dataArr[3].image} alt='product for sale'></img>
                <img class='prodImg' src={this.state.dataArr[4].image} alt='product for sale'></img>
                <img class='prodImg' src={this.state.dataArr[5].image} alt='product for sale'></img>
                <img class='prodImg' src={this.state.dataArr[6].image} alt='product for sale'></img> */}
            </div>
        )
    }
}

  export default Products

  //onClick={props.click}
  //src={props.render[0].image}