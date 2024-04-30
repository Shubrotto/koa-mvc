const Router = require("koa-router");
const router = new Router();
const { get, post } = require("./controller/userController");
router.get("/", get);
router.post("/user", post);
module.exports = router;
