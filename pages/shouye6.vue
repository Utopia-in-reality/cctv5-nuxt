<template>
        <div class="jiemubiao">
                <div class="body">
                        <div class="body-left">
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
                                                <p> {{ detail.time }}</p>
                                                       <p>来源：{{
                                                                detail.laiyuan
                                                        }}</p>
                                                        <p>  编辑：{{
                                                                detail.bianji
                                                        }}</p>
                                                </div>
                                        </div>
                                        <div class="jmb-body">
                                                <p
                                                        class="jmb-body1"
                                                        v-for="item in items"
                                                        :key="item.time"
                                                >
                                                        {{ item.time | ellipsis2}}
                                                        {{ item.title | ellipsis2}}
                                                </p>
                                        </div>
                                        <div class="jmb-b">
                                                <div class="bq">
                                                        <span class="bq1"
                                                                >TAG标签：<span
                                                                        class="bq2"
                                                                        >中国</span
                                                                ></span
                                                        >
                                                </div>
                                                <div class="lj">
                                                        <a class="lj1" href=""
                                                                >上一篇：周六02月29日</a
                                                        >
                                                        <a class="lj2" href=""
                                                                >下一篇：没有了</a
                                                        >
                                                </div>
                                        </div>
                                         <div class="xgtj">
                                        <div class="xgtj-title">
                                                <div class="xgtj-title1">
                                                        相关推荐
                                                </div>
                                        </div>
                                        <div class="xgtj-body">
                                                 <p
                                                                class="xgtj-body1"
                                                                v-for="xgtj in xgtjs"
                                                                :key="xgtj.xgtjname"
                                                        >
                                                        <img src="/img/lyj.png"/>
                                                                {{
                                                                        xgtj.xgtjname
                                                                                | ellipsis2   
                                                                }}
                                                                <!-- ellipsis 选择器 -->
                                                        </p>
                                        </div>
                                </div>
                                </div>
                        </div>
                        <div class="body-right">
                                <div class="zxzx">
                                        <div class="zxzx-title">最新资讯</div>
                                        <div class="zxzx-body">
                                                <div
                                                        class="zxzx-body1"
                                                        v-for="title in news"
                                                        :key="title.news"
                                                >
                                                        {{
                                                                title.news
                                                                        | ellipsis
                                                        }}
                                                </div>
                                        </div>
                                </div>
                                <div class="rmpdzb">
                                        <div class="rmpdzb-title">
                                                热门频道直播
                                                <a href="">更多></a>
                                        </div>
                                        <div class="rmpdzb-body">
                                                <div class="rmpdzb-body1">
                                                        <div
                                                                class="rmpdzb-body11"
                                                                v-for="pd in pds"
                                                                :key="pd.name"
                                                        >
                                                                {{
                                                                        pd.name
                                                                                | ellipsis
                                                                }}
                                                        </div>
                                                </div>

                                                <div class="rmpdzb-body2">
                                                        <div
                                                                class="rmpdzb-body22"
                                                                v-for="pd2 in pd2s"
                                                                :key="pd2.name2"
                                                        >
                                                                {{
                                                                        pd2.name2
                                                                                | ellipsis
                                                                }}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
        //filters过滤器器
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
                                        time: "周日 11月13日",
                                },
                        ],
                        details: [
                                {
                                        time: "2020-11-13 17:00",
                                        laiyuan: "网络",
                                        bianji: "cctv5在线直播网",
                                },
                        ],
                        items: [
                                {
                                        time: "18:00",
                                        title: "团员独家大数据：升班资格战",
                                },
                                {
                                        time: "17:00",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "13:00",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "11:00",
                                        title: "呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "18:00",
                                        title: "团员独家大数据：升班资格战",
                                },
                                {
                                        time: "17:00",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "13:00",
                                        title: "哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "11:00",
                                        title: "呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "18:00",
                                        title: "独家大数据：升班资格战",
                                },
                                {
                                        time: "17:00",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "13:01",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "11:50",
                                        title: "呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "18:00",
                                        title: "团员独家大数据：升班资格战",
                                },
                                {
                                        time: "17:30",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "13:14",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "11:07",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "18:35",
                                        title: "团员独家大数据：升班资格战",
                                },
                        ],
                        news: [
                                {
                                        news:
                                                "美媒晒球星高中时期排名：库里256巴特dhfjuhg",
                                },
                                {
                                        news:
                                                "阿斯：瓦伦亚西今夏出售罗德里戈，要价sjufdfgskfg",
                                },
                                {
                                        news:
                                                "记者：中超、中甲、中乙三级联赛有望sdfghgsrl",
                                },
                                {
                                        news:
                                                "阿斯：瓦伦亚西今夏出售罗德里戈，要价sjufdhglskfg",
                                },
                                {
                                        news:
                                                "美媒晒球星hfgdf排名：库里256巴特dhdfgg",
                                },
                                {
                                        news:
                                                "阿斯：瓦伦亚dfhfd夏出售罗德里戈，要价sjufdhdfxcbkfg",
                                },
                                {
                                        news:
                                                "文化嘎代发货跟你啥皮肤的还sfdg不够浦东",
                                },
                                {
                                        news:
                                                "三代人有钱啊额如意金额阿婆人居女友sdgsfd饿，研究生部",
                                },
                                {
                                        news:
                                                "美媒晒球星高中时期排名：库里sdgsdg巴特dhfjuhg",
                                },
                                {
                                        news:
                                                "三代人有钱啊额如意金额阿婆人居女友sdgsfd饿，研究生部",
                                },
                                {
                                        news:
                                                "美媒晒球星高中时期排名：库里sdgsdg巴特dhfjuhg",
                                },
                        ],
                        pds: [
                                {
                                        name:
                                                "美媒晒球星高中时期排名：库dfgsd里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今sdf夏出售罗德里戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "记者：中超、中甲、中乙三sdf级联赛有望sldkhgsrl",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今夏出售罗sedgvser德里戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "美媒晒球星高中时vtsec期排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今夏aerv出售罗德里戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "文化嘎代发货跟你啥byetc皮肤的还不够浦东",
                                },
                                {
                                        name:
                                                "三代人有钱啊【额如意金cevarh额阿婆人居女友【饿，研究生部",
                                },
                                {
                                        name:
                                                "美媒晒球星高中时期dfhg排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "三代人有钱啊【额we如意金额阿婆人居女友【饿，研究生部",
                                },
                                {
                                        name:
                                                "美媒晒球星高中时ef期排名：库里256巴特dhfjuhg",
                                },
                                 {
                                        name:
                                                "美媒晒球星高中时期排名：库dfgsd里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今sdf夏出售罗德里戈，要价sjufdhglskfg",
                                },
                        ],
                        pd2s: [
                                {
                                        name2:
                                                "美媒晒球星高中时期rger5排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name2:
                                                "阿斯：瓦伦亚西今夏出售罗德里hr戈，要价sjufdhglskfg",
                                },
                                {
                                        name2:
                                                "记者：中超、中甲、中乙er三级联赛有望sldkhgsrl",
                                },
                                {
                                        name2:
                                                "阿斯：瓦伦亚西w今夏出售罗德里戈，要价sjufdhglskfg",
                                },
                                {
                                        name2:
                                                "美媒晒球gr星高中时期排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name2:
                                                "阿斯：瓦sd伦亚西今夏出售罗德里s戈，要价sjufdhglskfg",
                                },
                                {
                                        name2:
                                                "文化嘎代发货跟你啥皮肤的还不s够浦东",
                                },
                                {
                                        name2:
                                                "三代人有钱啊【额sd如意金额阿婆人居女友【饿，研究生部",
                                },
                        ],
                        xgtjs:[
                                
                                        {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年6月1日 星期一节目单",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 2015年4月2日 星期四节目单",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 08-14 星期四 节目单",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 06-03 星期二 节目单",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 04-27 星期日 节目单",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 05-03 星期六 节目单",
                                },
                                {
                                        xgtjname:
                                                "2019年3月26日中央电视台CCTV5 节目单",
                                },
                                {
                                        xgtjname:
                                                "中央电视台CCTV5 03-21 星期五 节目单",
                                },
                        
                        ]
                };
        },
};
</script>

