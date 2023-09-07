const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Ajout d'un plugin pour gérer les fichiers HTML

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'], // Utilisez les loaders pour le CSS
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
  plugins: [
    // Ajout d'un plugin pour générer automatiquement un fichier HTML dans le répertoire de sortie
    new HtmlWebpackPlugin({
      template: './src/index.html', // Chemin vers votre fichier HTML source
      filename: 'index.html', // Nom du fichier HTML généré
    }),
  ],
};
