module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/project/iapt-iaps/" : "/",
  transpileDependencies: ["vuetify"]
};
