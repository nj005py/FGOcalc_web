module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/FGOcalc_web/'
    : '/'
}