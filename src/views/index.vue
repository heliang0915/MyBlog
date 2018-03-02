<template>
    <div class="blog-warp">
        <header>
            <section class="blog-column">小浣熊的专栏</section>
            <i class="blog-short">小</i>
            <ul class="blog-info">
                <li>浏览数: <em>111</em></li>
                <li>浏览数: <em>11</em></li>
                <li>浏览数: <em>1</em></li>
            </ul>
            <section class="add-follow">添加关注</section>
        </header>
        <main>
            <ul class="blog-nav">
                <li class="active">
                    <a href="">专栏首页</a>
                </li>
                <li>
                    <a href="">全部文章</a>
                </li>
                <li>
                    <a href="">粉丝关注</a>
                </li>
            </ul>
            <section class="blog-main">
                <section class="article-list">
                    <h3><em>最新文章</em></h3>
                    <ul class="blog-ls">
                        <li class="blog-item" v-for="blog in blogs">
                            <a href="#">
                                <h4>{{blog.title}}</h4>
                                <section class="blog-content">
                                    <p>
                                        {{blog.content.substring(0,230)}}
                                    </p>
                                    <img :src="blog.pic" alt="">
                                </section>
                            </a>
                            <span> {{blog.date}}</span>
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
                        <section>
                            <a href="##"><span>社会</span></a>
                            <a href="##"><span>街舞</span></a>
                            <a href="##"><span>默认栏目</span></a>
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
        </main>
        <footer>尾巴</footer>
        <section class="fixed-header">
            <h1 class="blog-logo">
                <a href="#########">
                    <img src="../../assets/images/logo.png" alt="">
                </a>
            </h1>
            <section class="blog-user">
                <a href="#">&#xe6b0;</a>
                <span>呵</span>
            </section>
        </section>
    </div>
</template>
<script>
  import fetch from '../util/fetch';
  export  default {
      data(){
          return {
              blogs:[]
          }
      },
      methods:{
         getBlogList:function(){
            fetch.get(`/api/article/list?page=1`).then(({data})=>{
                let models=data.models;
                this.blogs=models;
                // console.log(data);
            })
         }
      },
      mounted(){
          this.getBlogList();
      }
  }
</script>
