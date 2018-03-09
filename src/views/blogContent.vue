<template>
    <layout>
        <!--正文内容-->
        <section class="blog-main" style="display: block;">
            <h2>{{blog.title}}</h2>
             <section class="article-tip">
                 <span>{{blog.date}}</span>
                 <span>栏目：{{blog.channelName}}</span>
             </section>
            <div v-html="blog.content"></div>
        </section>
    </layout>
</template>
<style>
    .blog-main{
        padding:20px 45px !important;
    }
    .blog-main h2{
        /*text-align: center;*/
        font-size: 36px;
        text-indent: 0.1em;
        margin:30px 0 20px;
        color: #555;
    }
    .article-tip{
        color: #999;
        margin:20px 5px;

    }
    .article-tip span{
        margin-right: 10px;
    }
    .blog-main p{
        font-size: 20px;
        color: #555;
        line-height: 44px;
        /*text-align: center;*/
    }
    .blog-main img{
        /*width: 300px;*/
        margin:20px auto;
        text-align: center;
    }
</style>
<script>
    import fetch from '../util/fetch';
    import layout from '../module/layout';
    export  default {
        data() {
            return {
                uuid:this.$route.params.uuid,
                blog:{}
            }
        },
        mounted(){
            this.getBlog();
        },
        methods:{
            getBlog(){
                var uuid=this.uuid;
                fetch.get(`/api/article/single/${uuid}`).then(({data})=>{
                    let blog=data.module;
                    this.blog=blog;
                })
            }
        },
        components:{
            layout
        }
    }
</script>