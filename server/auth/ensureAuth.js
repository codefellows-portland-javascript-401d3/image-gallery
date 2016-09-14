const tokenCheck = require('./token');

module.exports = function ensureAuth(request, response, next) {
  // checking for CORS Stuffs
  if (request.method === 'OPTIONS') return next();

  const authHeader = request.headers.authorization;
  const token = authHeader ? authHeader.replace('Bearer ', '') : '';

  if (!token) {
    return response.status(403).json({
      error: 'Authentication failed, no token provided'
    });
  }

  tokenCheck.verify(token)
    .then(payload => {
      request.user = payload;
      next();
    })
    .catch(() => {
      response.status(403).json({
        error: 'Authentication failed, invalid token'
      });
    });
};
