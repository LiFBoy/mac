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
        target: 'http://121.40.128.121:9080',
        host: '121.40.128.121:9080'
    }
];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: proxy
});

//将其他路由，全部返回index.html
// server.app.get('*', function (req, res) {
//     res.sendFile(__dirname + '/index.html')
// });

//server.listen(3002,'172.27.35.4');

server.listen(3002);



