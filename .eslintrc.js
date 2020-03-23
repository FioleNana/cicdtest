module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    overrides: [
        {
            files: [
                '**/*.{j,t}s?(x)',
                '**/*.spec.{j,t}s?(x)',
                '**/tests/e2e/**/*.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
