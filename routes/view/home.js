const router = require('express').Router()
const Layout = require('../../components/Layout')
const HomePage = require('../../components/pages/HomePage')
const { Channel } = require('../../db/models')
router.route('/').get(async (req, res) => {
  const channels = await Channel.findAll({ raw: true })
  console.log(channels)
  res.send(
    res.renderComponent(HomePage, {
      channels: channels,
      user: res.locals.user,
    }),
  )
})
module.exports = router
