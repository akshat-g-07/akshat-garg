async function Logout(req, res) {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(200).json({ message: "OK" });
  }

  res.clearCookie("jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({ message: "OK" });
}

module.exports = Logout;
