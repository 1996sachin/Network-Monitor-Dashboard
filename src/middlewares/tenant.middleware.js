module.exports = (req, res, next) => {
  req.orgId = req.user.organization_id;
  next();
};
