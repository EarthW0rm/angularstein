const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function(env) {

    const isOnLine = typeof env != 'undefined' && typeof env.ONLINE != 'undefined';
    console.log(`Run in on-line mode ${isOnLine}`);
    return {
        entry: './app/index.ts'
        , output:{
            path: __dirname + '/dist'
            , filename: 'app.js'
        }
        ,devServer:{
            port: 9595
            , contentBase: './dist'
        }
        , resolve:{
            extensions: ['.js', '.ts', '.scss', '.css']
            , alias: {
                modules: __dirname + '/node_modules'
            }
        }    
        , module: {
            rules: [
                {
                    test: /\.ts$/
                    , exclude: /(node_modules|bower_components)/
                    , use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                }
                ,{
                    test: /\.css$/
                    , use: ExtractTextPlugin.extract({
                        use: [ 'css-loader']
                    })
                }
                ,{
                    test: /\.scss$/
                    , exclude: /(node_modules|bower_components)/
                    , use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                }            
                ,{
                    test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/
                    , use: [
                        {
                        loader: "file-loader",
                        }
                    ]
                }
                
                ,{
                    test: /\.html$/
                    , exclude: /(node_modules|bower_components)/
                    , use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
                }
                ,{
                    test: /\.(png|jp(e*)g)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        } 
                    }]
                }
            ]
        }
        , plugins: [
            new ExtractTextPlugin({
                filename: 'app.css'
                , allChunks: true
            })
            ,isOnLine ? new HtmlWebPackPlugin({
                template: "./Views/Shared/_DevTemplateLayout.cshtml",
                filename: "../Views/Shared/_Layout.cshtml",
                inject: false
            }) : new HtmlWebPackPlugin({
                template: "./Views/Shared/_PrdTemplateLayout.cshtml",
                filename: "../Views/Shared/_Layout.cshtml",
                inject: true
            })
            // , new webpack.DefinePlugin({
            //     'process.env': {
            //         'API_URL': JSON.stringify(env.API_URL)
            //     }
            // })
        ]
    }
};