// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送給我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最可愛美麗漂亮的女高中生",  // 同上...
        "今天是你的生日",
        "雖然去年才認識",
        "但沒想到跨越了距離、年紀",
        "我們變得超好的",
        "這一年經歷了很多",
        "變成某人的還變成美麗小女人",
        "知道你實驗、課業啥都很煩心",
        "雖然沒辦法時刻陪在你身邊",
        "但無論如何，我會用我的臂膀",
        "全力保護著你",
        "雖然可能是請教授們保護啦...",
        "但我會盡力的",
        "最喜歡你的笑容所以",
        "壓力再大也不要失去對世界的純真",
        "不要為了追趕而失去自己",
        "受不了時就狂吃吧! 外表真的還好",
        "反正你在我眼裡怎樣都閃閃發光",
        "You will shine in your own way",
        "So live a life you will remember",
        "Best wishes and best 17 years old.",
        "Love you my bestie ;)",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "最可愛美麗漂亮的女高中生": "./imgs/Love.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Let's start!",
        play: "Music",
        bannar_coming: "Color",
        balloons_flying: "Seems like something still missing...",
        cake_fadein: "A huge cake?",
        light_candle: "17 candles？",
        wish_message: "Happy 17 years old (love heart)",
        story: "If you need me, I'll always be there",
    }
};
