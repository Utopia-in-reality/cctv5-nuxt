<template>
    <div class="shouye1">
            <div class="container">
<div class="shouye1-left">
                    <div class="dqwz">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>赛事新闻</el-breadcrumb-item>
  <el-breadcrumb-item>体坛看点</el-breadcrumb-item>

</el-breadcrumb>
                    </div>
                        <div class="xgtj">
                                <div class="xgtj-body">
                                        <a
                                                href=""
                                                class="xgtj-body1"
                                                v-for="xgtj in xgtjs"
                                                :key="xgtj.xgtjname"
                                        >
                                                <div class="xgtj-name">
                                                        <!-- <img src="/img/xgtj.png" /> -->
                                                        <img :src="xgtj.img" />
                                                </div>
                                                <div class="xgtj-word">
                                                        <div class="xgtj-w-title">
                                                                {{
                                                                        xgtj.xgtjname
                                                                                | ellipsis2
                                                                }}
                                                                <!-- ellipsis 过滤器 -->
                                                        </div>
                                                        <span class="xgtj-w-time">
                                                                {{xgtj.time
                                                                }}</span
                                                        >
                                                </div>
                                        </a>
                                </div>
                        </div>
                        <div class="zxf_pagediv"></div>
            </div>
             <div class="shouye1-right">
                    <Zxzx/>
                <Rmpdzb/>
                <Dyrmbq/>
                </div>
            </div>
            
    </div>
</template>
<script>
import Dyrmbq from '../components/dyrmbq.vue';
import Rmpdzb from '../components/rmpdzb.vue';
import Zxzx from '../components/zxzx.vue';
    export default {
         components: { Zxzx, Rmpdzb, Dyrmbq },
        head() {
                return { 
                        link: [{ rel: "stylesheet", href: "/css/toPage.css" }],  
                };
        },
          filters: {
                ellipsis2(value) {
                        if (!value) return "";
                        if (value.length > 35) {
                                return value.slice(0, 35) + "...";
                        }
                        return value;
                },
        },
        data() {
            return {
                 xgtjs: [
                                {
                                        img: require("../static/img/lqxw-1.png"),
                                        xgtjname:
                                                "记者：足协最新方案采取单循环制，赛区设在江苏可能取消降级",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-2.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-3.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-4.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-5.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },
                               {
                                        img: require("../static/img/lqxw-1.png"),
                                        xgtjname:
                                                "记者：足协最新方案采取单循环制，赛区设在江苏可能取消降级",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-2.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-3.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-4.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-5.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-1.png"),
                                        xgtjname:
                                                "记者：足协最新方案采取单循环制，赛区设在江苏可能取消降级",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-2.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-3.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-4.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-5.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-1.png"),
                                        xgtjname:
                                                "记者：足协最新方案采取单循环制，赛区设在江苏可能取消降级",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-2.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-3.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-4.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-5.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },
                        ],
            }
        },
    }
</script>

<style scoped>
.xgtj-w-title{
font-size: 18px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #212121;
opacity: 1;
    margin-bottom: 10px;
}
.xgtj-word{
        display: flex;
    flex-direction: column;
    height: 74px;
    justify-content: center;
}
.xgtj-name {
        height: 74px;
        display: flex;
        align-items: center;
}
.xgtj-name img {
        margin-right: 15px;
        width: 113px;
        height: 74px;
}
.xgtj-w-time {
        padding-right: 22px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9f9f9f;
        opacity: 1;
}
.xgtj-body1 {
        margin-top: 20px;
        display: flex;
       
        width: 825px;
        height: 74px;
       
       
}
.xgtj-body {
        width: 825px;
        /* height: 385px; */
        flex-direction: column;
        display: flex;
        justify-content: space-around;
}
.xgtj {
        margin-bottom: 40px;
        /* height: 420px; */
        width: 825px;
}.dqwz{
    font-size: 12px;
}
.shouye1-right {
        width: 348px;
        height: 100%;
}
.shouye1-left {
        margin-right: 20px;
        height: 100%;
        width: 832px;
}
.container{
        width: 1200px;
        display: flex;
}
.shouye1 {
        justify-content: center;
        display: flex;
        flex-direction: row;
        height: 100%;
        min-width: 1200px;
        margin: 0 auto;
}
</style>