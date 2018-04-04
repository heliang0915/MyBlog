/**
 *   SEO和路由配置
 */
import vueRouter from '../routes/asyncRoutes';
let {indexComponent,blogContent,specialColumn,notFoundComponent}=vueRouter
let seoMap={
    "/":{
        seo:{
            title:"首页",
            keywords:"首页关键字",
            description:"首页描述",
        },
        component:indexComponent
    },
    "/special":{
        seo:{
            title:"博客专栏",
            keywords:"博客专栏关键字",
            description:"博客专栏描述",
        },
        component:specialColumn
    },
    "/blog/:uuid.html":{
        seo:{
            title:"博客正文",
            keywords:"博客正文关键字",
            description:"博客正文描述",
        },
        component:blogContent
    },
    "*":{
        seo: {
            title: "找不到了",
            keywords: "找不到了",
            description: "找不到了"
        },
        component:notFoundComponent
    }
}

export default seoMap;