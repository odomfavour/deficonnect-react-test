module.exports = {
    // ...
    resolve: {
        fallback: {
            fs: false,
            'stream': require.resolve('stream-browserify'),
            'buffer': require.resolve('buffer/'),
            'util': require.resolve('util/'),
            'assert': require.resolve('assert/'),
        }
    },
    ignoreWarnings: [/Failed to parse source map/],
  };