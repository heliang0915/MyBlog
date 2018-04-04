<template>
    <layout>
        <section class="blog-main">
            <section class="article-list">
                <h3><em>最新文章</em></h3>
                <ul class="blog-ls">

                    <li class="blog-item" v-for="blog in blogs" v-show="blogs.length>0">
                        <router-link :to="'/blog/'+blog.uuid+'.html'">
                            <h4>{{blog.title}}</h4>
                            <section class="blog-content">
                                <p v-html="blog.content.substring(0,230).replace('<pre>','').replace('</pre>','')"></p>
                                <img lazy  :data-src="blog.pic"  alt="">
                            </section>
                        </router-link>
                        <span> {{blog.date}}</span>
                    </li>
                    <li class="blog-item" v-for="blog in blogs" v-show="blogs.length==0">
                        <section> 数据加载中...</section>
                    </li>
                </ul>
            </section>
            <section class="article-aside">
                <!--热门文章-->
                <section class="hot-article">
                    <h3 class="article-title">热门文章</h3>
                    <ul>
                        <li>
                            <a href="###">
                                <em>1</em>乐视手机新品将搭载人工智能
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                <em>2</em>余承东发文:华为反思闪存事件
                            </a>
                        </li>
                        <li><a href="###">
                            <em>3</em>iPhoneX领先安卓两年对
                        </a>
                        </li>
                        <li>
                            <a href="###">
                                <em>4</em>乐视手机新品将搭载人工智能
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                <em>5</em>余承东发文:华为反思闪存事件
                            </a>
                        </li>
                    </ul>
                </section>
                <!--栏目分类-->
                <section class="column-article">
                    <h3 class="article-title">栏目分类</h3>
                    <section class="article-items">
                        <a v-for="blog in blogs" href="##">
                            <span>{{blog.channelName}}</span>
                        </a>
                    </section>
                </section>
                <!--日期归档-->
                <section class="date-article">
                    <h3 class="article-title">日期归档</h3>
                    <ul>
                        <li>2018 戊戌年 (32)</li>
                        <li>2017 戊戌年 (32)</li>
                        <li>2016 戊戌年 (32)</li>
                        <li>2015 戊戌年 (32)</li>
                        <li>2014 戊戌年 (32)</li>
                        <li>2013 戊戌年 (32)</li>
                        <li>2012 戊戌年 (32)</li>
                    </ul>
                </section>
                <!--新增粉丝-->
                <section class="fan-article">
                    <h3 class="article-title">新增粉丝</h3>
                    <section>
                        <p>您还没有粉丝，您可以通过分享自己的满意文章</p>
                    </section>
                </section>
            </section>
        </section>
    </layout>
</template>
<script>
  import fetch from '../util/fetch';
  import layout from '../module/layout';
  export  default {
      data(){
          return {
              blogs:[]
          }
      },
      methods:{
         getBlogList:function(){
            fetch.post(`/api/article/list`,{
                page:1,
                params:{
                    title:''
                }
            }).then(({data})=>{
                let models=data.models;
                this.blogs=models;
            })
         }
      },
      mounted(){
          this.getBlogList();
      },
      components:{
          layout
      }
  }
</script>
