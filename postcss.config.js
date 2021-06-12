module.exports = {
    plugins: [
      require('postcss-preset-env')({
        browsers: [
            "ie >= 11",
            "last 2 version"
          ],
      }),
    ],
};
