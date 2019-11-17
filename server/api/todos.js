const router = require('express').Router()
const {Todo} = require('../db/models')

const loggedIn = (req, res, next) => {
  if (req.user) next()
  else next('Forbidden')
}

router.get('/', async (req, res, next) => {
  try {
    const list = await Todo.findAll({
      where: {
        userId: req.session.passport.user,
        completed: false
      }
    })
    res.json(list)
  } catch (error) {
    next(error)
  }
})

router.put('/:itemId', loggedIn, async (req, res, next) => {
  try {
    const completed = await Todo.findOne({
      where: {id: req.params.itemId}
    })
    await completed.update({
      completed: true
    })

    res.json(completed)
  } catch (error) {
    next(error)
  }
})

module.exports = router
