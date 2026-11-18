import PersonDetails from "./PersonDetails"
import personService from "../services/persons"

const Persons = ({persons, setPersons, filter}) => {

   const handleDelete = (person) => {
      const confirmDelete = window.confirm("Delete " + person.name + "?")
      console.log("CONFIRM DELETE", confirmDelete)
      if(confirmDelete === true) {
        personService
          .del(person.id)
          .then(response => {
            console.log("promise fulfilled", response)
            setPersons(persons.filter(p => p.id !== person.id))
          })
      }
    }

   return(
        <>
        {persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) => {
          return (
            <PersonDetails key={person.name} person={person} onDelete={handleDelete} />
          )
        })}
        </>
    )
}

export default Persons