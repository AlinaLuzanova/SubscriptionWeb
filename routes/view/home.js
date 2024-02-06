const router = require("express").Router();
const HomePage = require("../../components/pages/HomePage");
const { Channel, User } = require("../../db/models");

router.route("/").get(async (req, res) => {
  const channels = await Channel.findAll({ raw: true });
  res.send(
    res.renderComponent(HomePage, {
      title: "Home Page",
      channels,
      user: res.locals.user,
    }),
  );
});
module.exports = router;
