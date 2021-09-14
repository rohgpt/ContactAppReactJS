const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'rohit',
      name: 'Rohit Gupta',
      handle: '@6204755152',
      avatarURL: config.origin + '/richard.jpg'
    },
    {
      id: 'karan',
      name: 'Karan Gupta',
      handle: '@1800478210',
      avatarURL: config.origin + '/karen.jpg'
    },
    {
      id: 'tyler',
      name: 'Andy Jassy',
      handle: '@+11 4105061204',
      avatarURL: config.origin + '/tyler.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
