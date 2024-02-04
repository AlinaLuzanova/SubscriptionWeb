const router = require('express').Router()
const { User, UserChannel, Channel } = require('../../db/models')
const Profile = require('../../components/pages/ProfilePage')
router.route('/').get(async (req, res, next) => {
  const userId = req.session.user
  const user = await User.findByPk(userId)
  if (user) {
    const channels = await Channel.findAll({
      include: [
        {
          model: User,
          where: { id: userId },
          through: { attributes: [] },
        },
      ],
      raw: true,
    })

    const totalCost = await Channel.sum('cost', {
      include: [
        {
          model: User,
          where: { id: userId },
          through: { attributes: [] },
        },
      ],
      group: ['Users.id'],
      raw: true,
    })

    res.send(
      res.renderComponent(Profile, {
        user: user,
        channels: channels,
        cost: totalCost,
      }),
    )
  } else {
    res.status(404).json({ message: 'User not found' })
  }
})

module.exports = router