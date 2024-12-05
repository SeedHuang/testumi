module.exports = {
    extends: require.resolve('@umijs/max/eslint'),
    rules: {
        'no-useless-escape': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react-hooks/rules-of-hooks': 'off',
    },
};
