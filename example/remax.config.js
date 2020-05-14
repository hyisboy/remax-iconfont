const {
  RemaxIconfontPlugin,
} = require("../packages/remax-iconfont-plugin/dist/index");

module.exports = {
  one: true,
  output: "dist/" + process.env.REMAX_PLATFORM,
  plugins: [
    RemaxIconfontPlugin({
      cssURL: "http://at.alicdn.com/t/font_8d5l8fzk5b87iudi.css",
    }),
  ],
};
