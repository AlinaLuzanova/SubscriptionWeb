const router = require("express").Router();
const { Channel } = require("../../db/models");

const isValidImageUrl = (url) => {
  const imageUrlRegex = /\.(jpeg|jpg|gif|png|bmp)$/i;
  return imageUrlRegex.test(url);
};

router.route("/").post(async (req, res) => {
  try {
    const { title, cost, image } = req.body;

    if (!isValidImageUrl(image)) {
      return res.status(401).json({ error: "Invalid image URL" });
    }

    const isExist = await Channel.findOne({ where: { title } });
    if (!isExist) {
      const channel = await Channel.create({
        title,
        cost,
        img: image,
        creator_id: req.session.user,
      });
      res.status(200).json({ text: "OK" });
    } else {
      res.status(400).json({ text: "Channel already exists" });
    }
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;
