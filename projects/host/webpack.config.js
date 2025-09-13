import webpack from 'webpack';
const { ModuleFederationPlugin } = webpack.container;

export default (config) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          sudoku: 'sudoku@http://localhost:4201/remoteEntry.js',
          maze: 'maze@http://localhost:4202/remoteEntry.js',
        },
        shared: ['@angular/core', '@angular/common', '@angular/router'],
      }),
    ],
  };
};
