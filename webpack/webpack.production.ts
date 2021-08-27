import { Configuration } from "webpack";
import merge from "webpack-merge";
import { rules, devTool, devServer, plugins } from "./parts";
import common from "./webpack.common";

const production = () => merge<Configuration>(
    {
        mode: 'production',
    },
    common,
    rules.babel.get('production'),
    rules.css.get('production'),
    rules.url.get('production'),
    plugins.html.get('production'),
    devServer,
    devTool,
)

export default production;