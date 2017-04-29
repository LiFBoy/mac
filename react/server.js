var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


// 相当于通过本地node服务代理请求到了
var proxy = [{

    path: '/appH5/*',
    target: 'http://222.46.27.218:8800',
    host: '222.46.27.218:8800'
},


    {
        path: '/app/*',
        target: 'http://222.46.27.218:8800',
        host: '222.46.27.218:8800'
    },

    {
        path: '/operationapp/*',
        target: 'http://222.46.27.218:8800',
        host: '222.46.27.218:8800'
    },
    {
        path: '/media/*',
        target: 'http://222.46.27.218:8800',
        host: '222.46.27.218:8800'
    },
    {
        path: '/v1/*',
        target: 'https://www.zrrulai.com',
        host: 'www.zrrulai.com'
    }

    // {
    //     path: '/v1/*',
    //     target: '121.40.128.121:9080',
    //     host: '121.40.128.121:9080'
    // }
];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: proxy
});


// server.listen(3002);
server.listen(3002);
// server.listen(4000);

// server.listen(3002);


