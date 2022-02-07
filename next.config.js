const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([[optimizedImages, { optimizeImagesInDev: true }]], {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    disableStaticImages: true,
  },
})
