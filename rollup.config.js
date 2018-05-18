import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const input = './index.js'

export default {
    input,
    external: ['react', 'react-dom'],
    plugins: [
        babel({
            plugins: ['transform-class-properties']
        }),
        resolve({
            browser: true
        }),
        commonjs({
            include: 'node_modules/**'
        })
    ],
    context: 'window',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'ghrepos',
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }
};