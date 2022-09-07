import users from '../models/User.js';

class UserController {

  static getUsers = (req, res) => {
    users.find((err, users) => {

      if (err) {
        res.status(404).send({message: `${err.message} - Erro em encontrar banco de dados`})
      } else {
        res.status(200).json(users)
      }
    })
  }
  

  static getUserById = (req, res) => {
    const userId = req.params.id;

    users.findById(userId, (err, users) => {
      if(err) {
        res.status(404).send({message: `User not Found`})
      } else {
        res.status(200).send(users)
      }
    })
  }

  static getUserByName = (req, res) => {
    const userName = req.query.name;

    users.find({"name": {$regex: userName}}, {}, (err, users) => {
      if(err) {
        res.status(404).send({message: `User not Found`})
      } else {
        res.status(200).send(users)
      }
    })
  }

  static postUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar usuário`})
      } else {
        res.status(201).send(user.toJSON())
      }
    })
  }

  static putUser = (req, res) => {
    const userId = req.params.id;

    users.findByIdAndUpdate(userId, {$set: req.body}, (err) => {
      if (err) {
        res.status(404).send({message: `${err.message} - falha ao atualizar a informação do usuário`})
      } else {
        res.status(200).send({message: `Informação do usuário atualizada com sucesso`})
      }
    })
  }

  static deleteUser = (req, res) => {
    const userId = req.params.id;

    users.findByIdAndDelete(userId, (err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao deletar usuário`})
      } else {
        res.status(204).send({message: 'Usuário excluído com sucesso'})
      }
    })
  }
}

export default UserController;