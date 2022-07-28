[<img src="https://kikoda.com/wp-content/uploads/2019/07/Logo_White_bg.svg" width="300"/>](https://kikoda.com)
# Kikoda Generated Config Webpack Plugin

[![NPM](https://img.shields.io/npm/v/@kikoda/delivery?color=39a356&label=npm)](https://www.npmjs.com/package/@kikoda/generated-config)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](https://github.com/KikodaCode/generated-config/blob/main/LICENSE)

Use this Kikoda Generated Config webpack plugin.

## Install from NPM:
```
yarn add --dev @kikoda/generated-config

# or

npm install @kikoda/generated-config --save-dev
```

## Usage

### Generaged Config for webpack apps
Use this plugin to inject config values depending on environment.

#### CRACO
Add this to your `craco.config.js`:

```typescript
import { GeneratedConfig } from '@kikoda/delivery';

const { fileName } = new GeneratedConfig({
  stage: "local",
  servicePath: resolve(__dirname, "./"),
  outDir: "public",
  additionalConfig: {
    // only for local environmental overrides... this will be dynamically populated at deploy-time for each stage
    platform: {
      backend: {
        endpoint: "http://localhost:8080/",
      },
    },
  },
});
​
// only include config file stuff, no mfe config
module.exports = {
  plugins: [{ plugin: WebpackConfigFilePlugin(fileName) }],
};
```

## Opening Issues

If you encounter a bug with this package, we want to hear about it. Before opening a new issue, search the existing issues to avoid duplicates.

When opening an issue, include the Kikoda Construct Library version, Node version, and stack trace if available. In addition, include the steps to reproduce when appropriate.

You can also open an issue for a feature request.

## Contributing

If you find an issue with this package and have a fix, please feel free to open a pull request following the [procedures](CONTRIBUTING.md).

## Testing

If you contribute to this package you can run the tests using `yarn test`.

## License

Unless explicitly stated otherwise all files in this repository are licensed under the Apache License Version 2.0.

This product includes software developed at Kikoda (https://www.kikoda.com). Copyright 2022 Kikoda, LLC.