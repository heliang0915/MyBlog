<template>
    <div class="blog-warp">
        <THeader></THeader>
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
            <slot></slot>
        </main>
        <TFooter></TFooter>
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
    import THeader from '../module/header';
    import TFooter from '../module/footer';
    export default {
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