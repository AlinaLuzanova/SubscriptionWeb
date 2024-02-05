const router = require('express').Router()
const { Channel, User, UserChannel } = require('../../db/models')
const ChannelPage = require('../../components/pages/ChannelPage')

router.route('/:id').get(async (req, res) => {
  const chanId = req.params.id
  const channel = await Channel.findByPk(chanId)
  const user = await User.findByPk(req.session.user)
  const amoiuntOfSubscribers = await UserChannel.findAll({
    where: { channel_id: channel.id },
    raw: true,
  })
  if (user) {
    const flag = await UserChannel.findOne({
      where: { user_id: user.id, channel_id: channel.id },
    })
    res.send(
      res.renderComponent(ChannelPage, {
        channel,
        user,
        subscribers: amoiuntOfSubscribers.length,
        isSubscribed: !!flag,
      }),
    )
  }
  if (!user) {
    res.send(
      res.renderComponent(ChannelPage, {
        channel,
        subscribers: amoiuntOfSubscribers.length,
      }),
    )
  }
})
module.exports = router
