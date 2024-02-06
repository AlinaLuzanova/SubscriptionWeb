const router = require("express").Router();
const NewChannel = require("../../components/pages/NewChannel");
const { User } = require("../../db/models");

router.route("/:id").get(async (req, res) => {
  const user = await User.findOne({ where: { id: req.session.user } });
  res.send(res.renderComponent(NewChannel, { title: "New Channel", user }));
});

module.exports = router;
