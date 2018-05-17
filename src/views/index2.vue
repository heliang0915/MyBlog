<template>

    <layout :is-header="false">
        <div class="index-wrap">
            <div class="index-inner-wrap">
                <!-- 顶部 -->
                <div class="index-header">
                    <h1 href="" class="logo">
                        <img src="../../assets/images/logo2.png" alt="">
                    </h1>
                    <section class="blog-user">
                        <span>呵</span>
                        <div class="index-arrow" @click="changeTip">
                            hehe
                            <i></i>
                        </div>
                    </section>
                    <ul class="menu-list" v-show="showTip">
                        <li>
                            <a href="" @click="go($event,'/special')"  target="_blank">通 知</a>
                        </li>
                        <li>
                            <a href="" @click="go($event,'/')"  target="_blank">设 置</a>
                        </li>
                        <li>
                            <a href="" @click="go($event,'/')"  target="_blank">退 出</a>
                        </li>
                    </ul>
                </div>
                <!--频道信息 -->
                <ul class="channel-list">
                    <li v-for=" channel in schannels">
                        <router-link to="/special">
                            {{channel.name}}
                        </router-link>
                    </li>
                </ul>
                <!-- 博主列表 -->
                <ul class="channel-small-list">
                    <li v-for="channel in smailChannels">
                        <a href="#">{{channel.name}}</a>
                    </li>
                </ul>
                <!-- banner -->
                <div class="index-banner">
                    <a href="#">
                        <h3>全球互联网口述历史的光荣与梦想</h3>
                        <img lazy  data-src="../../assets/images/bg.jpg">
                    </a>
                    <div class="comment-info">
                    <span>
                        <a href=""> 参与[20000]|评论[36] </a>
                    </span>
                    </div>
                </div>
                <!-- 相关推荐 -->
                <ul class="recomment-list">
                    <li v-for="top in topList">
                        <a href="#">
                            <!--{{top}}-->
                            <h3>{{top.title}}</h3>
                            <p v-html="top.content.substr(0,58)"></p>
                            <div>
                                参与<em>11</em> 评论<em>25</em> 支持<em>27</em>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- 正文列表 -->
                <div class="blogs-list">
                    <div class="blog-left">
                        <dl v-for="i in 2">
                            <dt>
                                <h3>头条 | TOPLIST</h3>
                                <a href="#">更多>></a>
                            </dt>
                            <dd v-for="i in 3">
                                <h4>
                                    <a href="#">王小川：搜狗没在国内上市是遗憾，回归A股大势所趋</a>
                                </h4>
                                <div  class="blog-shutcontent">
                                    <i></i>
                                    <div class="bloger-info">
                                        <div>
                                            <span class="blog-username">李潜力</span>
                                            <span class="bloger-timer">2018-03-14 14:45:16</span>
                                        </div>
                                        <div>媒体人</div>
                                        <p>
                                            参与 <em>3459</em>  评论 <em>0</em> 支持 <em>1</em>
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    尽管巨头似乎在掌握着所有企业的命运，但王小川仍然对互联网的发展充满了乐观。他觉得，如果把科技行业的发展放在一个更长的时间维度来看的话，创新的步伐并不会停下来。就像是微软的诞生打破了IBM的垄断...
                                    <a href="#">[全文]</a>
                                </p>
                            </dd>
                        </dl>
                    </div>
                    <div class="blog-right">
                        <div class="right-banner">
                            <img lazy  data-src="../../assets/images/bg.jpg">
                        </div>
                        <div class="right-list">
                            <h4>科技 新知 生活</h4>
                            <ul v-for="i in 2" class="right-list-item">
                                <li v-for="m in 10">
                                    <a href="#">刘肇翦除窦氏后，为何改立邓绥为<em>作者名</em></a>
                                </li>
                                <li>
                                    <a href="#">刘肇翦除窦氏后，为何改立邓绥为<em>作者名2</em></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </layout>

</template>
<script>
    import layout from '../module/layout';
    import fetch from '../util/fetch';
    export default {
        data(){
            return{
                showTip:false,
                channels:[],
                smailChannels:[],
                topList:[]
            }
        },
       
        computed:{
            schannels(){
                // var channelAry=[];
                // channelAry.push("科技前沿");
                // channelAry.push("网络研究");
                // channelAry.push("出版中心");
                // channelAry.push("互联网历史");
                // channelAry.push("数字论坛");
                // channelAry.push("诗歌频道");
                // channelAry.push("专题中心");

                return this.channels.slice(0,8);
            },
            // smailChannels(){
            //     var ary=[];
            //     for(var i=0;i<24;i++){
            //         ary.push("人工智能");
            //     }
            //     return ary;
            // }
        },

        methods:{
            changeTip(){
                  this.showTip=!this.showTip;
            },
            getChannels(){
                // var uuid=this.uuid;
                fetch.post(`/api/channel/list`,{
                    page:1,
                    pageSize:100,
                    sort:{
                        order:1
                    }
                }).then(({data})=>{
                    let channels=data.models;
                    console.log(channels);
                    this.channels=channels;
                    this.smailChannels=channels;
                    // this.blog=blog;
                })
            },
            getTopList(){
                fetch.post(`/api/article/list`,{
                    page:1,
                    params:{}
                    // ,
                    // pageSize:100,
                    // sort:{
                    //     order:1
                    // }
                }).then(({data})=>{

                    let blogs=data.models;
                    this.topList=blogs;
                    console.log(blogs);
                    // this.blog=blog;
                })
            },
            go(e,path){
                 this.showTip=false;
                e.preventDefault();
                const {href} = this.$router.resolve({
                        path
                })
                window.open(href, '_blank')
            }
        },
        components:{
            layout
        },
        mounted(){
            this.getChannels();
            this.getTopList();

        }
    }

</script>



