const defaultOptions = {
  pattern: '**'
}

/**
 * @param {String[]|Object|false} options
 * @param {String|String[]} [options.pattern=**] File patterns to apply the plugin to
 * @returns {import('metalsmith').Plugin}
 */
export default function localPlugin(options) {
  const action = 'nothing'
  options = { ...defaultOptions, ...options }
  return function fileDump(files, metalsmith, done) {
    const debug = metalsmith.debug('build:local-plugin')
    const matches = metalsmith.match(options.pattern)

    debug('Running %s on %s files', action, matches.length)
    matches.forEach((match) => {
      // do something
      files[match]
    })
    debug('Finished running %s', action)
    done()
  }
}
