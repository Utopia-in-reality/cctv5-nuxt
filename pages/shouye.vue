<template>
        <div class="shouye">
                <div class="nav">
                        <div class="zq">
                                <div class="nav-zq">
                                        <img class="img-zq" src="/img/zq.png" />
                                        <p>足球</p>
                                </div>
                                <div class="name-zq">
                                        <a
                                                :href="names.src"
                                                v-for="names in zq"
                                                :key="names.name"
                                                >{{ names.name }}</a
                                        >
                                </div>
                        </div>
                        <div class="lq">
                                <div class="nav-lq">
                                        <img class="img-lq" src="/img/lq.png" />
                                        <p>篮球</p>
                                </div>
                                <div class="name-lq">
                                        <a
                                                :href="names.src"
                                                v-for="names in lq"
                                                :key="names.name"
                                                >{{ names.name }}</a
                                        >
                                </div>
                        </div>
                        <div class="wq">
                                <div class="nav-wq">
                                        <img class="img-wq" src="/img/wq.png" />
                                        <p>网球</p>
                                </div>
                                <div class="name-wq">
                                        <a
                                                :href="names.src"
                                                v-for="names in wq"
                                                :key="names.name"
                                                >{{ names.name }}</a
                                        >
                                </div>
                        </div>
                        <div class="snk">
                                <div class="nav-snk">
                                        <img
                                                class="img-snk"
                                                src="/img/snk.png"
                                        />
                                        <p>斯诺克</p>
                                </div>
                                <div class="name-snk">
                                        <a
                                                :href="names.src"
                                                v-for="names in snk"
                                                :key="names.name"
                                                >{{ names.name }}</a
                                        >
                                </div>
                        </div>
                </div>
                <div class="body1">
                        <img class="sy1" src="/img/sy1.png" />
                        <div class="bszb">
                                <div class="bszb-title">
                                        <div class="bszb-title-name">
                                                <img src="/img/bszb-t.png" />
                                                <p>比赛直播</p>
                                        </div>
                                        <div class="bszb-title-time">
                                                2020年 07月 30日 星期四
                                        </div>
                                </div>
                                <div
                                        class="bszb-body"
                                        v-for="bszb in bszbs"
                                        :key="bszb.src"
                                >
                                        <div class="bszb-b-title">
                                                <img
                                                        :src="bszb.src"
                                                        class="bszb-b-img"
                                                        alt="图片"
                                                />
                                                <div class="bszb-b-t-body">
                                                        <span
                                                                class="bszb-b-t-body1"
                                                                >{{
                                                                        bszb.name
                                                                }}</span
                                                        >
                                                        <span
                                                                class="bszb-b-t-body2"
                                                                >{{
                                                                        bszb.time
                                                                }}</span
                                                        >
                                                        <!-- 三目运算符 内容为LIVE css为颜色红 -->
                                                        <div
                                                                :class="
                                                                        bszb.live ===
                                                                        'LIVE'
                                                                                ? 'bszb-live-red'
                                                                                : 'bszb-live-grey'
                                                                "
                                                        >
                                                                <span>{{
                                                                        bszb.live
                                                                }}</span>
                                                        </div>
                                                        <!-- v-if 判断是否显示绿点 -->
                                                        <div
                                                                v-if="
                                                                        bszb.live ===
                                                                        'LIVE'
                                                                "
                                                                class="bszb-b-t-b-green"
                                                        ></div>
                                                </div>
                                        </div>
                                        <div class="bszb-b-body">
                                                <span
                                                        class="bszb-b-b-country1"
                                                        >{{
                                                                bszb.country1
                                                        }}</span
                                                >
                                                <span class="bszb-b-b-vs">{{
                                                        bszb.vs
                                                }}</span>
                                                <span
                                                        class="bszb-b-b-country1"
                                                        >{{
                                                                bszb.country2
                                                        }}</span
                                                >
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="body2">
                        <div class="body-left">
                                <div class="body-l-title">
                                        <div class="body-l-t-word">
                                                推荐新闻
                                        </div>
                                </div>
                                <div class="body-l-body1">
                                        <img
                                                class="body-l-b-img1"
                                                src="/img/body-l-b-img1.png"
                                        />
                                        <!--  | 过滤器 -->
                                        <a
                                                :href="bodyleft1.src"
                                                class="body-l-b-i-word1"
                                        >
                                                {{
                                                        bodyleft1.imgword1
                                                                | bodyleftimgword
                                                }}
                                        </a>
                                        <div class="body-l-b-word">
                                                <a
                                                        :href="bodyleft1.src"
                                                        class="body-l-b-w-title1"
                                                >
                                                        {{
                                                                bodyleft1.bodytitle1
                                                                        | bodyleftbodytitle
                                                        }}
                                                </a>
                                                <a
                                                        :href="
                                                                bodyleftword1.src
                                                        "
                                                        class="body-l-b-w-word1"
                                                        v-for="bodyleftword1 in bodyleftwords1"
                                                        :key="
                                                                bodyleftword1.bodyword1
                                                        "
                                                >
                                                        {{
                                                                bodyleftword1.bodyword1
                                                                        | bodyleftbodyword
                                                        }}
                                                </a>
                                        </div>
                                </div>
                                <div class="body-l-body2">
                                        <img
                                                class="body-l-b-img2"
                                                src="/img/body-l-b-img2.png"
                                        />
                                        <!--  | 过滤器 -->
                                        <a
                                                :href="bodyleft2.src"
                                                class="body-l-b-i-word2"
                                        >
                                                {{
                                                        bodyleft2.imgword2
                                                                | bodyleftimgword
                                                }}
                                        </a>
                                        <div class="body-l-b-word">
                                                <a
                                                        :href="bodyleft2.src"
                                                        class="body-l-b-w-title2"
                                                >
                                                        {{
                                                                bodyleft2.bodytitle2
                                                                        | bodyleftbodytitle
                                                        }}
                                                </a>
                                                <a
                                                        :href="
                                                                bodyleftword2.src
                                                        "
                                                        class="body-l-b-w-word2"
                                                        v-for="bodyleftword2 in bodyleftwords2"
                                                        :key="
                                                                bodyleftword2.bodyword2
                                                        "
                                                >
                                                        {{
                                                                bodyleftword2.bodyword2
                                                                        | bodyleftbodyword
                                                        }}
                                                </a>
                                        </div>
                                </div>
                        </div>
                        <div class="body-right">
                                <div class="jsbf">
                                        <div class="jsbf-title">
                                                <a class="jsbfa1" href=""
                                                        >即时比分</a
                                                >
                                                <a class="jsbfa2" href=""
                                                        >更多></a
                                                >
                                        </div>
                                        <div class="jsbf-body">
                                                <a
                                                        :href="jsbf.src"
                                                        class="jsbf-body-word"
                                                        v-for="jsbf in jsbfs"
                                                        :key="jsbf.word"
                                                >
                                                        {{
                                                                jsbf.word
                                                                        | jsbfword
                                                        }}
                                                </a>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="body3">
                        <div class="zqxw">
                                <div class="zqxw-title">
                                        <img src="/img/zqxw-t.png" alt="" />
                                        <p>足球新闻</p>
                                </div>
                                <a
                                        class="zqxw-body"
                                        :href="zqxw.src"
                                        v-for="zqxw in zqxws"
                                        :key="zqxw.body"
                                >
                                        <img :src="zqxw.img" />
                                        <div class="zqxw-b-body">
                                                <div class="zqxw-b-b-word">
                                                        {{ zqxw.word }}
                                                </div>

                                                <div class="zqxw-b-b-time">
                                                        {{ zqxw.time }}
                                                </div>
                                        </div>
                                </a>
                        </div>
                        <div class="lqxw">
                                <div class="lqxw-title">
                                        <img src="/img/lqxw-t.png" alt="" />
                                        <p>足球新闻</p>
                                </div>
                                <a
                                        class="lqxw-body"
                                        :href="lqxw.src"
                                        v-for="lqxw in lqxws"
                                        :key="lqxw.body"
                                >
                                        <img :src="lqxw.img" />
                                        <div class="lqxw-b-body">
                                                <div class="lqxw-b-b-word">
                                                        {{ lqxw.word }}
                                                </div>

                                                <div class="lqxw-b-b-time">
                                                        {{ lqxw.time }}
                                                </div>
                                        </div>
                                </a>
                        </div>
                        <div class="body3-right">
                                <div class="rmbq">
                                        <div class="rmbq-title">
                                                <img src="/img/rmbq-t.png" />
                                                <p>热门标签</p>
                                        </div>
                                        <div class="rmbq-body">
                                                <div id="tagscloud">
                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="赛事分析"
                                                                >赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="篮球赛事分析"
                                                                >篮球赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="篮球公园"
                                                                >篮球公园</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="资格赛"
                                                                >资格赛</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="曼联"
                                                                >曼联</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc5"
                                                                title="赛事分析"
                                                                >赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="视频"
                                                                >视频</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc5"
                                                                title="足球新闻"
                                                                >足球新闻</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="体坛看点"
                                                                >体坛看点</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="录像"
                                                                >录像</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc5"
                                                                title="足球赛事分析"
                                                                >足球赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="赛事分析"
                                                                >赛事分析</a
                                                        >
                                                        <a
                                                                href=""
                                                                class="tagc5"
                                                                title="足球新闻"
                                                                >足球新闻</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="体坛看点"
                                                                >体坛看点</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="录像"
                                                                >录像</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc5"
                                                                title="足球赛事分析"
                                                                >足球赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="赛事分析"
                                                                >赛事分析</a
                                                        >
                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="赛事分析"
                                                                >赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="篮球赛事分析"
                                                                >篮球赛事分析</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc1"
                                                                title="篮球公园"
                                                                >篮球公园</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="资格赛"
                                                                >资格赛</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc2"
                                                                title="曼联"
                                                                >曼联</a
                                                        >

                                                        <a
                                                                href=""
                                                                class="tagc5"
                                                                title="赛事分析"
                                                                >赛事分析</a
                                                        >
                                                </div>
                                        </div>
                                </div>
                                <div class="zqzy">
                                        <div class="zqzy-title">
                                                <img src="/img/rmbq-t.png" />
                                                <p>足球之夜</p>
                                        </div>
                                        <div class="zqzy-body">
                                                <a
                                                        :href="zqzy.src"
                                                        class="zqzy-body-word"
                                                        v-for="zqzy in zqzys"
                                                        :key="zqzy.word"
                                                >
                                                        {{
                                                                zqzy.word
                                                                        | jsbfword
                                                        }}
                                                </a>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="body4">
                        <div class="ttkd">
                                <div class="ttkd-title">
                                        <img src="/img/ttkd-t.png" alt="" />
                                        <p>体坛看点</p>
                                </div>
                                <div class="ttkd-body1">
                                        <img src="/img/ttkd.png" />
                                        <a href=""
                                                >美媒晒球星高中时期排名：库里256
                                                利拉德214</a
                                        >
                                </div>
                                <div class="ttkd-body2">
                                        <a
                                                :href="ttkd.src"
                                                class="ttkd-b2-word"
                                                v-for="ttkd in ttkds"
                                                :key="ttkd.word"
                                        >
                                                {{ ttkd.word | ttkd }}
                                        </a>
                                </div>
                        </div>
                        <div class="ssfx">
                                <div class="ssfx-title">
                                        <img src="/img/ssfx-t.png" alt="" />
                                        <p>赛事分析</p>
                                </div>
                                <div class="ssfx-body1">
                                        <img src="/img/ttkd.png" />
                                        <a href=""
                                                >阿斯报：瓦伦西亚今夏出售罗德里戈，要价至少6000万欧
                                                利拉德214</a
                                        >
                                </div>
                                <div class="ssfx-body2">
                                        <a
                                                :href="ssfx.src"
                                                class="ssfx-b2-word"
                                                v-for="ssfx in ssfxs"
                                                :key="ssfx.word"
                                        >
                                                {{ ssfx.word | ssfx }}
                                        </a>
                                </div>
                        </div>
                        <div class="txzq">
                                <div class="txzq-title">
                                        <img src="/img/rmbq-t.png" />
                                        <p>天下足球</p>
                                </div>
                                <div class="txzq-body">
                                        <a
                                                :href="txzq.src"
                                                class="txzq-body-word"
                                                v-for="txzq in txzqs"
                                                :key="txzq.word"
                                        >
                                                {{ txzq.word | jsbfword }}
                                        </a>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
        filters: {
                ssfx(value) {
                        if (!value) return "";
                        if (value.length > 25) {
                                return value.slice(0, 25) + "...";
                        }
                        return value;
                },
                ttkd(value) {
                        if (!value) return "";
                        if (value.length > 20) {
                                return value.slice(0, 20) + "...";
                        }
                        return value;
                },
                bodyleftimgword(value) {
                        if (!value) return "";
                        if (value.length > 21) {
                                return value.slice(0, 21) + "...";
                        }
                        return value;
                },
                bodyleftbodytitle(value) {
                        if (!value) return "";
                        if (value.length > 22) {
                                return value.slice(0, 22) + "...";
                        }
                        return value;
                },
                bodyleftbodyword(value) {
                        if (!value) return "";
                        if (value.length > 25) {
                                return value.slice(0, 25) + "...";
                        }
                        return value;
                },
                jsbfword(value) {
                        if (!value) return "";
                        if (value.length > 20) {
                                return value.slice(0, 20) + "...";
                        }
                        return value;
                },
        },
        head() {
                return {
                        link: [{ rel: "stylesheet", href: "/css/zzsc.css" }],
                        script: [{ src: "/js/zzsc.js" }],
                };
        },
        data() {
                return {
                        ssfxs: [
                                {
                                        src: "",
                                        word:
                                                "切尔西心仪能1人亮相想投蓝军切尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军 ",
                                },
                                {
                                        src: "",
                                        word:
                                                "巴萨欧冠决斗3面对用人荒！仅剩14名一线队员可用",
                                },
                                {
                                        src: "",
                                        word:
                                                "曼遐想卖桑切斯必需5搭钱 他不接管降薪转会国米",
                                },
                                {
                                        src: "",
                                        word:
                                                "600万不要了！179cm的卡帕佐4和皇马达成买断，宣布下",
                                },
                                {
                                        src: "",
                                        word:
                                                "切尔西心仪能3人亮相想投蓝军切4尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军 ",
                                },
                                {
                                        src: "",
                                        word:
                                                "巴萨欧冠决斗面对用人荒0！仅剩14名一线队员可用",
                                },
                                {
                                        src: "",
                                        word:
                                                "曼遐想卖桑切斯必需搭钱 他不接管5降薪转会国米",
                                },
                                {
                                        src: "",
                                        word:
                                                "600万不要了！179cm的卡帕佐和皇马达成买断，宣布下",
                                },
                                {
                                        src: "",
                                        word:
                                                "大朗本土人！烈豹出品！最具模特范的他让张继科和0林丹",
                                },
                                {
                                        src: "",
                                        word:
                                                "巴莫特曾经的悲剧 有也许再度上演 一球员的受伤0为火箭蒙",
                                },
                        ],
                        ttkds: [
                                {
                                        src: "",
                                        word:
                                                "切尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军.切尔西心仪能人亮相想投蓝军 ",
                                },
                                {
                                        src: "",
                                        word:
                                                "巴萨欧冠决斗面对用人荒！仅剩14名一线队员4可用",
                                },
                                {
                                        src: "",
                                        word:
                                                "曼遐想卖桑切斯必需搭钱 他不接管降薪转会4国米",
                                },
                                {
                                        src: "",
                                        word:
                                                "600万不要了！179cm的卡帕佐和皇马达成4买断，宣布下",
                                },
                                {
                                        src: "",
                                        word:
                                                "切尔西心仪能人亮相想投蓝军切尔西心仪能.人亮相想投蓝军切尔西心仪能人亮相想投蓝军 ",
                                },
                                {
                                        src: "",
                                        word:
                                                "巴萨欧冠决斗面对用人荒！仅剩14名一线队员可用",
                                },
                                {
                                        src: "",
                                        word:
                                                "曼遐想卖桑切斯必需搭钱4 他不接管降薪转会国米",
                                },
                                {
                                        src: "",
                                        word:
                                                "600万不要了！1719cm的卡帕佐和皇马达成买断，宣布下",
                                },
                                {
                                        src: "",
                                        word:
                                                "大朗本土人！烈豹出品！最具模特范的他让张继科和林丹",
                                },
                                {
                                        src: "",
                                        word:
                                                "巴莫特曾经的悲剧 有也2许再度上演 一球员的受伤为火箭蒙",
                                },
                        ],
                        txzqs: [
                                {
                                        src: "",
                                        word:
                                                "美媒晒球星s高中时期排名：库里2056 巴特哈哈ret哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦西亚s今夏出售罗德里戈，.要价哈ert哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超s、中甲、中乙三级联赛有望.全哈哈r哈哈er哈k",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛普：非洲有很多优秀5球员；奥科查面哈哈er哈哈kre",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂亚戈在拜仁很久了，有哈哈se哈哈q",
                                },
                                {
                                        src: "",
                                        word:
                                                "美媒晒球星高中时期4排名：库里256 巴特哈哈k哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦西亚今夏出售罗德里戈，要价哈哈wrh哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超、中甲、中乙4三级联赛有望全哈哈哈哈er哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛普：非洲有很多优秀球4员；奥科查面哈哈哈sdf哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂亚戈在拜仁很久了，有哈哈0sf哈哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "美媒d晒球星高中时期排名：库2里256 巴特哈哈fs哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦d西亚今夏出售罗德里戈，要价哈s0df哈哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超、中甲、中乙三级联赛有望0全哈哈哈sdf哈哈",
                                },
                        ],
                        lqxws: [
                                {
                                        src: "",
                                        img: require("../static/img/lqxw-1.png"),
                                        word:
                                                "阿斯报：瓦伦西亚今夏出售0罗德里戈，要价至少6000万欧 利拉r德214",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/lqxw-2.png"),
                                        word:
                                                "美媒晒球星高中时期0排名：库里d256 利拉德21g4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/lqxw-3.png"),
                                        word:
                                                "美媒晒球星高中时期排0名：库里256 利g拉德21gth4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/lqxw-4.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里256 利拉f德210wdf4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/lqxw-5.png"),
                                        word:
                                                "美媒晒球星高中时期s排名：库里256 利拉0德21wer4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-6.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库g里2560 利拉德2dvs4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/lqxw-7.png"),
                                        word:
                                                "美媒晒球s星高中时期排名：库里025ds6 利拉德214",
                                        time: "11-12 04:00",
                                },
                        ],
                        zqxws: [
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-1.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里2056 利拉德214",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-2.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里256 利拉德21g04",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-3.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里256 利拉德21gth4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-4.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里256 利拉德21w0df4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-5.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里256 利拉德241wer4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-6.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里256 利拉5德2dvs4",
                                        time: "11-12 04:00",
                                },
                                {
                                        src: "",
                                        img: require("../static/img/zqxw-5.png"),
                                        word:
                                                "美媒晒球星高中时期排名：库里25ds6 利5拉德214",
                                        time: "11-12 04:00",
                                },
                        ],
                        zqzys: [
                                {
                                        src: "",
                                        word:
                                                "美媒晒球星s高中时期排名：库里256 巴特哈哈ret哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦西亚s今夏出售罗德里戈，要价哈ert哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超s、中甲、中乙三级联赛有望全哈哈r哈哈er哈k",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛普：非洲有很多优秀球员；奥科查面哈哈er哈哈kre",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂亚戈在拜仁很久了，有哈哈se哈哈q",
                                },
                                {
                                        src: "",
                                        word:
                                                "美媒晒球星高中时期排名：库里256 巴特哈哈k哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦西亚今夏出售罗德里戈，要价哈哈wrh哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超、中甲、中乙三级联赛有望全哈哈哈哈er哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛普：非洲有很多优秀球员；奥科查面哈哈哈sdf哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂亚戈在拜仁很久了，有哈哈sf哈哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "美媒d晒球星高中时期排名：库里256 巴特哈哈fs哈",
                                },
                        ],
                        jsbfs: [
                                {
                                        src: "",
                                        word:
                                                "美媒晒球星s高中时期排名：库里256 巴特哈哈ret哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦西亚s今夏出售罗德里戈，要价哈ert哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超s、中甲、中乙三级联赛有望全哈哈r哈哈er哈k",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛普：非洲有很多优秀球员；奥科查面哈哈er哈哈kre",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂亚戈在拜仁很久了，有哈哈se哈哈q",
                                },
                                {
                                        src: "",
                                        word:
                                                "美媒晒球星高中时期排名：库里256 巴特哈哈k哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦西亚今夏出售罗德里戈，要价哈哈wrh哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超、中甲、中乙三级联赛有望全哈哈哈哈er哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛普：非洲有很多优秀球员；奥科查面哈哈哈sdf哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂亚戈在拜仁很久了，有哈哈sf哈哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "美媒d晒球星高中时期排名：库里256 巴特哈哈fs哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "阿斯：瓦伦d西亚今夏出售罗德里戈，要价哈sdf哈哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "记者：中超、中甲、中乙三级联赛有望全哈哈哈sdf哈哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "克洛a普：非洲有很多优秀球员；奥科查面哈哈哈df哈",
                                },
                                {
                                        src: "",
                                        word:
                                                "卡恩：阿拉巴和蒂d亚戈在拜仁很久了，有哈哈哈sdf哈",
                                },
                        ],
                        bodyleftwords2: [
                                {
                                        src: "",
                                        bodyword2:
                                                "切尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军 ",
                                },
                                {
                                        src: "",
                                        bodyword2:
                                                "巴萨欧冠决斗面对用人荒！仅剩14名一线队员可用",
                                },
                                {
                                        src: "",
                                        bodyword2:
                                                "曼遐想卖桑切斯必需搭钱 他不接管降薪转会国米",
                                },
                                {
                                        src: "",
                                        bodyword2:
                                                "600万不要了！179cm的卡帕佐和皇马达成买断，宣布下",
                                },
                                {
                                        src: "",
                                        bodyword2:
                                                "大朗本土人！烈豹出品！最具模特范的他让张继科和林丹",
                                },
                                {
                                        src: "",
                                        bodyword2:
                                                "巴莫特曾经的悲剧 有也许再度上演 一球员的受伤为火箭蒙",
                                },
                        ],
                        bodyleft2: {
                                src: "",
                                bodytitle2:
                                        "曝巴萨盯上尤文后场万能兵士 转会费估量100",
                                imgword2:
                                        "库蒂尼奥被指该回英超：到热刺等队就是绝对主放贷还是的",
                        },
                        bodyleftwords1: [
                                {
                                        src: "",
                                        bodyword1:
                                                "切尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军切尔西心仪能人亮相想投蓝军 ",
                                },
                                {
                                        src: "",
                                        bodyword1:
                                                "巴萨欧冠决斗面对用人荒！仅剩14名一线队员可用",
                                },
                                {
                                        src: "",
                                        bodyword1:
                                                "曼遐想卖桑切斯必需搭钱 他不接管降薪转会国米",
                                },
                                {
                                        src: "",
                                        bodyword1:
                                                "600万不要了！179cm的卡帕佐和皇马达成买断，宣布下",
                                },
                                {
                                        src: "",
                                        bodyword1:
                                                "大朗本土人！烈豹出品！最具模特范的他让张继科和林丹",
                                },
                                {
                                        src: "",
                                        bodyword1:
                                                "巴莫特曾经的悲剧 有也许再度上演 一球员的受伤为火箭蒙",
                                },
                        ],
                        bodyleft1: {
                                src: "",
                                bodytitle1:
                                        "曝巴萨盯上尤文后场万能兵士 转会费估量100",
                                imgword1:
                                        "库蒂尼奥被指该回英超：到热刺等队就是绝对主放贷还是的",
                        },
                        zq: [
                                {
                                        name: "即时比分",
                                        src: "",
                                },
                                {
                                        name: "指数比较",
                                        src: "",
                                },
                                {
                                        name: "完场",
                                        src: "",
                                },
                                {
                                        name: "赛程",
                                        src: "",
                                },
                                {
                                        name: "盘路统计",
                                        src: "",
                                },
                                {
                                        name: "欧洲杯",
                                        src: "",
                                },
                                {
                                        name: "英超",
                                        src: "",
                                },
                                {
                                        name: "意甲",
                                        src: "",
                                },
                                {
                                        name: "西甲",
                                        src: "",
                                },
                                {
                                        name: "德甲",
                                        src: "",
                                },
                                {
                                        name: "法甲",
                                        src: "",
                                },
                                {
                                        name: "资料库",
                                        src: "",
                                },
                        ],
                        lq: [
                                {
                                        name: "即时比分",
                                        src: "",
                                },
                                {
                                        name: "指数比较",
                                        src: "",
                                },
                                {
                                        name: "以往指数",
                                        src: "",
                                },
                                {
                                        name: "联赛排名",
                                        src: "",
                                },
                                {
                                        name: "赛程结果",
                                        src: "",
                                },
                                {
                                        name: "球队信息",
                                        src: "",
                                },
                                {
                                        name: "技术统计",
                                        src: "",
                                },
                        ],
                        wq: [
                                {
                                        name: "即时比分",
                                },
                                {
                                        name: "指数比较",
                                        src: "",
                                },
                                {
                                        name: "历史指数",
                                        src: "",
                                },
                        ],
                        snk: [
                                {
                                        name: "即时比分",
                                        src: "",
                                },
                                {
                                        name: "世界排名",
                                        src: "",
                                },
                                {
                                        name: "资料库",
                                        src: "",
                                },
                        ],
                        bszbs: [
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-zq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "LIVE",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-zq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "未完成",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-lq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "LIVE",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-bf.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "未完成",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-bf.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "LIVE",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-zq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "未完成",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-bf.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "未完成",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-lq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "LIVE",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-zq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "未完成",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-lq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "LIVE",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-zq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "LIVE",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                                {
                                        id: 1,
                                        src: require("../static/img/bszb-zq.png"),
                                        name: "2005-06欧冠决赛",
                                        time: "13:00",
                                        live: "未完成",
                                        country1: "巴塞罗那",
                                        vs: "VS",
                                        country2: "阿森纳",
                                },
                        ],
                };
        },
};
</script>

