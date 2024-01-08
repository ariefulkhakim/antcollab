/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
    output: 'standalone',
    eslint: {
        dirs: ['.'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    publicRuntimeConfig: {},
    serverRuntimeConfig: {},
    reactStrictMode: true,
};
