const router = require('express').Router()
const { User } = require('../../db/models')
const bcrypt = require('bcrypt')
router.route('/').post(async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email } })
    const isSamePassword = await bcrypt.compare(password, user.password)
    if (user && isSamePassword) {
      req.session.user = user.id
      res.status(200).json({ message: 'OK' })
    } else {
      res.status(404).json({ message: 'Incorrect email or password' })
    }
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

module.exports = router
