module.exports ={
  presets: [
    [
      '@babel/env',
      {
        'corejs': '3',
        'targets': {
          'browsers': [
            'last 5 versions',
            'ie >= 8'
          ]
        },
        'useBuiltIns': 'usage',
      }
    ],
    '@babel/preset-react'
  ],  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties'
  ]
}