<style scoped>
.jmb-body>p:nth-child(odd)   
{
background:#F9F9F9;
}
/* 偶数选择器 */
.jmb-body >p:nth-child(even)
{
        background:white;

}
/* 奇数选择器 */
p:nth-child(even)   
{
background:#F9F9F9;
}
/* 偶数选择器 */
p:nth-child(odd)
{
        background:white;

}
.xgtj-title1 {
        display: flex;
        justify-content: center;
        line-height: 35px;
        color: white;
        width: 96px;
        height: 35px;
        background: #ED0E08;
        opacity: 1;
        border-radius: 2px 2px 0px 2px;
}
.xgtj-title {
        border-bottom: 1px solid red;
}
.xgtj-body1>img{
        margin-right: 10px;
}
.xgtj-body1{
        width: 825px;
        height: 48px;
        line-height: 48px;
        padding-left: 15px;
}
.xgtj-body{
        width: 825px;
        height: 385px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
}
.xgtj{
        height: 400px;
        width: 825px;
}
.jmb-b {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 825px;
        height: 154px;
}
.lj1 {
        color: #ED0E08;
}
.lj {
        height: 80px;
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
        color: #ED0E08;
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
        margin-top: 20px;
}
.rmpdzb-body1 {
        margin-left: 10px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        height: 585px;
        width: 324px;
        margin-bottom: 20px;
}
.rmpdzb-body2 {
        margin-left: 10px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        height: 335px;
        width: 324px;
}
.rmpdzb-body22 {
        width: 324px;
        height: 21px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 26px;
        color: #212121;
        opacity: 1;
}
.rmpdzb-body11 {
        width: 324px;
        height: 21px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 26px;
        color: #212121;
        opacity: 1;
}
.zxzx-body1 {
        margin-left: 10px;
        width: 324px;
        height: 21px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 26px;
        color: #212121;
        opacity: 1;
}
.jmb-body1 {
        padding-left: 10px;
        width: 825px;
        height: 48px;
        line-height: 48px;
        opacity: 1;
}
.jmb-body {
        /* background: #F9F9F9; */
        flex-direction: column;
        display: flex;
        justify-content: space-evenly;
        width: 825px;
        height: 866px;
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
        width: 686px;
        height: 75px;
        margin-bottom: 10px;
}
.jmb {
        width: 686px;
        height: 1054px;
}
.rmpdzb-title a{
        color:white;
        margin-right: 10px;
}
.rmpdzb-title {
        display: flex;
        justify-content: space-between;
        padding-left: 12px;
        width: 348px;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        color: white;
        background-color: red;
}
.rmpdzb-body {
        width: 348px;
        height: 960px;
}
.zxzx-title {
        padding-left: 12px;
        width: 348px;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        color: white;
        background-color: red;
}
.zxzx-body {
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        width: 348px;
       height: 500px;
    margin-bottom: 20px;
}
.body-right {
        width: 348px;
}
.body-left {
        height: 1024px;
        margin-right: 30px;
        width: 825px;
}
.body-bottom {
        width: 741px;
        height: 335px;
}
.body {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        width: 1200px;
        height: 100%;
}
.jiemubiao {
        min-width: 1200px;
        height: 100%;
}
</style>