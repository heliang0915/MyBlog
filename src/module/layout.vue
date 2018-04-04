<template>
    <div class="blog-warp">
        <THeader v-show="isHeader"></THeader>
        <main>
            <ul class="blog-nav" v-show="isHeader">
                <li class="active">
                    <router-link to="/special">专栏首页</router-link>
                </li>
                <!--<li>-->
                    <!--<router-lspecialink to="/">全部文章</router-link>-->
                <!--</li>-->
                <li>
                    <router-link to="/">粉丝关注</router-link>
                </li>
            </ul>
            <slot></slot>
        </main>
        <TFooter></TFooter>
        <section class="fixed-header" v-show="isHeader">
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
    import THeader from '../module/header';
    import TFooter from '../module/footer';
    export default {
        props:{
           isHeader:{
               type:Boolean,
               default:true
           }
        },
        data(){
            return {

            }
        },
        components:{
            THeader,
            TFooter
        }
    }
</script>