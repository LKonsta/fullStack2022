import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
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
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      
    } else {
      event.preventDefault()
      window.alert(newName + ' is already added to phonebook')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name === true)


  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleName={handleNameChange} newNumber={newNumber} handleNumber={handleNumberChange} />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <div key={person.id}>
          {person.name} {person.number}
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
          <div></div>
          number: <input
            value={props.newNumber}
            onChange={props.handleNumber}
          />
          <button type="submit"> add </button>
      </form>
    </div>
  )
}


export default App
