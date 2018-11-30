jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

require('../../node_modules/jasmine-expect/src/index.js') // hack to load jasmine-matchers before out specs so it gets bundled

export * from './callSpec'
export * from './executeSpec'
export * from './formatSpec'
export * from './imageHomeSpec'
export * from './executionContextSpec'
export * from './executeVirtualCommand/executeVirtualCommandSpec'
export * from './executeVirtualCommand/substitutionSpec'
export * from './executeVirtualCommand/variableSpec'
export * from './testAssetsSpec'
export * from './util/cliSpec'
export * from './util/htmlSpec'
export * from './util/fileSpec'
export * from './util/imageBuiltInSpec'
export * from './util/imageCompareSpec'
export * from './util/imageExtractInfoSpec'
export * from './util/miscSpec'
export * from './util/supportSpec'
