<template>
        <div class="shouye4">
                <div class="container">
                        <div class="shouye4-left">
                                <div class="jmb">
                                        <div class="jmb-head">
                                                <div
                                                        class="head1"
                                                        v-for="date in dates"
                                                        :key="date.time"
                                                >
                                                        {{ date.time }}
                                                </div>
                                                <div
                                                        class="head2"
                                                        v-for="detail in details"
                                                        :key="detail.time"
                                                >
                                                        <p>{{ detail.time }}</p>
                                                        <p>
                                                                来源：{{
                                                                        detail.laiyuan
                                                                }}
                                                        </p>
                                                        <p>
                                                                编辑：{{
                                                                        detail.bianji
                                                                }}
                                                        </p>
                                                </div>
                                        </div>
                                        <div class="jmb-body">
                                                <p>【昨日临场】</p>
                                                <img
                                                        class="lchdhg"
                                                        src="/img/lchdhg.png"
                                                />
                                                <p class="zqlc">足球临场</p>
                                                <span>
                                                        <p>
                                                                <a href=""
                                                                        >红狼Goal</a
                                                                >（红利率109%）昨日卢森乐成打出，私推近10中8，今天继承好料相送，接待各人上车。
                                                        </p>
                                                </span>
                                                <span>
                                                        <p>
                                                                <a href=""
                                                                        >阿富汗</a
                                                                >（红利率98%）一场瑞典超为我们取得一周开门红，战绩依然不变。
                                                        </p>
                                                </span>
                                                <span>
                                                        <p>
                                                                <a href=""
                                                                        >绿茵派路</a
                                                                >（红利率98%）上回公推顺遂跑出，收成238%返奖率！私推精选场次再收高回报红单！今朝近9场中7场胜率高达78%！近10周有9周红利，状态保持不变！
                                                        </p>
                                                </span>
                                                <p>
                                                        糖果玩彩、延敖、Yoyo姐、汽车人李，篮球世家、禅师看球昨日保举停息，以上作者均未纳入统计。A级偷袭手、生哥、肖邦看球角逐未完场，待完场后后果补上！
                                                </p>
                                                <p>【付费专区】</p>
                                                <img
                                                        class="jxtjxb"
                                                        src="/img/jxtjxb.png"
                                                />
                                                <span>
                                                        <p>
                                                                <a href=""
                                                                        >女飞侠</a
                                                                >
                                                                昨日精选一场NBA奇才vs步行者角逐，最终步行者111-100得胜，保举奇才+8.5遗憾未能掷中，连红遭遇间断！亏得附赠一场马刺vs76人大分已经乐成打出，扳回一城！作着近6中5，可一连存眷！
                                                        </p>
                                                </span>
                                                <a href="" class="yw"
                                                        >*对打赏处事如有疑问，可以点击查察《
                                                        打赏常见题目&打赏玩法》</a
                                                >
                                        </div>
                                        <div class="jmb-b">
                                                <div class="bq">
                                                        <span class="bq1"
                                                                >TAG标签：<span
                                                                        class="bq2"
                                                                        >体坛看点</span
                                                                ></span
                                                        >
                                                </div>
                                                <div class="lj">
                                                        <a class="lj1" href=""
                                                                >上一篇：阿斯报：瓦伦西亚今夏出售罗德里戈，要价至少6000万欧</a
                                                        >
                                                        <a class="lj2" href=""
                                                                >下一篇：没有了</a
                                                        >
                                                </div>
                                        </div>
                                </div>
                                <div class="xgtj">
                                        <div class="xgtj-title">
                                                <div class="xgtj-title1">
                                                        相关推荐
                                                </div>
                                        </div>
                                        <div class="xgtj-body">
                                                <a
                                                        href=""
                                                        class="xgtj-body1"
                                                        v-for="xgtj in xgtjs"
                                                        :key="xgtj.xgtjname"
                                                >
                                                        <div class="xgtj-name">
                                                                <img
                                                                        src="/img/xgtj.png"
                                                                />
                                                                {{
                                                                        xgtj.xgtjname
                                                                                | ellipsis2
                                                                }}
                                                                <!-- ellipsis 过滤器 -->
                                                        </div>

                                                        <span
                                                                class="xgtj-time"
                                                                >{{
                                                                        xgtj.time
                                                                }}</span
                                                        >
                                                </a>
                                        </div>
                                </div>
                        </div>
                        <div class="shouye4-right">
                                <Zxzx />
                                <Rmpdzb />
                        </div>
                </div>
        </div>
