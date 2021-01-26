<template>
        <div class="home">
                <div class="header">
                        <div class="header-body">
                                <div class="logo-box">
                                        <img class="logo" src="/img/logo.png" />
                                </div>
                                <div class="head">
                                        <nuxt-link class="router" to="/"
                                                >首页</nuxt-link
                                        >
                                        <nuxt-link class="router" to="/zqbf"
                                                >足球比分</nuxt-link
                                        >
                                        <nuxt-link class="router" to="/zqzs"
                                                >足球指数</nuxt-link
                                        >
                                        <nuxt-link class="router" to="/lqbf"
                                                >篮球比分</nuxt-link
                                        >
                                        <nuxt-link class="router" to="/qdzlk"
                                                >球队资料库</nuxt-link
                                        >
                                        <el-dropdown>
                                                <span class="el-dropdown-link">
                                                        <nuxt-link
                                                                to=""
                                                                class="router"
                                                        >
                                                                赛事新闻</nuxt-link
                                                        ><i
                                                                class="el-icon-arrow-down el-icon--right"
                                                        ></i>
                                                </span>
                                                <el-dropdown-menu
                                                        slot="dropdown"
                                                >
                                                        <el-dropdown-item
                                                                >体坛看点</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >国际足球</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >中国足球</el-dropdown-item
                                                        ><el-dropdown-item
                                                                >NBA</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >CBA</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >篮球公园</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >足球视频</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >篮球视频</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >综合视频</el-dropdown-item
                                                        >
                                                </el-dropdown-menu>
                                        </el-dropdown>
                                        <el-dropdown>
                                                <span
                                                        class="el-dropdown-link"
                                                        to=""
                                                >
                                                        <nuxt-link
                                                                to=""
                                                                class="router"
                                                        >
                                                                赛事分析</nuxt-link
                                                        >
                                                        <i
                                                                class="el-icon-arrow-down el-icon--right"
                                                        ></i>
                                                </span>
                                                <el-dropdown-menu
                                                        slot="dropdown"
                                                >
                                                        <el-dropdown-item
                                                                >足球赛事分析</el-dropdown-item
                                                        >
                                                        <el-dropdown-item
                                                                >篮球赛事分析</el-dropdown-item
                                                        >
                                                </el-dropdown-menu>
                                        </el-dropdown>
                                        <nuxt-link
                                                class="router"
                                                to="/jmb"
                                                >cctv5节目表</nuxt-link
                                        >
                                
                                </div>
                        </div>
                        
                </div>
               <Shouye/>
                <div class="footer">
                        <div class="link">
                                <router-link to="" class="router2"
                                        >彩吧助手</router-link
                                >
                                <span>|</span>
                                <router-link to="" class="router2"
                                        >免费小说阅读网</router-link
                                >
                                <span>|</span>
                                <router-link to="" class="router2"
                                        >免费小说阅读网</router-link
                                >
                                <span>|</span>
                                <router-link to="" class="router2"
                                        >MT小说网</router-link
                                >
                                <span>|</span>
                                <router-link to="" class="router2"
                                        >开奖助手</router-link
                                >
                        </div>
                        <div class="profiles">
                                cctv5直播网是一家专注NBA直播定球直播CNTV直播全运会直捶的网站。
                        </div>
                        <div class="word">
                                我们相信在你的支持下我们会更加迅速的成长。
                        </div>
                        <div class="copyright">
                                Copyright2012
                                cctv5在线直播网www.cctvwu.com版权所有
                        </div>
                </div>
                <!-- 右侧二维码 -->
                 <div class="asid_share" id="asid_share">
      <div class="asid_share_box relative">
        <a href="#">
          <span class="icon-weixin iconfont spann"></span>
        </a>
        <div class="asid_sha_layer" style=" display: none">
          <p class="sweep_img"><img src="/img/547.png"  /></p>
        </div>
      </div>
      <div class="asid_share_box relative">
        <a href="#">
          <span class="icon-qq iconfont spann"></span>
          </a>
        <div class="asid_sha_layer" style=" display: none">
          <p class="sweep_img"><img src="/img/547.png"  /></p>
        </div>
      </div>
      <div class="asid_share_box relative" style="display: none">
        <a href="#">
          <span class="icon-huidaodingbu iconfont spann"></span>
        </a>
      </div>
    </div>

        </div>
</template>

<script>
import Shouye from '~/pages/shouye.vue';

export default {
        head() {
                return { 
                        link: [{ rel: "stylesheet", href: "/css/ycl.css" }],  
                };
                },
        components: {
                Shouye
        },
};
</script>

<style scoped>
.copyright {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 20px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #707070;
        opacity: 1;
}
.word {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 20px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #D5D5D5;
        opacity: 1;
}
.profiles {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #2B2B2B;
        opacity: 1;
}
.link {
        color: #707070;
        display: flex;
        justify-content: space-between;
        width: 450px;
        height: 65px;
        line-height: 65px;
        /* border-right: 1px solid gray; */
}
.footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F9F9F9;
        min-width: 1200px;
        height: 160px;
}
.el-dropdown-link {
        font-size: 16px;
        cursor: pointer;
        color: #000;
}
.router2 {
        height: 65px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 65px;
        color: #707070;
        opacity: 1;
}
.router {
        margin-left: 45px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #000;
        opacity: 1;
}
.head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* width: 800px; */
        height: 70px;
        line-height: 70px;
}
.logo-box {
        display: flex;
        align-items: center;
        width: 142px;
        height: 70px;
        background: #fff;
}
.header-body {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;
        height: 70px;
}
.header {
        margin-bottom: 30px;
        border-bottom: 3px solid #ED0E08;
        min-width: 1200px;
        height: 70px;
}
.home {
        width: 100%;
        height: 100%;
}
</style>