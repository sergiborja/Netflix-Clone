const jwt = require("jsonwebtoken");

module.exports = {
  sign(payload: any, secret: any, options: any) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (error: any, token: any) => {
        if (error) return reject(error);

        resolve(token);
      });
    });
  },
  verify(token: any, secret: any) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (error: any, payload: any) => {
        if (error) return reject(error);

        resolve(payload);
      });
    });
  },
};