<style scoped>
.ssfx-body2 {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        width: 460px;
        height: 370px;
}
.ttkd-b2-word,
.ssfx-b2-word {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
}
.ttkd-body2 {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        width: 357px;
        height: 370px;
}
.ssfx-body1 a {
        width: 338px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
}
.ssfx-body1 {
        margin-bottom: 20px;
        width: 460px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
}
.ttkd-body1 img,
.ssfx-body1 img {
        width: 107px;
        height: 74px;
}
.ttkd-body1 a {
        width: 236px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
}
.ttkd-body1 {
        margin-bottom: 20px;
        width: 357px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
}
.txzq-body {
        background-color: #f9f9f9;
        padding-left: 15px;
        flex-direction: column;
        display: flex;
        justify-content: space-evenly;
        height: 480px;
}
.body4 {
        margin-bottom: 30px;
        flex-direction: row;
        display: flex;
        width: 1200px;
        height: 490px;
}
.zqzy-body {
        background-color: #f9f9f9;
        padding-left: 15px;
        flex-direction: column;
        display: flex;
        justify-content: space-evenly;
        height: 425px;
}
.body3-right {
        flex-direction: column;
        width: 347px;
        height: 700px;
}
.zqxw {
        width: 347px;
        height: 425px;
}
.rmbq-body {
        position: absolute;
        width: 347px;
        height: 224px;
}
.zqxw-b-b-time,
.lqxw-b-b-time {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9f9f9f;
        opacity: 1;
}
.zqxw-b-b-word,
.lqxw-b-b-word {
        width: 100%;
        height: 45px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
}
.lqxw-b-body {
        flex-direction: column;
        display: flex;
        height: 75px;
        width: 338px;
}
.zqxw-b-body {
        flex-direction: column;
        display: flex;
        height: 75px;
        width: 235px;
}
.zqxw-body img,
.lqxw-body img {
        width: 107px;
        height: 74px;
}
.zqxw-body,
.lqxw-body {
        margin-bottom: 20px;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        height: 75px;
        width: 100%;
}
.zqxw-title p,
.lqxw-title p {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 31px;
        color: #212121;
        opacity: 1;
}
.ssfx-title p,
.ttkd-title p {
        margin-left: 5px;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 31px;
        color: #212121;
        opacity: 1;
}
.ssfx-title img {
        width: 19.16px;
        width: 18.25px;
}
.ttkd-title img {
        width: 21.4px;
        height: 16.8px;
}
.lqxw-title {
        margin-bottom: 15px;
        padding-bottom: 5px;
        flex-direction: row;
        display: flex;
        border-bottom: 1px solid #ed0e08;
        width: 460px;
        height: 30px;
        line-height: 30px;
}
.ssfx-title {
        margin-bottom: 15px;
        padding-bottom: 5px;
        flex-direction: row;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ed0e08;
        width: 460px;
        height: 30px;
        line-height: 30px;
}
.rmbq-title img,
.zqzy-title img,
.txzq-title img {
        margin-right: 5px;
        width: 8.5px;
        height: 12px;
}
.rmbq-title p,
.zqzy-title p,
.txzq-title p {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #212121;
        opacity: 1;
}
.rmbq-title,
.zqzy-title,
.txzq-title {
        display: flex;
        align-items: center;
        padding-bottom: 5px;
        flex-direction: row;
        display: flex;
        border-bottom: 1px solid #ed0e08;
        width: 347px;
        height: 30px;
        line-height: 30px;
}
.zqxw-title {
        margin-bottom: 15px;
        padding-bottom: 5px;
        flex-direction: row;
        display: flex;
        border-bottom: 1px solid #ed0e08;
        width: 357px;
        height: 30px;
        line-height: 30px;
}
.ttkd-title {
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 5px;
        flex-direction: row;
        display: flex;
        border-bottom: 1px solid #ed0e08;
        width: 357px;
        height: 30px;
        line-height: 30px;
}
.rmbq {
        width: 347px;
        height: 254px;
}
.zqxw,
.ttkd {
        margin-right: 20px;
        width: 367px;
        height: 700px;
}
.lqxw,
.ssfx {
        margin-right: 15px;
        width: 460px;
        height: 700px;
}
.body3 {
        margin-bottom: 30px;
        flex-direction: row;
        display: flex;
        width: 1200px;
        height: 700px;
}
.jsbf-body-word,
.zqzy-body-word {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
}
.jsbf-body {
        background-color: #f9f9f9;
        padding-left: 15px;
        flex-direction: column;
        display: flex;
        justify-content: space-evenly;
        height: 535px;
}
.jsbfa2 {
        margin-right: 12px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 24px;
        color: #ffffff;
        opacity: 1;
}
.jsbfa1 {
        margin-left: 12px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 31px;
        color: #ffffff;
        opacity: 1;
}
.jsbf-title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 35px;
        background: #ed0e08;
        opacity: 1;
        border-radius: 2px 2px 0px 0px;
}
.jsbf {
        width: 350px;
        height: 565px;
}
.body-right {
        height: 570px;
        width: 350px;
}
.body-l-b-w-word1,
.body-l-b-w-word1 {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #212121;
        opacity: 1;
        height: 20px;
        line-height: 20px;
        width: 425px;
}
.body-l-b-w-title1,
.body-l-b-w-title2 {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;

        color: #212121;
        opacity: 1;
        height: 20px;
        line-height: 20px;
        width: 425px;
}
.body-l-b-word {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        margin-left: 20px;
        height: 243px;
        width: 425px;
}
.body-l-b-i-word1,
.body-l-b-i-word2 {
        padding-left: 10px;
        padding-right: 10px;
        color: white;
        position: relative;
        top: 198px;
        width: 369px;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        background: rgba(0, 0, 0, 0.32);
        border-radius: 0px 0px 4px 4px;
}
.body-l-b-img1,
.body-l-b-img2 {
        position: absolute;
        height: 243px;
        width: 369px;
}
.body-l-t-word {
        display: flex;
        justify-content: center;
        height: 35px;
        line-height: 35px;
        width: 95px;
        background: #ed0e08;
        color: #fff;
        opacity: 1;
        border-radius: 2px 2px 0px 2px;
}
.body-l-body2 {
        display: flex;
        width: 835px;
        height: 243px;
}
.body-l-body1 {
        margin-bottom: 30px;
        display: flex;
        width: 835px;
        height: 243px;
}
.body-l-title {
        margin-bottom: 20px;
        border-bottom: 1px solid #ed0e08;
        height: 35px;
        width: 835px;
}
.body-left {
        margin-right: 15px;
        width: 835px;
        height: 570px;
}
.body2 {
        margin-bottom: 25px;
        display: flex;
        justify-items: start;
        width: 1200px;
        height: 565px;
}
.bszb-live-grey {
        color: grey;
}
.bszb-live-red {
        display: flex;
        justify-content: flex-end;
        width: 48px;
        color: red;
}
.bszb-b-b-vs {
        font-size: 14px;
        font-family: Arial;
        font-weight: bold;
        color: #ffffff;
        opacity: 1;
}
.bszb-b-b-country2 {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        opacity: 1;
}
.bszb-b-b-country1 {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        opacity: 1;
}
.bszb-b-body {
        height: 25px;
        width: 280px;
        display: flex;
        justify-content: space-between;
}
.bszb-b-t-body3 {
        width: 45px;
        display: flex;
        justify-content: flex-end;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;

        color: #ff6f6b;
        opacity: 1;
}
.bszb-b-t-body2 {
        margin-left: -105px;
        font-size: 12px;
        font-family: Arial;
        font-weight: 400;
        color: #979ba2;
        opacity: 1;
}
.bszb-b-t-body1 {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;

        color: #ffffff;
        opacity: 1;
}
.bszb-b-t-b-green {
        position: absolute;
        right: -4px;
        top: 13px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #0dff2d;
}
.bszb-b-t-body {
        position: relative;
        margin-left: 8px;
        width: 300px;
        height: 40px;
        display: flex;
        justify-content: space-between;
}
.bszb-b-img {
        margin-left: 15px;
        width: 13px;
        height: 13px;
}
.bszb-b-title {
        width: 350px;
        height: 40px;
        line-height: 40px;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-items: start;
}
.bszb-body {
        flex-direction: column;
        display: flex;
        align-items: center;
        width: 350px;
        height: 65px;
}
.bszb-title-time {
        width: 190px;
        height: 50px;
        line-height: 50px;
        color: white;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        opacity: 1;
}
.bszb-title-name > p {
        font-family: Source Han Sans CN;
        font-weight: 500;
        opacity: 1;
        font-size: 16px;
        color: white;
}
.bszb-title-name > img {
        width: 20px;
        height: 18px;
}
.bszb-title-name {
        margin-left: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90px;
        height: 50px;
}
.bszb-title {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 350px;
}
.sy1 {
        width: 850px;
        height: 600px;
}
/*   ::-webkit    css滚动条样式 */
.bszb::-webkit-scrollbar {
        width: 5px;
}
.bszb::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #656565;
}
.bszb {
        overflow: hidden;
        overflow-y: auto;
        background-color: #000;
        width: 350px;
        height: 600px;
}
.body1 {
        margin-bottom: 20px;
        display: flex;
        justify-items: start;
        width: 1200px;
        height: 600px;
}
.name-snk {
        margin-left: 15px;
        /* width: 235px; */
        display: flex;
        justify-content: space-between;
        height: 45px;
        line-height: 45px;
}
.img-snk {
        margin-left: 4px;
        width: 11px;
        height: 11px;
}
.nav-snk {
        border-radius: 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: white;
        background-color: #ff3e39;
        width: 65px;
        height: 20px;
}
.snk {
        margin-left: 15px;
        width: 1125px;
        height: 45px;
        display: flex;
        align-items: center;
}
.name-wq {
        margin-left: 15px;
        /* width: 250px; */
        display: flex;
        justify-content: space-between;
        height: 45px;
        line-height: 45px;
}
.img-wq {
        margin-left: -10px;
        margin-right: -30px;
        width: 11px;
        height: 11px;
}
.nav-wq {
        border-radius: 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: white;
        background-color: #ffaa30;
        width: 65px;
        height: 20px;
}
.wq {
        margin-left: 15px;
        width: 1125px;
        height: 45px;
        display: flex;
        align-items: center;
}
.name-lq {
        margin-left: 15px;
        /* width: 625px; */
        display: flex;
        justify-content: space-between;
        height: 45px;
        line-height: 45px;
}
.img-lq {
        margin-left: -10px;
        margin-right: -30px;
        width: 11px;
        height: 11px;
}
.nav-lq {
        border-radius: 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: white;
        background-color: #408fff;
        width: 65px;
        height: 20px;
}
.lq {
        margin-left: 15px;
        width: 1125px;
        height: 45px;
        display: flex;
        align-items: center;
}
.name-zq a,
.name-lq a,
.name-wq a,
.name-snk a {
        margin-right: 30px;
}
.name-zq {
        margin-left: 15px;
        /* width: 830px; */
        display: flex;
        justify-content: space-between;
        height: 45px;
        line-height: 45px;
}
.img-zq {
        margin-left: -10px;
        margin-right: -30px;
        width: 11px;
        height: 11px;
}
.nav-zq {
        border-radius: 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: white;
        background-color: #01d181;
        width: 65px;
        height: 20px;
}
.zq {
        margin-left: 15px;
        width: 1125px;
        height: 45px;
        display: flex;
        align-items: center;
}
.nav {
        box-shadow: 0px -1px 6px rgba(237, 14, 8, 0.1);
        width: 1200px;
        height: 185px;
}
.shouye {
        display: flex;
        align-items: center;
        flex-direction: column;
        /* margin: 0 auto; */
        min-width: 1200px;
        height: 100%;
}
a {
        color: #000;
}
</style>