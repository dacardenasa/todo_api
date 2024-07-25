const { Router } = require("express");

const router = Router();

router.get("/login", [], (req, res) => {
  res.json({ message: "Login" });
});

module.exports = router;
