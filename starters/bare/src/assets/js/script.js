// access build-time environment variables passed via metalsmith.env() with @metalsmith/js-bundle
const env = process.env.NODE_ENV
if (env === 'development') {
  console.log(`Running in ${env} mode...`)
}

if (document.querySelector('.mode')) {
  document.querySelector('.mode').textContent = env
}
