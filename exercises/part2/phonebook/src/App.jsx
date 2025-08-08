import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import phonebookService from "./services/phonebook"

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  },[])

  const updatePersonNumber = async (id, updatedPerson) => {
    
    
    const returnPerson = await phonebookService.update(id, updatedPerson)

    setPersons(persons.map(person =>
      person.id === id ? returnPerson : person
    ))
  }

  const addPerson = async (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
    }

    const existingPerson = persons.find(person => 
      person.name === newPerson.name)

    const updatedPerson = { ...existingPerson, number: newPerson.number }

    const nameExist = persons.some(person =>
      person.name.toLowerCase() === newPerson.name.toLowerCase()
    )

    try {
      if(nameExist && window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with new one?`)) {
        updatePersonNumber(existingPerson.id, updatedPerson)
      } else {
        const returnedPerson = await phonebookService.create(newPerson)
        setPersons(prev => prev.concat(returnedPerson))
      }
    } catch (error) {
      console.error('Error adding person:', error)
      alert('Something went wrong while adding the person. Please try again.')
    } finally {
      setNewName('')
      setNewNumber('')
    }
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

 const removePerson = (id, name) => {
  if (window.confirm(`Delete ${name} ?`)) {
    phonebookService
      .remove(id)
      .then(() => {
        setPersons(prev => 
          prev.filter(person => person.id !== id)
        )
      })
      .catch(error => {
        console.error('Error removing person:', error)
        alert(`Information of ${name} has already been removed from server.`)
      })
  }
 }

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
      <Persons 
        displayPersons={displayPersons}      
        removePerson={removePerson} 
      />
    </div>
  )
}

export default App