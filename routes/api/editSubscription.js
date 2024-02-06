const router = require("express").Router();
const { Channel, User } = require("../../db/models");

router.route("/:id").put(async (req, res) => {
  const { title, cost, image } = req.body;

  try {
    const currChannel = await Channel.findByPk(Number(req.params.id));
    if (currChannel.id) {
      const newChannel = await Channel.update(
        { title, cost, img: image },
        { where: { id: Number(req.params.id) } },
      );
      if (!newChannel) {
        return res.status(500).json({ error: "Post cannot be updated" });
      }
      res.status(200).json({ text: "OK" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = router;
