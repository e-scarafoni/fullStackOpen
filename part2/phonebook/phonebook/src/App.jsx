import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const showNotification = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (checkIfPersonInPhonebook(newName)) {
      updatePerson()
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    personService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        showNotification(`Added ${newName}`)
        setNewName('')
        setNewNumber('')
      })
  }

  const updatePerson = () => {
    const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
    if (confirmUpdate === true) {
      const toUpdate = persons.find(p => p.name === newName)
      const updatedPerson = {
        ...toUpdate,
        number: newNumber
      }
      personService
        .update(toUpdate.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.name === newName ? returnedPerson : p))
          showNotification(`Updated ${newName} number`)
          setNewName("")
          setNewNumber("")
        })
    } 
  }

  const checkIfPersonInPhonebook = (name) => {
    let found = false
    persons.forEach((person) => {
      if (person.name === name) {
        found = true
      }
    })
    return found;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3> Add a new </h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  )
}

export default App