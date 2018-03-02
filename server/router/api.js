import express from 'express';
import fetch from '../util/fetch';
let router=express.Router();
//这一层做的请求代理
//做api代理
router.route('*').all((req,res)=>{
    fetch(req.originalUrl,req).then((response)=>{
        let {data}=response.data;
        res.send(JSON.stringify(data));
    }).catch((err)=>{
        console.log(err);
    });
})
export default router;