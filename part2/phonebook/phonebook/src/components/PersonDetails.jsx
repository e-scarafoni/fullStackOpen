const PersonDetails = ({ person, onDelete }) => {
    return (
        <>
            <p>
            {person.name} {person.number}
            </p>
            <button onClick={() => onDelete(person)}>Delete</button>
        </>
    )
}

export default PersonDetails