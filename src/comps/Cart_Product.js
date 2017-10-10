import React, {Component} from 'react'
import axios from 'axios'
import x from '../assets/X.svg'



export default class Cart_Product extends Component{

    constructor(){
        super()

        this.state={
            product:{}
        }
    }


    componentDidMount(){
        axios.get('http://localhost:3000/products/' + this.props.id).then(res=>{
            console.log('yooooo', res)
            this.setState({
                product: res.data[0]
            })
        })
    }

    render(){
        const product = this.state.product
        return(
            <div className="Cart_Production">
                <img className="imgg" src={product.url1} alt=""/>
                <div className='yexty'>
                    <p className="prodTitle">{product.title}</p>        
                    <p className="descTitle">{product.short_description}</p> 
                    <p className="money">$249</p>
                </div>            
                <img onClick={_=>this.props.removeFromCart(this.props.id)} className='x' src={x} alt="x"/>


            </div>
        )
    }
}