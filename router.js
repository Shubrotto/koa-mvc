const Router = require("koa-router");
const router = new Router();
const { get } = require("./controller/userController");
router.get("/", get);

module.exports = router;
