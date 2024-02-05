const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../../db/models')

router.route('/').post(async (req, res) => {
  try {
    const { email, password, password2 } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user && password === password2) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const dbRes = await User.create({ email, password: hashedPassword })
      req.session.user = dbRes.id
      res.redirect('/profile')
    } else {
      res.status(404).json({ message: 'error while register' })
    }
  } catch (e) {
    console.log(e)
    res.status(500).end()
  }
})

module.exports = router
