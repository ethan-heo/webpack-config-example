import { Configuration } from "webpack";
import merge from "webpack-merge";
import { rules, devTool, devServer, plugins } from "./parts";
import common from "./webpack.common";

const development = () => merge<Configuration>(
    {
        mode: 'development',
    },
    common,
    rules.babel.get('development'),
    rules.css.get('development'),
    rules.url.get('development'),
    plugins.html.get('development'),
    devServer,
    devTool,
)

export default development;