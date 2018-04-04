/**
 *
 */
import{createApp}from './app';
import '../assets/js/lazyload.js'
let {app,store,router}=createApp();

let loadLazy=()=>{
    setTimeout(function(){
        var body=document.documentElement||document.body;
        new LazyImg(body)
    },100)
}


if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
    console.log('初始化状态...');
      // alert(LazyImg);
      loadLazy();
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
         
          loadLazy();
        const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
        if (!asyncDataHooks.length) {
            return next()
        }
        Promise.all(asyncDataHooks.map(hook => hook({ store, route: to }))).then(() => {
           
                next()
        }).catch(next)
    })

    // actually mount to DOM
    app.$mount('#app');
})