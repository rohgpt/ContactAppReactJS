import React, { Component } from 'react';
import CreateContact from './asset/createContact';
import './App.css';
import { Route } from 'react-router-dom';
//import photo from './1.png';
import * as contact from './asset/backend'
import Listcontact from './asset/listcontact'

// const contacts = [
//   {
//     "id": "karen",
//     "name": "rohit gupta",
//     "handle": "6204780213",
//     "avatarURL": "http://localhost:5001/karen.jpg"
//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "richardkalehoff",
//     "avatarURL": "http://localhost:5001/richard.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "tylermcginnis",
//     "avatarURL": "./1.jfif"
//   }
//  ];
class App extends Component {
  state = {
    contacts: [

    ],
    addcontact: false
  }
  componentDidMount() {
    contact.getAll().then((contacts) => {
      this.setState(() => ({ contacts }))
    })
  }
  remove = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => (c.id !== contact.id)
      )
    }))
  }

  render() {
    // const { addcontact } = this.state
    return (
      <div>

        <Route exact path='/' render={() => <Listcontact contact={this.state.contacts} removecontact={this.remove} CreateContact={() => {
          this.setState({
            addcontact: true
          })
        }} />} />
        <Route path='/create' component={() => <CreateContact />} />
      </div>
    )
  }
}
/* { {!addcontact && }
       {addcontact && <CreateContact />} }*/
// createContact(contact) {
//   contact.create(contact).then(contact => {
//     this.setState(state => ({
//       contacts: state.contacts.concat([contact])
//     }))
//   })
// }
// 
// <Route path='/create' render={({ history }) => (
//   <CreateContact
//     onCreateContact={(contact) => {
//       this.createContact(contact)
//       history.push('/')
//     }}
//   />
// )} />
/*
function App() {
 return (
   <div className="App">
     <header className="App-header">
       

     </header>
   </div>
 );
}
*/
export default App;
