// vue.config.js
module.exports = {
    // options...
    devServer: {
          proxy: process.env.VUE_APP_API_URL,
      }
  }