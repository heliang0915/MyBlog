/**
 * 定义web服务器 生产环境
 *@author heliang
 *@date 2017-05-26
 */
require('babel-register');
let app =require("./server").default;
let {conf:config} =require("../config");
let http=require('http');
let fs=require('fs');
let path=require('path');
let port=config.port||3000;
var https = require('https');
app.set("port",port);
//添加 Create HTTPS server.
let options = {
    key: fs.readFileSync(path.join(__dirname,'../certificate/1527875924810.key')),
    cert: fs.readFileSync(path.join(__dirname,'../certificate/1527875924810.pem'))
};

let server=http.createServer(app);
let httpsServer = https.createServer(options,app);



server.listen(port);
httpsServer.listen('4431');

let onListening=()=>{
    console.log("vue2渲染服务器启动.. 端口:%s",port);
}

let onError=(err)=>{
    if(err.code=="EADDRINUSE"){
        console.log("端口%s被占用",port);
    }else{
        console.log("出现错误%s",err.message);
    }
}

server.on('listening',onListening);
server.on('error',onError)
httpsServer.on('listening',onHttpServerListening)
httpsServer.on('error',onError);

function onHttpServerListening() {
    var addr = httpsServer.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log(`启动https服务器${bind}`);
    // debug('Listening on ' + bind);
}