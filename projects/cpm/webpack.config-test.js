const {
    shareAll,
    withModuleFederationPlugin,
  } = require('@angular-architects/module-federation/webpack');
  
  module.exports = withModuleFederationPlugin({
    name: 'mfe1',
  
    exposes: {
      // Update this whole line (both, left and right part):
      './Module': './projects/cpm/src/app/app.module.ts',
    },
  
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      }),
    },
  });