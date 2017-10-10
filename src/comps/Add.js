import React, {Component} from 'react'
import axios from 'axios'
import Nav from './nav'
import award from './../assets/award.svg'
import x from '../assets/X.svg'



export default class Add extends Component{

    constructor(){
        super()

        this.state={
            title: '',
            img: '',
            short_description: '',
            showModal: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.handleChanger = this.handleChanger.bind(this)
        this.postStuff = this.postStuff.bind(this)
        this.exit = this.exit.bind(this)
    }

    handleChange(e){
        this.setState({ title: e.target.value})
    }

    handlerChange(e){
        this.setState({ img: e.target.value})
    }

    handleChanger(e){
        this.setState({ short_description: e.target.value})
    }

    postStuff(){
        let {title, img, short_description} = this.state
        axios.post('/add/stuff', {title, img, short_description}).then(res =>{
            return res
        })
        this.setState({
            showModal: true
        })
    }

        exit(){
        this.setState({
            showModal: false
        })
    }

    render(){
        return(
            <div className="Add">

                {
                    this.state.showModal
                    ? 
                    <div className="addedToCart">
                        <div className="addedBox">
                            <img onClick={this.exit} className="x" src={x} alt="x"/>
                            <img className="award" src={award} alt="dumb"/>
                            <p className="addedText">ADDED NEW PRODUCT</p>
                        </div>
                    </div>     
                    :
                    null
                }

                <Nav className="Nav"/>
                <div className="box">
                     <h1>Add Your Logo</h1> 
                    <p className="the_Title">Title</p>
                        <input type="text" onChange={this.handleChange} value={this.state.title}/>
                    <p className="the_img">Thumbnail img url</p>
                        <input type="text" onChange={this.handlerChange} value={this.state.img}/>
                    <p>Summary</p>
                        <textarea className="Text1" cols="40" rows="5" onChange={this.handleChanger} value={this.state.short_description}></textarea>
                        <button className="add_description_btn" onClick={this.postStuff}>add</button>
                </div>
 
                 <div className="preview">
                    <div className="place">
                        <div className="imgy"></div>
                        <p className="the_Title">{this.state.title}</p>
                        <p className="summ">{this.state.short_description}</p>
                    </div>
                </div>  
            </div>
        )
    }
}