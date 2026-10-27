import path from "node:path"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __filename = import.meta.filename
const __dirname = import.meta.dirname

const isProd = process.env.NODE_ENV === "production"

export default {
    entry:path.resolve(__dirname, "src","js","main.js"),
    output:{
        path: path.resolve(__dirname, "public","dist"),
        filename: "main.bunle.js",
        clean: true
    },
    devtool: 'source-map',
    devServer:{
        static:{directory: path.join(__dirname, 'public')},
        compress:true,
        port:5000,
        hot:true
    },
    module:{
        rules:[
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src', 'js'),
                type: 'javascript/auto',
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    { loader: "css-loader", options: { url: false } },
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        ...(isProd ? [new MiniCssExtractPlugin({ filename: "main.css" })] : []),
    ],
}