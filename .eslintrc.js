module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'off',
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
        'import/extensions': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            }
        ],
        'no-multi-spaces': 'off',
        'no-warning-comments': ['warn', {
            "terms": [''],
            "location": "start"
        }]
    },
};
