import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import paths from './parts/paths';

const common = merge<Configuration>(
    {
		entry: {
			main: paths.combine('src', 'index.tsx'),
		},
        output: {
            filename: "[name].[chunkhash].js",
            path: paths.get('dist'),
        },
		resolve: {
			extensions: [".js", ".ts", ".ts", ".tsx"],
		},
	},
);

export default common;