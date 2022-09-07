import people from '../models/Person.js';

class PersonController {

  static getPeople = (req, res) => {
    people.find((err, livros) => {
      if (err) {
        res.status(400).send({message: `${err.message} - Erro em encontrar banco de dados`})
      } else {
        res.status(200).json(people)
      }
    })
  }

  static getPersonById = (req, res) => {
    const personId = req.params.id;

    people.findById(personId, (err, people) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Erro em encontrar usuário`})
      } else {
        res.status(200).send(people)
      }
    })
  }
}

export default PersonController;