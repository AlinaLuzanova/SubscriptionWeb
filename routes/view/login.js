const router = require("express").Router();
const LoginPage = require("../../components/pages/LoginPage");

router.route("/").get((req, res) => {
  res.send(
    res.renderComponent(LoginPage, { title: "Login", user: res.locals?.user }),
  );
});

module.exports = router;
