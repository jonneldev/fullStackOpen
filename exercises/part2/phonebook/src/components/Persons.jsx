const Persons = ({displayPersons}) => {
  return (
    <div>
      {
        displayPersons.map(person => <p key={person.name}>{person.name}</p>)
      }
    </div>
  )
}

export default Persons