const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
            test: /\.jsx?$/,
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            // flags to apply these rules, even if they are overridden (advanced option)
            loader: "babel-loader",
            // the loader which should be applied, it'll be resolved relative to the context
            // -loader suffix is no longer optional in webpack2 for clarity reasons
            // see webpack 1 upgrade guide
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "chrome":"51"
                    },
                    "debug": true
                  }
                ]
              ]
            }
        }
      ]
  }
};