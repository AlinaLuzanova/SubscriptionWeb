const router = require('express').Router()
const { Channel, User } = require('../../db/models')

router.route('/:id').put(async (req, res) => {
  const { title, cost, image } = req.body
  const newPost = await Post.update(
    { title, cost, image },
    { where: { id: Number(req.params.id) } },
  )
  res.status(200).json({ text: 'OK' })
})
