import PersonDetails from "./PersonDetails"

const Persons = ({persons, filter}) => {
    return(
        <>
        {persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) => {
          return (
            <PersonDetails key={person.name} person={person} />
          )
        })}
        </>
    )
}

export default Persons