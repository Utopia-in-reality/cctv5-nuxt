<template>
        <div class="rmpdzb">
                <div class="rmpdzb-title">
                        热门频道直播<a href="">更多
                                <img src="/img/yjt.png">
                                </a></div>
                <div class="rmpdzb-body">
                        <div class="rmpdzb-body1">
                                <a      
                                        href=""
                                        class="rmpdzb-body11"
                                        v-for="pd in pds"
                                        :key="pd.name"
                                >
                                        {{ pd.name | ellipsis }}
                                </a>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
       filters: {
                ellipsis(value) {
                        if (!value) return "";
                        if (value.length > 20) {
                                return value.slice(0, 20) + "...";
                        }
                        return value;
                },
       },
       data() {
           return {
                   pds: [
                                {
                                        name:
                                                "美媒晒球星高中时期rger5排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今夏出售罗德里hr戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "记者：中超、中甲、中乙er三级联赛有望sldkhgsrl",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西w今夏出售罗德里戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "美媒晒球gr星高中时期排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "阿斯：瓦sd伦亚西今夏出售罗德里s戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "文化嘎代发货跟你啥皮肤的还不s够浦东",
                                },
                                {
                                        name:
                                                "三代人有钱啊【额sd如意金额阿婆人居女友【饿，研究生部",
                                },
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
                                 {
                                        name:
                                                "美媒晒球星高中时期rger5排名：库里256巴特dhfjuhg",
                                },
                        ],
                   
           }
       },
};
</script>

<style scoped>
.rmpdzb-title a img{
        margin-left: 5px;
}
.rmpdzb-title a{
        display: flex;
        align-items: center;
        margin-right: 10px;
        color: white;
}
.rmpdzb-body1 {
        margin-left: 10px;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        height: 900px;
        width: 324px;
        margin-bottom: 20px;
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
        height: 900px;
}
.body-right {
        width: 348px;
}
</style>