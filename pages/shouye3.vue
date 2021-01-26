<template>
    <div class="shouye3">
            <div class="container">
                     <div class="shouye3-left">
                <div class="xgtj">
                        <div class="xgtj-body">
                                <a
                                        href=""
                                        class="xgtj-body1"
                                        v-for="xgtj in xgtjs"
                                        :key="xgtj.xgtjname"
                                >
                                        <div class="xgtj-name">
                                                <img src="/img/xgtj.png" />
                                                {{ xgtj.xgtjname | ellipsis2 }}
                                                <!-- ellipsis 过滤器 -->
                                        </div>

                                        <span class="xgtj-time">{{
                                                xgtj.time
                                        }}</span>
                                </a>
                        </div>
                </div>
                <div class="zxf_pagediv"></div>
            </div>
            <div class="shouye3-right">
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
                ellipsis(value) {
                        if (!value) return "";
                        if (value.length > 18) {
                                return value.slice(0, 18) + "...";
                        }
                        return value;
                },
                ellipsis2(value) {
                        if (!value) return "";
                        if (value.length > 40) {
                                return value.slice(0, 40) + "...";
                        }
                        return value;
                },
        },
        data() {
            return {
                 xgtjs: [
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },
                               {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },{
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },{
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },{
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },{
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                        time: "2020-02-25",
                                },{
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                        time: "2020-02-25",
                                },
                                {
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
/* 奇数选择器 */
.xgtj-body > a:nth-child(odd) {
        background: #f9f9f9;
}
/* 偶数选择器 */
.xgtj-body > a:nth-child(even) {
        background: white;
}
.xgtj-time {
    padding-right: 22px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9f9f9f;
        opacity: 1;
}
.xgtj-body1 > img {
        margin-right: 10px;
}
.xgtj-body1 {
    display: flex;
    justify-content: space-between;
        width: 825px;
        height: 48px;
        line-height: 48px;
        padding-left: 15px;
}
.xgtj-body {
        width: 825px;
        height: 1680px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
}
.xgtj {
        margin-bottom: 30px;
        height: 1680px;
        width: 825px;
}
.shouye3-right{
    width: 348px;
    height: 100%;
}
.shouye3-left{
    margin-right: 20px;
    height: 100%;
    width: 832px;
}
.container{
        width: 1200px;
        display: flex;
}
.shouye3 {
    display: flex;
    justify-content: center;
    flex-direction: row;
        height: 100%;
        min-width: 1200px;
        margin: 0 auto;
}
</style>