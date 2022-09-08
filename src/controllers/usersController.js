import users from '../models/User.js';

class UserController {
  
  static getUsers = async (req, res) => {
    try {
      const page = req.query.page;
      const limit = req.query.limit;
      const counter = await users.countDocuments();
      const totalPages = Math.ceil(counter / limit);
      const previousPage = (parseInt(page) - 1);
      const nextPage = (parseInt(page) + 1);
      const Users = await users.find().select("-password").limit(limit).skip((page - 1) * limit).exec();
      if (page > totalPages ) {
        res.status(404).json({ message: "Page does not exist."})
      } else {
        if (previousPage == 0) {
          res.status(200).json({ Users, totalPages, currentPage: parseInt(page), nextPage})
        } 
        else {
          if (page == totalPages) {
            res.status(200).json({ Users, totalPages, currentPage: parseInt(page), previousPage})
          } else {
            res.status(200).json({ Users, totalPages, currentPage: parseInt(page), previousPage, nextPage})
          }
        }
      }
    } catch (err) {
      res.status(404).send({ message: err.message })
    };
  }
  
  static getUserById = (req, res) => {
    const userId = req.params.id;
    
    users.findById(userId, (err, users) => {
      if(err) {
        res.status(404).send({message: 'User not Found'})
      } else {
        res.status(200).send(users)
      }
    }).select("-password");
  }
  
  static getUserByName = (req, res) => {
    const userName = req.query.name;
    
    users.find({"name": {$regex: userName, $options: 'i' } }, {}, (err, users) => {
      if(err) {
        res.status(404).send({message: 'User not Found'})
      } else {
        res.status(200).send(users)
      }
    }).select("-password");
  }
  
  static postUser = (req, res) => {
    let user = new users(req.body);
    
    user.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Could not register this user. Check if all fields have been filled correctly.`})
      } else {
        res.status(201).send(user.toJSON())
      }
    })
  }
  
  static putUser = (req, res) => {
    const userId = req.params.id;
    
    users.findByIdAndUpdate(userId, {$set: req.body}, { runValidators: true }, (err) => {
      if (err) {
        res.status(404).send({message: `${err.message} - User not found.`})
      } else {
        res.status(200).send({message: 'User info updated successfully!'})
      }
    })
  }

  static deleteUser = (req, res) => {
    const userId = req.params.id;
    
    users.findByIdAndDelete(userId, (err) => {
      if(err) {
        res.status(404).send({message: `${err.message} - User not found.`})
      } else {
        res.status(204).send({message: 'User successfully deleted!'})
      }
    }).select("-password");
  }
  
}

export default UserController;