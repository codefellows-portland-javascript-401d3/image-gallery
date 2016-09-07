const jwt = require('jsonwebtoken');
const secret = process.env.APP_SECRET || 'app_sekrit';

module.exports = {
  sign (user) {
    return new Promise ( (resolve, reject) => {
      const signObj = {id: user.id, name: user.username, roles: user.roles};
      jwt.sign(signObj, secret, null, (err, token) => {
        if (err) return reject(err);
        resolve({token, signObj});
      });
    });
  },

  verify (token) {
    return new Promise ( (resolve, reject) => {
      jwt.verify(token, secret, (err, payload) => {
        if (err) return reject(err);
        resolve(payload);
      });
    });
  }
};
