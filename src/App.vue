<template>
    <div id="app">
        <transition name="fade-router" mode="in-out">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    import '../assets/css/reset.css';
    import '../assets/css/common.css';
    import '../assets/css/index.css';
</script>