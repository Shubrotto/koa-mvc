const { get } = require("../model/userModel");
exports.get = (ctx) => {
  try {
    const userData = get();
    ctx.status = 200;
    ctx.body = { statusCode: "Successfully fetch data!", user: userData };
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = { statusCode: "fail", user: userData };
  }
};
