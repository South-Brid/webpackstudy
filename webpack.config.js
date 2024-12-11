const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const config = {
    //修改入口
    entry: {
        'login':path.resolve(__dirname, './src/login/index.js'),
        'content':path.resolve(__dirname, './src/content/index.js'),
        'publish':path.resolve(__dirname, './src/publish/index.js'),
    },
    //修改出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name]/index.js', //匹配多入口中的名字
        clean: true
    },
    //配置网页
    plugins: [
        new HtmlWebpackPlugin({  //模块1输入输出网页
            template: path.resolve(__dirname,'public/login.html'),
            filename: path.resolve(__dirname,'dist/login/index.html'),
            useCdn:process.env.NODE_ENV === 'production',
            chunks: ['login']  //网页打包完成后引入上面的login模块
        }),
        new HtmlWebpackPlugin({  //模块2输入输出网页
            template: path.resolve(__dirname,'public/content.html'),
            filename: path.resolve(__dirname,'dist/content/index.html'),
            useCdn:process.env.NODE_ENV === 'production',
            chunks: ['content']  //网页打包完成后引入上面的login模块
        }),
        new HtmlWebpackPlugin({  //模块2输入输出网页
            template: path.resolve(__dirname,'public/publish.html'),
            filename: path.resolve(__dirname,'dist/publish/index.html'),
            useCdn:process.env.NODE_ENV === 'production',
            chunks: ['publish']  //网页打包完成后引入上面的login模块
        }),
        new MiniCssExtractPlugin({  //配置输出的css路径
            filename:'./[name]/index.css',
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    //配置加载器
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                use: [process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader'],
            },{
                test: /\.less$/i,
                use: [
                    process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },{
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ],
    },
    //CSS
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
        //抽取公共模块
        splitChunks: {
            chunks: 'all', // 分割所有模块（同步和异步）
            cacheGroups: {
                // 配置公共模块提取
                commons: {
                    name(module, chunks, cacheGroupKey) {
                        return `shared/commons`; // 输出到 shared 文件夹下
                    },
                    minSize: 0,
                    minChunks: 2,            // 至少被两个入口引用
                    priority: -5,            // 优先级（负值表示较低的优先级）
                    reuseExistingChunk: true, // 如果已有公共模块块，则复用
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 匹配 node_modules
                    name: 'shared/vendors',
                    priority: -10,
                    chunks: 'all',
                },
            },
        },
    },
    //设置模式
    mode: "development", //开发模式
    //解析别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
        }
    }
};
//开发模式使用sourcemap插件
if (process.env.NODE_ENV === "development") {
    config.devtool = "inline-source-map";
}

//生产模式防止重复引入
if (process.env.NODE_ENV === "production") {
    config.externals = {
        /*
        import value from key
        key:对应上面的位置
        value：对应上面的位置
        这里主要是第三方包
       */
        "bootstrap/dist/css/bootstrap.min.css": "bootstrap",  //value不能是空,写入字符串占位
        "axios" : "axios",
        'form-serialize' : 'serialize',
        '@wangeditor/editor' : 'wangEditor'
    }
}

module.exports = config;