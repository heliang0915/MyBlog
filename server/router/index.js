import express  from 'express';
import fs  from 'fs';
import path  from 'path';
import  seoMap from '../../src/seo/seoMap';
import minify from 'html-minifier';
const {createBundleRenderer} = require('vue-server-renderer');
const resolve = file => path.resolve(__dirname, file);
import  {env} from '../../config';
let router=express.Router();
let template = fs.readFileSync(path.join(__dirname,'../template/template.html'),'utf-8');
const serverBundle = require('../../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../../dist/vue-ssr-client-manifest.json');
//压缩html代码
// var reg=/\s+(?=<)|\s+$|\(?<=>\)\s+/g;
// if(env!="development"){
//     template=template.replace(reg,'');
// }

let renderer=createBundleRenderer(serverBundle,{
    template,
    clientManifest,
    basedir: resolve('../../dist'),
    runInNewContext: false
});
//合并上下文
let mergeContext=(context,path)=>{

    var tmp=path;
    if(path.indexOf(".html")>-1){
        tmp=path.substr(0,path.lastIndexOf("/"))+"/:uuid.html";
    }
    console.log("tmp>>>>>>"+tmp);
    let seoItem=seoMap[tmp];
    if(seoItem){
        let {seo}=seoItem;
        if(seo){
            Object.keys(seo).forEach((key)=>{
                context[key]=seo[key];
            })
        }
    }else{
        let seoItem=seoMap["*"];
        let {seo}=seoItem;
        if(seo){
            Object.keys(seo).forEach((key)=>{
                context[key]=seo[key];
            })
        }
    }
    return context;
}

router.route("*").all((req,res,next)=>{
    let context={
        title: '默认标题',
        url:req.originalUrl
    }
    context=mergeContext(context,req.originalUrl);
    const s = Date.now()
    renderer.renderToString(context, (err, html) => {
        if(env!="development"){
            //压缩html代码
            html=minify.minify(html,{
                collapseWhitespace:true,
                removeEmptyAttributes:true,
                minifyJS:true,
                minifyCSS:true
            })
        }
        if (err) {
            next(err);
        } else {
            res.end(html);
        }
    })
})
export default router;