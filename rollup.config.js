import commonjs from 'rollup-plugin-commonjs';
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
	],
};
