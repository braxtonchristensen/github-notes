module.exports={
  entry: './app/App.js',
  output: {
    filename: 'public/bundle.js'
  },
  devServer: {
    inline: true,
    port : 1337
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};