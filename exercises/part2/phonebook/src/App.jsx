import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from "axios"
import phonebookService from "./services/phonebook"

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    console.log('effect')
    phonebookService
      .getAll()
      .then(initialPhonebook => {
        console.log(initialPhonebook)
        setPersons(initialPhonebook)
      })
  },[])

  console.log('run', persons.length)

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