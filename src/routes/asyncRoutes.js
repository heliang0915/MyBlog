/**
 * vue客户端路由会映射到服务器端 动态路由
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
//首页路由
let vueRouterConfig={
    indexComponent:"index",
    blogContent:"blogContent",
    notFoundComponent:"NotFound"
}
let vueRouter={};
Object.keys(vueRouterConfig).forEach((key)=>{
    makeComponent(key,vueRouterConfig[key]);
})
//构造组件列表
function makeComponent(key,vueFile){
    let component=r => require.ensure([], () => r(require(`../views/${vueFile}`)), 'indexComponent')
    vueRouter[key]=component;
}
export default vueRouter