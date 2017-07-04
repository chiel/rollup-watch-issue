import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'src/server/index.js',
	dest: 'dist/server.js',
	format: 'cjs',
	plugins: [
		resolve({
			jsnext: true,
			preferBuiltins: true,
		}),
		commonjs(),
		json(),
		babel({
			plugins: [
				'external-helpers',
			],
			presets: [
				['env', {
					targets: { node: 'current' },
					modules: false,
				}],
			],
		}),
	],
};
