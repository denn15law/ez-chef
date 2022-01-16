const searchFunc = (req, res) => {
  console.log(req.body);
  res.send("searched");
};

module.exports = {
  searchFunc,
};
