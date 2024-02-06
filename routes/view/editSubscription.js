const router = require("express").Router();
const { User, Channel } = require("../../db/models");
const EditPage = require("../../components/pages/EditPage");

router.route("/:id").get(async (req, res) => {
  const user = res.locals.user;
  const channel = await Channel.findByPk(req.params.id);
  res.send(
    res.renderComponent(EditPage, {
      title: `Edit ${channel.title}`,
      user,
      channel,
    }),
  );
});
module.exports = router;
