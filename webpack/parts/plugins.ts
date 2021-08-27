import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';
import paths from './paths';
import { WebpackPart } from '../types';

type PartPlugin<T> = WebpackPart<T, {
    plugins: WebpackPluginInstance[];
}>;

export const html: PartPlugin<HtmlWebpackPlugin.Options> = {
    defaultOption: {
        template: paths.combine('root', 'public', 'index.html'),
    },
    production() {
        return {
            ...this.defaultOption,
            publicPath: '/public',
        }
    },
    development() {
        return {
            ...this.defaultOption,
            publicPath: '/',
        }
    },
    get(env) {
        return {
            plugins: [
                new HtmlWebpackPlugin(this[env]()),
            ]
        }
    },
} 