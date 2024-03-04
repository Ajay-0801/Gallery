const CheckLogin = async (req, res, next) => {
  const cookie = req.cookies;
  //   console.log(cookie);
  if (!cookie.uid) return res.redirect("/login");
  next();
};
module.exports = CheckLogin;
