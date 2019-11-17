const router = require('express').Router()
const {User, Todo} = require('../db/models')
module.exports = router

const loggedIn = (req, res, next) => {
  if (req.user) next()
  else next('Forbidden')
}

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId/todos', loggedIn, async (req, res, next) => {
  try {
    const item = Object.keys(req.body)[0]
    const newTodo = await Todo.create({
      item: item
    })

    const user = await User.findOne({
      where: {
        id: req.params.userId
      }
    })

    await newTodo.setUser(user)
    res.json(newTodo)
  } catch (error) {
    next(error)
  }
})
