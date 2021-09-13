import React, { Component } from 'react'

import '../App.css';

import '../../node_modules/font-awesome/css/font-awesome.min.css';

import { Link } from 'react-router-dom';
function handlecall(e) {
  let str = "tel:" + e;
  window.open(str);
}
class listcontact extends Component {
  state = {
    query: "",
    display: 'block'

  }
  handleSearch = (e) => {

    this.setState(() => ({
      query: e.trim(),
      display: "none"

    }))


  }
  showall = () => {
    this.setState({
      query: "",
      display: 'block'
    })
  }
  // componentDidMount() {

  //   fetch("https://api.covid19api.com/summary", { method: "GET" })
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         total: JSON.stringify(result["Global"])
  //       })

  //     }
  //     )
  //     .catch(error => console.log('error', error));
  // }

  //require("../1.png")
  //console.log(props.contact)
  render() {
    const { contact, CreateContact } = this.props
    const { query, display } = this.state

    const contactshow = query === "" ? (contact) : (contact.filter((c) => c.handle.includes(query) || c.name.toLowerCase().includes(query.toLowerCase())))

    return (
      <div>

        <div className="Searchbar">
          <p style={{ color: "blue" }}>Rohit Gupta</p>

          <input className="Searchbox" type="text" placeholder="Search Contact" value={this.state.query} onChange={(e) => this.handleSearch(e.target.value)} /><i className="fa fa-search icon" aria-hidden="true" style={{ display: display }} ></i>
          <Link to='/create' className="btn" onClick={CreateContact}>Add Contact</Link></div>

        {query.length > 0 ? <div style={{ textAlign: "center", color: "Yellow" }}>Showing {contactshow.length}/{contact.length}<button onClick={this.showall} style={{ backgroundColor: "rgba(255,0,0,0)", border: "none", textDecoration: "underline", color: "blue" }}>Show Full</button></div> : ""}

        <ol>
          {contactshow.map((c) =>
          (
            <li key={c.id} className="container">

              <div className='contact-img' style={{ backgroundImage: `url(${c.avatarURL})` }}></div>
              <div className='items'>
                <p>{"Name->" + c.name}</p>
                <p>{"Contact->" + c.handle}</p>

              </div>
              <button onClick={() => handlecall(c.handle)}>Call <span role="img" aria-label="call">📞</span></button>
              <button onClick={() => this.props.removecontact(c)}>Delete 🗑</button>
            </li>
          )


          )}
        </ol>

      </div>

    )
  }


};

export default listcontact