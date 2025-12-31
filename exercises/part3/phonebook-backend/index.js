const express = require("express")
const app = express()
var morgan = require('morgan')

app.use(express.static('dist'))
app.use(express.json())
morgan.token('body', (req) => JSON.stringify(req.body || '-'))

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)


let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/", (req, res) => {
  res.send("<h1>Phonebook Backend is running...</h1>")
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(p => p.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => Number(p.id)))
    : 0
  
  return String(maxId + 1)
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  const nameExist = persons.some(p => p.name === body.name)
  const numberExist = persons.some(p => p.number === body.number)

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing"
    })
  }

  if (nameExist) {
    return response.status(400).json({ 
      error: "name already exists" 
    })
}

  if (numberExist) {
    return response.status(400).json({ 
      error: "number already exists" 
    })
  }


  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)
  response.json(person)
})


app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.get('/info', (request, response) => {
  const totalPersons = persons.length
  const timeOfRequest = new Date().toString()
  console.log(response)
  response.send(`
    <p>Phonebook has info for ${totalPersons} people</p>
    <p>${timeOfRequest}</p>  
  `)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

