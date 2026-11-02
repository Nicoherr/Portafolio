export default function (config) {
  config.set({
    frameworks: ['vite', 'jasmine'],

    files: [
      { pattern: 'src/**/*.spec.js', type: 'module', watched: false, served: false }
    ],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-vite'
    ],

    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatch: false
  })
}