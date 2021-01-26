<template>
        <div class="shouye2">
                <div class="container">
                        <div class="shouye2-left">
                                <div class="dqwz">
                                        <el-breadcrumb
                                                separator-class="el-icon-arrow-right"
                                        >
                                                <el-breadcrumb-item
                                                        :to="{ path: '/' }"
                                                        >首页</el-breadcrumb-item
                                                >
                                                <el-breadcrumb-item
                                                        >赛事新闻</el-breadcrumb-item
                                                >
                                                <el-breadcrumb-item
                                                        >体坛看点</el-breadcrumb-item
                                                >
                                                <el-breadcrumb-item
                                                        >美媒晒球星高中时期排名：库里256
                                                        利拉德214</el-breadcrumb-item
                                                >
                                        </el-breadcrumb>
                                </div>
                                <div class="jmb">
                                        <div class="jmb-head">
                                                <div
                                                        class="head1"
                                                        v-for="date in dates"
                                                        :key="date.title"
                                                >
                                                        {{ date.title }}
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
                                                <p>
                                                        就在莱昂纳德拿到全明星MVP之后不到36小时，快艇队又一次成为了NBA的焦点。刚刚与活塞队达成买断协议的雷吉杰克逊已经确定了下家，他将在全明星之后开始为快艇队效力。
                                                </p>
                                                <p>
                                                        自今夏搞定了小卡与乔治之后，快艇队一直都在球队运作上高奏凯歌。此前，他们搞定了尼克斯侧翼小莫里斯。现如今，雷吉杰克逊也成为了快艇队的一员。很多人都表示，如今快艇队的纸面实力已经能够在NBA冠绝群雄。但同样也有悲观的声音存在，前凯尔特人中锋帕金斯就在雷吉加盟快艇之后说道：“快船哪里需要雷吉杰克逊？他的到来并不能帮助球队提高进攻火力，反而有可能会破坏球队化学反应。因为球只有一个！”
                                                </p>
                                                <img
                                                        src="/img/shouye2-img1.png"
                                                />
                                                <p>
                                                        贝弗利是球队的先发控卫，路威则是超级第六人，如今又来了雷吉杰克逊。即便是放眼全联盟，或许也没有几支球队的后卫线深度比快艇更出色。
                                                </p>
                                                <p>
                                                        但从阵容上来看，快艇队更大的短板无疑是在内线。目前，他们只有祖巴茨这样一个正印中锋，波黑人的个人能力也并不算太出色，且没有什么硬仗经验。然而，快艇队在补强的时候却没有在这方面下功夫，反倒是都集中在了锋线和后卫线上。
                                                        当然，这也不是什么太难理解的事情。首先，在如今这个联盟当中想要完成内线的补强本就不是什么容易的事情。交易市场上，内线的交易价值普遍比较高。自由球员市场中，能堪大用的内线也寥寥无几。后卫、锋线位置上有不少人被买断，但被买断的内线球员却不多。
                                                </p>
                                                <p>
                                                        从一定程度上来说，并不是快艇队不愿意补强内线，而是的确没有值得他们签约的对象。之所以这支球队签下雷吉，通过交易得到小莫里斯，其实不仅仅为了补强自身的实力，更重要的一点在于他们并不愿意让湖人队逞心如意。
                                                </p>
                                                <img
                                                        src="/img/shouye2-img2.png"
                                                />
                                                <p>
                                                        与快艇队相比，湖人队的内线实力强大，但侧翼和后卫位置上都有些缺人。交易截止日之前，湖人队有意小莫里斯，但最终快艇队出手截“湖”，没让同城对手满意而归。如今签下雷吉，其实也是一个以抢代ban的操作。湖人队一直都想补强自己的后卫线，此前与科里森进入了深入的交流，但最终这位前步行者后卫不愿意复出。后来，他们又把目光放在了雷吉身上。可这位前雷霆后卫最终也没有选择加盟湖人，而是成为了快艇队的一员。
                                                </p>
                                                <p>
                                                        值得一提的是，在今天曝出雷吉将加盟快艇消息之后，沃神在自己的推特上透露其实湖人队一直也在追逐雷吉。可过了没多久，他便删掉了自己的这条推特。这其中究竟发生了什么，并没有人知道。但可以肯定的是，在这次雷吉争夺战当中，快艇队又一次大获全胜。
                                                </p>
                                                <p>
                                                        或许，这位后场球员在快艇阵中起到什么太明显的作用。但让湖人队与他擦肩而过，快艇管理层其实就已经达到了目的。就像电影《让飞》里的那句台词一样：“没有你,对我很重要。”
                                                </p>
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
                                                                <!-- <img src="/img/xgtj.png" /> -->
                                                                <img
                                                                        :src="
                                                                                xgtj.img
                                                                        "
                                                                />
                                                        </div>
                                                        <div class="xgtj-word">
                                                                <div
                                                                        class="xgtj-w-title"
                                                                >
                                                                        {{
                                                                                xgtj.xgtjname
                                                                                        | ellipsis2
                                                                        }}
                                                                        <!-- ellipsis 过滤器 -->
                                                                </div>
                                                                <span
                                                                        class="xgtj-w-time"
                                                                >
                                                                        {{
                                                                                xgtj.time
                                                                        }}</span
                                                                >
                                                        </div>
                                                </a>
                                        </div>
                                </div>
                        </div>
                        <div class="shouye2-right">
                                <Zxzx />
                                <Rmpdzb />
                                <Dyrmbq />
                        </div>
                </div>
        </div>
</template>

<script>
import Dyrmbq from "../components/dyrmbq.vue";
import Rmpdzb from "../components/rmpdzb.vue";
import Zxzx from "../components/zxzx.vue";
export default {
        components: { Zxzx, Rmpdzb, Dyrmbq },
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
                                        title:
                                                "8连胜终结！鹈鹕队惜败 小科比关键时刻连得8分，小杜兰特险绝杀",
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
                                        img: require("../static/img/lqxw-6.png"),
                                        xgtjname:
                                                "中央电视台CCTV5 05-03 星期六 节目单",
                                        time: "2020-02-25",
                                },
                                {
                                        img: require("../static/img/lqxw-7.png"),
                                        xgtjname:
                                                "2019年3月26日中央电视台CCTV5 节目单",
                                        time: "2020-02-25",
                                },
                        ],
                };
        },
};
</script>

<style scoped>
.xgtj-w-title {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
        margin-bottom: 10px;
}
.xgtj-word {
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
}
.dqwz {
        margin-bottom: 30px;
}
.jmb-body p {
        line-height: 26px;
        text-indent: 2em;
}
.jmb-body {
        flex-direction: column;
        /* display: flex; */
        /* justify-content: space-between; */
        width: 832px;
        /* height: 1640px; */
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
        margin-top: 15px;
        margin-bottom: 30px;
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
        width: 370px;
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
        height: 90px;
}
.jmb {
        width: 832px;
}
.shouye2-right {
        width: 348px;
        height: 100%;
}
.shouye2-left {
        margin-right: 20px;
        height: 100%;
        width: 832px;
}
.container {
        width: 1200px;
        display: flex;
}
.shouye2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
        min-width: 1200px;
        margin: 0 auto;
}
</style>