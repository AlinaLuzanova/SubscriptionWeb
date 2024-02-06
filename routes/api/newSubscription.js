const router = require("express").Router();
const { Channel } = require("../../db/models");

router.route("/").post(async (req, res) => {
  try {
    const { title, cost, image } = req.body;
    const isExist = await Channel.findOne({ where: { title } });
    if (!isExist) {
      const channel = await Channel.create({
        title,
        cost,
        img: image,
        creator_id: req.session.user,
      });
      res.status(200).json({ text: "OK" });
    }
    if (isExist) {
      res.status(400).json({ text: "Channel already exist" });
    }
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});
module.exports = router;
