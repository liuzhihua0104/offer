import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Me from '@/components/Me'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/login',
    	component:Login
    },
    {
       path:'/me',
       component:Me,
       beforeEnter:((to,from,next)=>{
          next();
          if(localStorage.getItem("cityNamesssssssss")){
             next();
          }else{
            next("/login");
          }

       })
    }
  ]
})

// router.beforeEach((to,from,next)=>{
// 	next();
// 	if(localStorage.getItem("city")){
// 		next('/');
// 	}else{
// 		next('/login');
// 	}
// 	document.documentElement.scrollTop = 0;
// })

export default router;
