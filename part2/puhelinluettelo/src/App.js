import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    
    var taken = false
    persons.forEach(function(item, index, array) {
      if (newName === item.name) {
        taken = true
      }
    })
    if (!taken) {
      event.preventDefault()
      const personObject = {
        name: newName,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      
    } else {
      window.alert(newName + ' is already added to phonebook')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name === true)


  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleName={handleNameChange} />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <div key={person.id}>
          {person.name}
        </div>
      )}
    </div>
    
  )

}

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
          name: <input 
            value={props.newName}
            onChange={props.handleName}
          />
          <button type="submit"> add </button>
      </form>
    </div>
  )
}


export default App
