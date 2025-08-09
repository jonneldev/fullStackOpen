const Persons = ({displayPersons, removePerson}) => {
  return (
    <div>
      {
        displayPersons.map(person => {
          return (
            <p 
              key={person.id}>{person.name}
              <button onClick={() => 
                removePerson(person.id, person.name)
              }>delete</button>
            </p>
          )
        })
      }
    </div>
  )
}

export default Persons