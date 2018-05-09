<template>
  <div v-highlight>
		<el-button type="primary" plain @click="$router.go(-1)">返回</el-button>
    <br>
    <h3>less,sass,stylus的安装</h3>
    <pre><code>
      css-loader:在页面中以import或者require的形式引入css文件
      安装less: less,less-loader
      安装stylus: stylus,stylus-loader
      安装sass: sass,sass-loader,node-sass

      export default cutImg;
      import filters from './filters' //将全部过滤器放在 filters/index.js 中便于管理
      //技巧 同时 use 多个插件 被依赖的插件应放在偏后方
      Vue.use(VueAxios, axios, vuex)
      // 注册全局过滤器
      filters(Vue)

      inheritAttrs:false
      这个属性，如果子组件接收了，$attrs里面就不存在改值了，
      如果没有接受，则父组件传过来的值在$attrs里面可以拿到
      demo,如下

      // vuex
      vuex dispatch 异步
      vuex commit 同步
    </code></pre>
    <section>
      <h3>vue常见路由使用方式</h3>
      <pre><code>
        {
          path: '/orderDetail/:orderId',
          name: 'orderDetail',
          meta: {
            title: '订单详情'
          },
          component: orderDetail
        }
        $router.push({path:`/orderDetail/${orderId}`,params:{sign:'pay'}}
        则使用$route.params.orderId去参数

        {
          path: '/orderDetail',
          name: 'orderDetail',
          meta: {
            title: '订单详情'
          },
          component: orderDetail
        }
        $router.replace({path:`/orderDetail`,query:{sign:'pay'}}
        $route.query.orderId取参数

      </code></pre>
    </section>
    <section>
      <h3>图片上传插件vue-core-image-upload</h3>
      <div class="header">
        <p class="float-left">头像</p>
        <div style="display:block;width:50px;height:50px;">
            <vue-core-image-upload class="upload-block" text="" style="width:50px;height:50px;background-color:#999;" :crop="false" @imageuploaded="imageuploaded" inputAccept="image/*" :url="url" :data="auth" inputOfFile="headImg">
            </vue-core-image-upload>
          <img :src="imgUrl" class="header-logo" v-if="imgUrl">
        </div>
      </div>
    </section>
     <span class="pull-right">{{item.status | orderStatus}}<span v-show="item.status==4 || item.status == 3" :class="{colorBrown:item.evaluateStatus==0}">（{{item.evaluateStatus | commentStatus}}）</span>
      </span>
      <span @click="checked(item)" :style="colors">选中状态 {{item.checked}}</span>
      <span @click="checked(item)" :style="{color: textCor}">选中状态 {{item.checked}}</span>
  </div> 
</template>

<script>
	export { default } from './vueSummary.js'
</script>