</template>

<script>
import Rmpdzb from "../components/rmpdzb.vue";
import Zxzx from "../components/zxzx.vue";
export default {
        components: { Zxzx, Rmpdzb },
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
                        dates: [
                                {
                                        time:
                                                "3日保举汇总：红狼收成高奖近10中8 绿茵喜迎2连胜",
                                },
                        ],
                        details: [
                                {
                                        time: "2020-11-13 17:00",
                                        laiyuan: "网络",
                                        bianji: "cctv5在线直播网",
                                },
                        ],
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
                                                "中央电视台CCTV5 05-03 星期六 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "2019年3月26日中央电视台CCTV5 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 03-21 星期五 节目单",
                                        time: "2020-02-25",
                                },
                        ],
                };
        },
};
</script>

<style scoped>
/* 奇数选择器 */
.xgtj-body > a:nth-child(even) {
        background: #f9f9f9;
}
/* 偶数选择器 */
.xgtj-body > a:nth-child(odd) {
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
.xgtj-title1 {
        display: flex;
        justify-content: center;
        line-height: 35px;
        color: white;
        width: 96px;
        height: 35px;
        background: #ed0e08;
        opacity: 1;
        border-radius: 2px 2px 0px 2px;
}
.xgtj-title {
        border-bottom: 1px solid red;
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
        height: 385px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
}
.xgtj {
        margin-bottom: 40px;
        height: 420px;
        width: 825px;
}
.yw {
        font-size: 14px !important;
        color: #929292 !important;
        text-decoration: underline !important;
}
.zqlc {
        font-weight: bold !important;
}
.jxtjxb {
        width: 832px;
        height: 317.42px;
}
.lchdhg {
        width: 832px;
        height: 671.4px;
}
.jmb-body > span a {
        color: red;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;

        opacity: 1;
        text-decoration: underline;
}
.jmb-body > span {
        display: flex;
}
.jmb-body p {
        margin-bottom: 5px;
        line-height: 26px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
}
.jmb-body img {
        margin-bottom: 10px;
        margin-top: 10px;
}
.jmb-body {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        width: 832px;
        /* height: 1335px; */
}
.lj1 {
        text-decoration: underline;
        color: #ed0e08;
}
.lj {
        margin-bottom: 30px;
        font-size: 14px;
        height: 65px;
        width: 825px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
}
.bq2 {
        width: 96px;
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 24px;
        color: #ed0e08;
        opacity: 1;
}
.bq1 {
        width: 96px;
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 24px;
        color: #000;
        opacity: 1;
}
.bq {
        margin-bottom: 30px;
        margin-top: 30px;
}
.jmb-b {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 832px;
        /* height: 95px; */
}
.head2 {
        display: flex;
        justify-content: space-between;
        width: 400px;
        height: 17px;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        line-height: 16px;
        color: #333333;
        opacity: 1;
}
.head1 {
        width: 825px;
        height: 24px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 26px;
        color: #212121;
        opacity: 1;
}
.jmb-head {
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        width: 832px;
        height: 75px;
}
.jmb {
        width: 832px;
        /* height: 1535px; */
}
.shouye4-right {
        width: 348px;
        height: 100%;
}
.shouye4-left {
        margin-right: 20px;
        height: 100%;
        width: 832px;
}
.container {
        width: 1200px;
        display: flex;
}
.shouye4 {
        display: flex;
        justify-content: center;
        flex-direction: row;
        height: 100%;
        min-width: 1200px;
        margin: 0 auto;
}
</style>