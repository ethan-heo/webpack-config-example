
import { Configuration } from "webpack";

export default {
	devServer: {
		port: 8000,
		historyApiFallback: true,
		open: true,
		hot: true,
	},
} as Configuration;
