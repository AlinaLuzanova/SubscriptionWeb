const router = require('express').Router()

router.route('/').get((req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' })
    }
    res.clearCookie('sid').redirect('/')
  })
})

module.exports = router
