const router = require('express').Router()
const { User, UserChannel, Channel } = require('../../db/models')
const Profile = require('../../components/pages/ProfilePage')
router.route('/').get(async (req, res, next) => {
  const user = await User.findByPk(res.locals.user.id, {
    include: [
      {
        model: Channel,
        through: {
          model: UserChannel,
        },
      },
    ],
  })
  const channelsCost = await user.Channels.reduce((acc, channel) => {
    acc + channel.cost
  }, 0)

  if (user) {
    res.send(
      res.renderComponent(Profile, {
        user: res.locals.user,
        channels: user.Channels,
        cost: channelsCost,
      }),
    )
  } else {
    res.status(404).json({ message: 'User not found' })
  }
})

module.exports = router
