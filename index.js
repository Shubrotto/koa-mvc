require("dotenv").config();
const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const router = require("./router");
const port = process.env.port || 4000;

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
