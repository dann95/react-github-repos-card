import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const input = './index.js'

export default {
    input,
    external: ['react', 'react-dom'],
    plugins: [
        postcss({
            extensions: [ '.css' ],
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        resolve({
            browser: true,
        }),
        babel({
            plugins: ['transform-class-properties']
        })
    ],
    context: 'window',
    output: {
        file: 'dist/ghrepos.js',
        format: 'umd',
        name: 'ghrepos',
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }
};