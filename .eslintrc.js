module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js', '**/*.spec.ts', '**/*.mock.ts'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		indent: ['error', 'tab', { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
		'max-len': [
			'error',
			{
				code: 120,
				tabWidth: 2,
				ignoreComments: true, //"comments": 80
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
	},
};
