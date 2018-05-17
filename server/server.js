import express from 'express';
import  path from 'path';
import  cookieParser from 'cookie-parser';
import  bodyParser from 'body-parser';
import {env,cacheTime} from '../config';
import api from './router/api';
import {useLog,fileLog} from './logs/logs';
import index from './router/';
import fs from 'fs';
import compression from 'compression';

let app=express();

//日志配置
useLog(app);

// 启用gzip压缩
app.use(compression({
    threshold:0
}));
// app.use(debug('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use((req,res,next)=>{
    let date=new Date();
    date.setTime(date.getTime()+cacheTime);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Cache-control","max-age:"+cacheTime);
    res.header("Expires",date.toUTCString());
    next();
})
app.use('/dist',express.static(path.join(__dirname,'/../dist/')));
app.use('/assets',express.static(path.join(__dirname,'/../assets/')));


app.use("/api/",api);

app.use("/",index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    console.log("404");
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         // console.log(err);
//         if (err.code === 404){
//             res.status(404).end('Not Found')
//         }else{
//             fs.readFile(path.join(__dirname,"/page/500.html"),(er,content)=>{
//                 console.log(err);
//                 res.status(err.status || 500).end(content.toString());
//             })
//         }
//
//         fileLog.error(err.stack);
//     });
// }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    if (err.code === 404){
        res.status(404).end('Not Found')
    }else{
        // res.status(err.status || 500).end("Internal Server Error "+err.stack)
        fs.readFile(path.join(__dirname,"/page/500.html"),(er,content)=>{
            res.status(err.status || 500).end(content.toString());
        })
    }
    fileLog.error(err.stack);
});



if(env!="development"){
    app.use(express.static(path.join(__dirname,"/../build/"+env)));
    app.use(express.static(path.join(__dirname,"/../build/server")));
    console.log("生产状态：静态目录地址==="+path.join(__dirname,"/../build/"+env));
}else{
    app.use(express.static(path.join(__dirname,"/../build/"+env)));
    app.use(express.static(path.join(__dirname,"/../build/dev_server")));
    console.log("开发状态：静态目录地址==="+path.join(__dirname,"/../build/"+env));
}

app.use(express.static(path.join(__dirname, 'public')));



export default app;
