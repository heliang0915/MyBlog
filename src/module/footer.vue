<template>
    <footer>
        <ul class="nav-list">
            <li v-for="i in 8"><a href="#">历史定位</a></li>
        </ul>
        <p class="copy-right">© Copyright 2001 - 2018 blogchina.com, All Rights Reserved</p>
        <p>京ICP证120511　京公网安备 11010802020321号</p>
        <p>客户服务热线：15110263473　客服邮箱：help@blogchina.com　 违法和不良信息举报电话：15110263473　举报邮箱：help@blogchina.com</p>
    </footer>
</template>
<style>
   footer{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       padding: 20px 0;
   }
    .nav-list{
        display: flex;
        margin-top: 10px;
        overflow: hidden;
        /*padding:20px;*/
    }
   .nav-list li a{
       color: #FFF;
       font-size: 14px;
       margin:2px;
   }
   .nav-list li a::after{
       content: '|';
       display: inline-block;
       margin-left: 5px;
   }
   .nav-list li:nth-last-child(1) a::after{
       content: '';
       /*display: inline-block;*/
       /*margin-left: 10px;*/
   }
   .nav-list li a:hover{
       color: #a72013;
   }
   .copy-right{
       font-size: 14px;
       margin-top:14px;
   }
   p{
       font-size: 13px;
       line-height: 24px;
   }
</style>