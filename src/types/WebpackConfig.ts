// Webpack required overrides
export interface WebpackConfig {
  optimization: {
    runtimeChunk: boolean;
    splitChunks: any;
  };
  externals?: any;
  plugins: any[];
}
