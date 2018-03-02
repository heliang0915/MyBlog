/**
 * 服务端接口转发
 */
import axios from 'axios';
import {env,conf} from '../../config';

//转发请求
export default function(url,req){
    let apiURl=conf.api;
    if(url.indexOf("/api/")>-1){
        let urlReg=/(\/\w+)/;
        let  query="";
        let pathName="";
        let queryStr="";
        if(url.indexOf('?')==-1){
            url=url.replace(urlReg,'');
            url=apiURl+url;
        }else{
            query=url.split('?');
            pathName=query[0];
            queryStr=query[1]==undefined?"":query[1];
            pathName=pathName.replace(urlReg,'');
            url=apiURl+pathName+"?"+queryStr;
        }
    }
    console.log("代理后的url地址[%s]",url+"?temp="+Math.random())
    let params={}
    if(req.method=="POST"){
        params=req.body;
    }
    return new Promise((resolve,reject)=>{
        axios[req.method.toString().toLowerCase()](url+"?temp="+Math.random(), params).then((data)=>{
            var info= {
                data,
                err:null
            }
            resolve(info);
        }).catch((err)=>{
            console.log(err);
            var info= {
                data:null,
                err:err
            }
            reject(info);
        });
    })
}