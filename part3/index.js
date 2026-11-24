const express = require("express")
const app = express()

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

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/info", (request, response) => {
    let entries = persons.length
    let entriesParagraph = entries === 1 ? `<p> Phonebook has info for ${entries} person </p>` : `<p> Phonebook has info for ${entries} people </p>`
    let timestampParagraph = `<p>${new Date()}</p>`
    response.send(entriesParagraph + timestampParagraph)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})