const models = require("../models/User");

mongoose.connect(db);

const createUsers = async () => {
  const user1 = new models.User({
    first_name: "Kyle",
    last_name: "Liang",
    email: "kliang1194@gmail.com",
    password: "123456",
  });

  await user1.save();
};

export { createUsers };
