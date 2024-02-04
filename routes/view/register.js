const router = require('express').Router()
const RegisterPage = require('../../components/pages/RegisterPage')

router.route('/').get((req, res) => {
  res.send(res.renderComponent(RegisterPage))
})

module.exports = router
