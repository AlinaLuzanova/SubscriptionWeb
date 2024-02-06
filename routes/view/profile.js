const router = require("express").Router();
const { User, UserChannel, Channel } = require("../../db/models");
const Profile = require("../../components/pages/ProfilePage");

router.route("/").get(async (req, res) => {
  console.log(res.locals);
  const user = res.locals.user;
  console.log(user);
  if (user) {
    const channels = await Channel.findAll({
      include: [
        {
          model: User,
          where: { id: +user.id },
          through: { attributes: [] },
        },
      ],
      raw: true,
    });

    const totalCost = await Channel.sum("cost", {
      include: [
        {
          model: User,
          where: { id: +user.id },
          through: { attributes: [] },
        },
      ],
      group: ["Users.id"],
      raw: true,
    });
    const usersChannels = await Channel.findAll({
      where: {
        creator_id: res.locals.user.id,
      },
      raw: true,
    });

    res.send(
      res.renderComponent(Profile, {
        user,
        channels,
        cost: totalCost,
        usersSubscriptions: usersChannels,
      }),
    );
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
