function passUserToView() {
  res.locals.user = req.session.user ? req.session.user : null;
  next();
}
module.exports = passUserToView;