import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456',id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',id:2 },
    { name: 'Dan Abramov', number: '12-43-234345',id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id:4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleName={handleNameChange} 
        newNumber={newNumber} 
        handleNumber={handleNumberChange} 
      />

      <h2>Numbers</h2>

      <PersonFilter handleFilter={handleFilterChange}/>

      <p> </p>
      
      <Persons persons={persons} filter={newFilter} />
    </div>
  )
}

const PersonFilter = (props) => {
  return (
    <div>
      <form>
        filter <input onChange={props.handleFilter}/>
      </form>
    </div>
  )
}

const Persons = (props) => {
  const filtered = props.persons.filter(function (person) {
    return person.name.includes(props.filter)
  })
  return (
    <div>
      {filtered.map(person =>
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
