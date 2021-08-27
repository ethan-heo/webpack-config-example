import { Configuration, RuleSetRule } from 'webpack';
import { WebpackPart } from "../types";

type PartRule = WebpackPart<RuleSetRule, Required<Pick<Configuration, 'module'>>>;

export const url: PartRule = {
    defaultOption: {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: "url-loader",
        options: {
            name: "assets/[name].[ext]?[hash]",
        },
    },
    development() {
        return {
            ...this.defaultOption,
            options: {
                ...this.defaultOption.options as Record<string, any>,
                publicPath: '/',
            }
        }
    },
    production() {
        return {
            ...this.defaultOption,
            options: {
                ...this.defaultOption.options as Record<string, any>,
                publicPath: '/public',
            }
        }
    },
    get(env) {
        return {
            module: {
                rules: [
                    this[env](),
                ],
            },
        }
    }
}

export const babel: PartRule = {
    defaultOption: {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        },
    },
    development() {
        return {
            ...this.defaultOption,
            options: {
                ...this.defaultOption.options as Record<string, any>,
            }
        }
    },
    production() {
        return {
            ...this.defaultOption,
            options: {
                ...this.defaultOption.options as Record<string, any>,
            }
        }
    },
    get(env) {
        return {
            module: {
                rules: [
                    this[env](),
                ],
            },
        }
    }
}

export const css: PartRule = {
    defaultOption: {
        test: /\.(css)$/i,
        exclude: /node_modules/,
        use: [
            "style-loader",
            "css-loader",
        ],
    },
    development() {
        return {
            ...this.defaultOption,
        }
    },
    production() {
        return {
            ...this.defaultOption,
        }
    },
    get(env) {
        return {
            module: {
                rules: [
                    this[env](),
                ],
            },
        }
    }
}