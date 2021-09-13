import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ImageInput from './imageInput';
import serializeForm from 'form-serialize'
class Create extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.onCreateContact) {
      this.props.onCreateContact(values)
    }
    alert("done")
  }
  render() {
    return (
      <div>
        {/* <Link
          className='close-create-contact'
          to='/'>
          
            Close
          

        </Link> */}
        <Link to='/' ><i className="fa fa-arrow-left" aria-hidden="true" style={{ "color": "yellow", "font-size": "20px", padding: "20px" }} ></i></Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details' style={{ color: "white" }}>
            <input type='text' name='name' placeholder='Name' style={{ color: "white" }} />
            <input type='text' name='handle' placeholder='Handle' style={{ color: "white" }} />
            <button>Add Contact</button>
          </div>
        </form>
      </div >


    )
  }
}
export default Create;