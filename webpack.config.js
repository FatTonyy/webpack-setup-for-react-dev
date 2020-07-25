const path = require("path");

module.exports = {
	entry: "./app/App.js",
	output: {
		publicPath: "/",
		path: path.resolve(__dirname, "app"),
		filename: "bundled.js",
	},
	mode: "development",
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "app"),
		historyApiFallback: { index: "index.html" },
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-react",
							["@babel/preset-env", { targets: { node: "12" } }],
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
