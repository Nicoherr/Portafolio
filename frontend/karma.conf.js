export default function (config) {
  config.set({
    frameworks: ['jasmine', 'vite'],

    files: [
      { pattern: 'src/**/*.spec.js', type: 'module', nocache: true },
      { pattern: 'src/**/*.spec.jsx', type: 'module', nocache: true }
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