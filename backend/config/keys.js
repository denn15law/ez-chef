module.exports = {
  mongoLocal: `mongodb://${process.env.DB_SERVER}/${process.env.DB_NAME}`,
  mongoCloud: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ezchef-cluster.re5dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
