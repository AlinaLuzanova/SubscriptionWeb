const router = require('express').Router()
const LoginPage = require('../../components/pages/LoginPage')

router.route('/').get((req, res) => {
  console.log('--------', res.locals.user)
  res.send(res.renderComponent(LoginPage))
})

module.exports = router
