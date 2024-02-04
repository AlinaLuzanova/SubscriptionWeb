const router = require('express').Router()
const { User } = require('../../db/models')
const bcrypt = require('bcrypt')
router.route('/').post(async (req, res) => {
  try {
    const { email, password, password2 } = req.body
    const user = await User.findOne({ where: { email: email } })
    if (!user && password === password2) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const dbRes = await User.create({ email, password: hashedPassword })
      req.session.user = dbRes.id
      res.status(200).json({ status: 200, message: 'user created' })
    } else {
      res.status(404).json({ message: 'error while register' })
    }
  } catch (e) {
    console.log(e)
    res.status(500).end()
  }
})

module.exports = router
