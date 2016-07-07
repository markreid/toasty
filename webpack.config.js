module.exports = {
    entry: './src/toasty.js',
    output: {
        libraryTarget: 'var',
        library: 'toasty',
        filename: './dist/toasty.js',
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            }
          ]
    }

}
