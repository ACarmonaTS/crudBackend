const Router = require("express");
const router = Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

//READ
router.get("/get/", getUsers);
//CREATE
router.post("/post/", createUser);
//UPDATE
router.put("/put/:id", updateUser);
//DELETE
router.delete("/delete/:id", deleteUser);

module.exports = router;
