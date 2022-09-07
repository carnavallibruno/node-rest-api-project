import people from '../models/Person.js';

class PersonController {

  static getPeople = (req, res) => {
    people.find((err, people) => {
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

  static postPerson = (req, res) => {
    let person = new people(req.body);

    person.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar pessoa`})
      } else {
        res.status(201).send(person.toJSON())
      }
    })
  }

  static putPerson = (req, res) => {
    const personId = req.params.id;

    people.findByIdAndUpdate(personId, {$set: req.body}, (err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao atualizar a informação do usuário`})
      } else {
        res.status(200).send({message: `Informação do usuário atualizada com sucesso`})
      }
    })
  }
}

export default PersonController;