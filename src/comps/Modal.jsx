import React from 'react'

class Modal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            submited: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
      componentDidMount() {
          window.scrollTo(0, 0);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        if(this.state.value === ''){
            alert('need to add a value')
        } else {
            alert('A name was submitted: ' + this.state.value);
            this.setState({submited: true})
        }
        event.preventDefault();
      }

      
    render(){
        return(
            <div className='container'>
                <div className='modalContainer'>
                    <span onClick={this.props.toggleModal}>close</span>
                    {
                        this.state.submited ?
                        <div>
                            Thank you for submitting feedback! 
                        </div>
                        :
                        <div className='form'>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                Name:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Modal;