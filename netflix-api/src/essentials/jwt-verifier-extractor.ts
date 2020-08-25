const jwtPromised = require("./jwt-promised");

module.exports = (secret: any, errorHandler: any) => (
  req: any,
  res: any,
  next: any
) => {
  if (req.header("authorization")) {
    try {
      const [, token] = req.header("authorization").split(" ");

      jwtPromised
        .verify(token, secret)
        .then((payload: any) => {
          req.payload = payload;

          next();
        })
        .catch((error: any) => errorHandler(error, res));
    } catch (error) {
      errorHandler(error, res);
    }
  } else {
    next();
  }
};
