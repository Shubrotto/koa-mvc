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

exports.post = (ctx) => {
  try {
    const newUser = ctx.request.body;
    ctx.status = 200;
    ctx.body = { statusCode: "Successfully created data!", user: newUser };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { statusCode: "fail", user: user };
  }
};
