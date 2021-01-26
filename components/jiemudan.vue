<template>
        <div class="jmd">
                <a href="" class="jmb-body"  v-for="item in items"
                                :key="item.time">
                        <span
                                class="jmb-body1"
                               
                        >
                        <img src="/img/lyj.png">
                                {{ item.title | ellipsis2 }}
                                
                        </span>
                        <span  class="jmb-body2">
                             {{ item.time | ellipsis2 }}
                        </span>
                </a>
        </div>
</template>

<script>
export default {
        //filters选择器
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
                        items: [
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "独家大数据：升班资格战",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                 {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                    {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                 {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                    {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                 {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                    {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                                 {
                                        time: "2020-02-25",
                                        title: "哈哈哈哈哈哈哈哈哈",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "呵呵呵呵呵呵呵呵呵",
                                },
                                {
                                        time: "2020-02-25",
                                        title: "团员独家大数据：升班资格战",
                                },
                        ],
                };
        },
};
</script>

<style scoped>
/* 奇数选择器 */
a:nth-child(odd) {
        background: #f9f9f9;
}
/* 偶数选择器 */
a:nth-child(even) {
        background: white;
}
.jmb-body1 img{
    margin-right: 10px;
    width: 16px;
    height: 16px;
}
.jmb-body2{
    margin-right: 20px;
font-size: 12px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #9F9F9F;
opacity: 1;
}
.jmb-body1 {
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
        height: 48px;
        line-height: 48px;
        width: 500px;
    
}
.jmb-body {
    display: flex;
    justify-content:space-between;
        width: 100%;
        height: 48px;
        align-items: center;
        display: flex;
}
.jmd{
        margin-bottom: 30px;
    width: 837px;
    height: 1680px;
}
</style>