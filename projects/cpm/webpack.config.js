const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'cpm',

  exposes: {
    // Update this whole line (both, left and right part):
    './Module': './projects/cpm/src/app/app.module.ts',
  },
  // shared: {
  //   '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '17.1.2' },
  //   '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '17.1.2' },
  //   // ... other shared modules
  //   '@angular/material/sidenav': { singleton: true, strictVersion: true, requiredVersion: '17.1.2' },
  //   '@angular/material/button': { singleton: true, strictVersion: true, requiredVersion: '17.1.2' },
  // },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});