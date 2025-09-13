import webpack from 'webpack';
const { ModuleFederationPlugin } = webpack.container;

export default (config) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'maze',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/app/app.ts',
        },
        shared: ['@angular/core', '@angular/common', '@angular/router'],
      }),
    ],
  };
};
