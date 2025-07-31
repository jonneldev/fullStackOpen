import { useState } from "react"

const Filter = ({filterName, handleFilterNameChange}) => {
  return (
    <div>
      filter shown with 
      <input value={filterName} onChange={handleFilterNameChange}/>
    </div>
  )
}

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <h2>add new</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({displayPersons}) => {
  return (
    <div>
      {
        displayPersons.map(person => <p key={person.name}>{person.name}</p>)
      }
    </div>
  )
}

function App() {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
    },
    { 
      name: 'Ada Lovelace',
      number: '39-44-5323523',
    },
    { 
      name: 'Dan Abramov',
      number: '12-43-234345',
    },
    { 
      name: 'Mary Poppendieck',
      number: '39-23-6423122',
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const nameExist = persons.some(person =>
      person.name === newName
    )

    if(nameExist) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }


 const displayPersons = persons.filter(person =>
  person.name.toLocaleLowerCase().includes(filterName)
 )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        value={filterName} 
        handleFilterNameChange={handleFilterNameChange} 
      />

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      
      <Persons displayPersons={displayPersons} />
    </div>
  )
}

export default App