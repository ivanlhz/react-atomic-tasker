module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css|scss$': require.resolve('./test/style_mock.js'),
  },
  collectCoverageFrom: [
    "src/**/{!(index),}.js"
  ]
}