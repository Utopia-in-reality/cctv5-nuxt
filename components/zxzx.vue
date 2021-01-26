<template>
                                   <div class="zxzx">
                                        <div class="zxzx-title">最新资讯</div>
                                        <div class="zxzx-body">
                                                <a
                                                        href=""
                                                        class="zxzx-body1"
                                                        v-for="title in news"
                                                        :key="title.name"
                                                >
                                                        {{
                                                                title.name|ellipsis
                                                                       
                                                        }}
                                                </a>
                                        </div>
                                </div>
</template>

<script>
    export default {
         filters: {
                ellipsis(value) {
                        if (!value) return "";
                        if (value.length > 18) {
                                return value.slice(0, 18) + "...";
                        }
                        return value;
                },},
        data() {
            return {
                 news: [
                                {
                                        name:
                                                "美媒晒球星高中时期排名：库里256巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今夏出售罗德里戈，要价sjufdfgskfg",
                                },
                                {
                                        name:
                                                "记者：中超、中甲、中乙三级联赛有望sdfghgsrl",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚西今夏出售罗德里戈，要价sjufdhglskfg",
                                },
                                {
                                        name:
                                                "美媒晒球星hfgdf排名：库里256巴特dhdfgg",
                                },
                                {
                                        name:
                                                "阿斯：瓦伦亚dfhfd夏出售罗德里戈，要价sjufdhdfxcbkfg",
                                },
                                {
                                        name:
                                                "文化嘎代发货跟你啥皮肤的还sfdg不够浦东",
                                },
                                {
                                        name:
                                                "三代人有钱啊额如意金额阿婆人居女友sdgsfd饿，研究生部",
                                },
                                {
                                        name:
                                                "美媒晒球星高中时期排名：库里sdgsdg巴特dhfjuhg",
                                },
                                {
                                        name:
                                                "三代人有钱啊额如意金额阿婆人居女友sdgsfd饿，研究生部",
                                },
                                {
                                        name:
                                                "美媒晒球星高中时期排名：库里sdgsdg巴特dhfjuhg",
                                },
                        ],
            }
        },
    
    }
</script>

<style scoped>
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
       height: 460px;
    margin-bottom: 20px;
}
.body-right {
        width: 348px;
}
</style>