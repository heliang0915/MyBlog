<template>
    <div id="app">
        <transition name="fade-router" mode="in-out">
                <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import '../assets/css/reset.css';
    import '../assets/css/common.css';
    import '../assets/css/index.css';
    import '../assets/css/special.css';
   //   export default{
   //    data(){
   //      return {}
   //    },
   //    mounted(){
   //          alert(LazyImg);
   //          new LazyImg(document.querySelector('#app'))
   //      }
   // }
</script>
