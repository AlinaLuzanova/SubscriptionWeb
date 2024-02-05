const router = require('express').Router()
const { User, UserChannel } = require('../../db/models')

router.route('/:id').post(async (req, res) => {
  try {
    const channelId = req.params.id
    const userId = req.session.user

    const existingUserChannel = await UserChannel.findOne({
      where: { user_id: userId, channel_id: channelId },
    })

    if (existingUserChannel) {
      return res.status(409).json({ text: 'Already subscribed' })
    }

    const newUserChannel = await UserChannel.create({
      user_id: userId,
      channel_id: channelId,
    })

    res.status(200).json({ text: 'OK' })
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
})

router.route('/:id').delete(async (req, res) => {
  try {
    const channelId = req.params.id
    const userId = req.session.user

    const result = await UserChannel.destroy({
      where: { user_id: userId, channel_id: channelId },
    })

    if (result > 0) {
      return res.status(200).json({ text: 'OK' })
    } else {
      return res.status(404).json({ text: 'Error' })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).end()
  }
})
module.exports = router
