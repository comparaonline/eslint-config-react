module.exports = {
  'extends': '@comparaonline',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react/no-unused-prop-types':[2, { skipShapeProps: true }]
  }
};
