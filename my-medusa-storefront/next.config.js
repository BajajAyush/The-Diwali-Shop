const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost","192.168.29.178","http://192.168.29.178:9090/medusa-server-new/maha-deepam-1666447701357.png"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
