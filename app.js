// ============================================================
// 当下卦象 · app.js  v5
// ============================================================

// ===== 题库（每题含多个版本 variants，第 0 个为原版；每次进入随机选一版）=====
// 注：每个 variant 的 4 个选项 v 值（0-3）对应同一组原型意象，仅措辞/口语化程度不同，
// 因此换版本不改变算法映射，只改变"题面"。
const Q = [
// GROUP 0: 处境 🌍 山青
{d:'处境 · 外部之象',variants:[
  {q:'最近一周，外部世界向你呈现的面貌更接近？',o:[
    {e:'🌋',t:'变动与震荡——旧的秩序在松动',v:0},
    {e:'🏔',t:'寂静与停滞——万事似乎按下了暂停',v:1},
    {e:'🌱',t:'生长与滋养——新的可能在暗中萌发',v:2},
    {e:'⚡',t:'张力与对峙——两股力量在拉扯你',v:3}]},
  {q:'最近这一周，外面的世界给你啥感觉？',o:[
    {e:'🌋',t:'乱糟糟的，老规矩不太够用了',v:0},
    {e:'🏔',t:'卡住了，啥都像按了暂停',v:1},
    {e:'🌱',t:'有点新东西在冒头',v:2},
    {e:'⚡',t:'两股劲儿在较劲，被夹中间了',v:3}]},
  {q:'这一周，周围的环境更像哪一种？',o:[
    {e:'🌋',t:'翻江倒海，旧的在散架',v:0},
    {e:'🏔',t:'死水一潭，动弹不得',v:1},
    {e:'🌱',t:'悄悄在长，有活气',v:2},
    {e:'⚡',t:'针尖对麦芒，挺僵',v:3}]},
  {q:'环顾四周，你感受到的整体氛围是？',o:[
    {e:'🌋',t:'动荡不安，一切都在重新洗牌',v:0},
    {e:'🏔',t:'风平浪静，甚至有些沉闷',v:1},
    {e:'🌱',t:'生机勃勃，充满希望',v:2},
    {e:'⚡',t:'剑拔弩张，随时可能爆发',v:3}]},
  {q:'如果用天气形容这一周的外部环境？',o:[
    {e:'🌋',t:'暴风雨前的闷热与躁动',v:0},
    {e:'🏔',t:'无风无云的晴朗但单调',v:1},
    {e:'🌱',t:'春风拂面，万物复苏',v:2},
    {e:'⚡',t:'电闪雷鸣，两股气流交锋',v:3}]}
]},
{d:'处境 · 位置之感',variants:[
  {q:'你当下处在一个什么样的「位置」？',o:[
    {e:'⛰',t:'在高处——俯瞰清晰，但风也更大',v:0},
    {e:'🕳',t:'在谷底——但每一寸上升都是进步',v:1},
    {e:'🛤',t:'在中途——前后皆可，但方向未定',v:2},
    {e:'🌊',t:'在边缘——即将跨过某个看不见的界限',v:3}]},
  {q:'你现在处在人生的哪个位置上？',o:[
    {e:'⛰',t:'站在高处，看得远，但风也大',v:0},
    {e:'🕳',t:'在谷底，往上走哪步都算进步',v:1},
    {e:'🛤',t:'卡在半道，前后都行，还没定',v:2},
    {e:'🌊',t:'在边儿上，快跨过某条线了',v:3}]},
  {q:'眼下你站在哪儿？',o:[
    {e:'⛰',t:'高点位，一览众山，但扛风',v:0},
    {e:'🕳',t:'低谷，不过怎么走都是上坡',v:1},
    {e:'🛤',t:'半山腰，能上能下',v:2},
    {e:'🌊',t:'门槛边上，马上要迈过去',v:3}]},
  {q:'站在人生的地图上，你现在的坐标是？',o:[
    {e:'⛰',t:'山峰之巅，风景独好但险峻',v:0},
    {e:'🕳',t:'深谷之中，仰望星空但路长',v:1},
    {e:'🛤',t:'十字路口，四通八达但迷茫',v:2},
    {e:'🌊',t:'海岸线边，即将入海或上岸',v:3}]},
  {q:'用一个地理名词形容你此刻的处境？',o:[
    {e:'⛰',t:'高原——视野开阔但氧气稀薄',v:0},
    {e:'🕳',t:'盆地——四面环山但安稳',v:1},
    {e:'🛤',t:'平原——一望无际但方向不明',v:2},
    {e:'🌊',t:'河口——河流汇入大海的临界点',v:3}]}
]},
{d:'处境 · 阻碍之形',variants:[
  {q:'阻碍在你面前以什么形态出现？',o:[
    {e:'🏔',t:'如山在前——稳固而明确，需要翻越',v:0},
    {e:'💧',t:'如水无形——分散在琐碎日常中',v:1},
    {e:'🌫',t:'如雾弥漫——说不清道不明的不安',v:2},
    {e:'⚡',t:'如雷突发——一件事打乱了所有',v:3}]},
  {q:'挡你的那个东西，长啥样？',o:[
    {e:'🏔',t:'一座山，硬的，得翻过去',v:0},
    {e:'💧',t:'一摊水，散在零碎事里',v:1},
    {e:'🌫',t:'一团雾，说不清哪儿别扭',v:2},
    {e:'⚡',t:'一声雷，猝不及防被打乱',v:3}]},
  {q:'眼下的麻烦，更像哪一种？',o:[
    {e:'🏔',t:'明摆着的大块头，绕不过',v:0},
    {e:'💧',t:'一堆碎渣子，哪件都不大',v:1},
    {e:'🌫',t:'心里没底那种，堵得慌',v:2},
    {e:'⚡',t:'突发状况，一下全乱套',v:3}]},
  {q:'面前的困难，如果是一种自然现象？',o:[
    {e:'🏔',t:'高山——需要攀登才能翻越',v:0},
    {e:'💧',t:'沼泽——越挣扎陷得越深',v:1},
    {e:'🌫',t:'迷雾——看不清方向不敢前进',v:2},
    {e:'⚡',t:'闪电——瞬间摧毁一切计划',v:3}]},
  {q:'什么东西让你感到举步维艰？',o:[
    {e:'🏔',t:'一个巨大的障碍横在面前',v:0},
    {e:'💧',t:'无数小事消耗着精力',v:1},
    {e:'🌫',t:'内心的迷茫和不确定',v:2},
    {e:'⚡',t:'突如其来的意外打断节奏',v:3}]}
]},
{d:'处境 · 根基之感',variants:[
  {q:'你脚下的根基——此刻是什么触感？',o:[
    {e:'🪨',t:'磐石——稳固，无可撼动',v:0},
    {e:'🌍',t:'大地——根基在，但地面微微震动',v:1},
    {e:'🕊',t:'悬空——正在寻找新的立足点',v:2},
    {e:'🌊',t:'流水——本就无需稳固，我在流动中',v:3}]},
  {q:'你脚下踩的地，啥感觉？',o:[
    {e:'🪨',t:'硬梆梆的石头，稳',v:0},
    {e:'🌍',t:'是地，但有点轻微晃',v:1},
    {e:'🕊',t:'空的，还没踩实',v:2},
    {e:'🌊',t:'水，本来也不用稳，我在流动',v:3}]},
  {q:'立足之地，稳不稳？',o:[
    {e:'🪨',t:'稳得一批，纹丝不动',v:0},
    {e:'🌍',t:'还行，就是稍微有点颤',v:1},
    {e:'🕊',t:'悬着，找不着地儿',v:2},
    {e:'🌊',t:'随波走，要啥地',v:3}]},
  {q:'如果你是一棵树，你的根扎得如何？',o:[
    {e:'🪨',t:'深扎岩层——坚不可摧',v:0},
    {e:'🌍',t:'扎在泥土——稳固但偶有震动',v:1},
    {e:'🕊',t:'飘浮在空中——尚未落地',v:2},
    {e:'🌊',t:'随水流漂——本不需要扎根',v:3}]},
  {q:'内心的安全感来源于哪里？',o:[
    {e:'🪨',t:'坚实的物质基础和规划',v:0},
    {e:'🌍',t:'基本稳定但偶有担忧',v:1},
    {e:'🕊',t:'暂时缺失，正在寻找',v:2},
    {e:'🌊',t:'来自变化本身，而非稳定',v:3}]}
]},
// GROUP 1: 感受 🌊 水蓝
{d:'感受 · 内心色调',variants:[
  {q:'最近一周，你内心呈现的主色调是？',o:[
    {e:'🔥',t:'炽热的赤——渴望与冲劲在燃烧',v:0},
    {e:'🌊',t:'沉静的蓝——思考与等待占主导',v:1},
    {e:'☁',t:'混沌的灰——说不清，需要澄明',v:2},
    {e:'✨',t:'透亮的白——空明，万物可入',v:3}]},
  {q:'这周你心里头，是啥颜色？',o:[
    {e:'🔥',t:'红——有股火，想冲',v:0},
    {e:'🌊',t:'蓝——静着，在想事',v:1},
    {e:'☁',t:'灰——说不清，乱',v:2},
    {e:'✨',t:'白——通透，啥都能进来',v:3}]},
  {q:'心情调成哪种底色了？',o:[
    {e:'🔥',t:'暖红，燥得想干点啥',v:0},
    {e:'🌊',t:'冷蓝，慢下来琢磨',v:1},
    {e:'☁',t:'灰扑扑，黏糊糊的',v:2},
    {e:'✨',t:'透亮，没杂念',v:3}]},
  {q:'如果你的心情是一种光，它是什么颜色？',o:[
    {e:'🔥',t:'火光——热烈而有能量',v:0},
    {e:'🌊',t:'月光——清冷而深邃',v:1},
    {e:'☁',t:'暮色——朦胧而暧昧',v:2},
    {e:'✨',t:'日光——纯净而明亮',v:3}]},
  {q:'走进你的内心世界，看到的景象是？',o:[
    {e:'🔥',t:'熊熊篝火，温暖而热烈',v:0},
    {e:'🌊',t:'静谧湖面，平静而深邃',v:1},
    {e:'☁',t:'迷雾森林，看不清前方',v:2},
    {e:'✨',t:'雪后初晴，一片纯净',v:3}]}
]},
{d:'感受 · 入梦之念',variants:[
  {q:'睡前思绪最常停在什么地方？',o:[
    {e:'📋',t:'未完成的事——一件件在眼前排开',v:0},
    {e:'🎞',t:'过去的画面——某个瞬间反复回放',v:1},
    {e:'🔮',t:'未来的可能——各种「如果」在盘旋',v:2},
    {e:'😴',t:'空无一物——倒头便睡',v:3}]},
  {q:'睡前脑子里最后一个画面是啥？',o:[
    {e:'📋',t:'还没干完的活儿，一排排',v:0},
    {e:'🎞',t:'白天的某个镜头，来回放',v:1},
    {e:'🔮',t:'各种"万一"，往后想',v:2},
    {e:'😴',t:'啥也没有，沾枕头就着',v:3}]},
  {q:'躺下那会儿，脑子停在哪儿？',o:[
    {e:'📋',t:'待办清单，一件接一件',v:0},
    {e:'🎞',t:'某个人某句话，绕不开',v:1},
    {e:'🔮',t:'盘算以后这样那样的',v:2},
    {e:'😴',t:'一片空白，秒睡',v:3}]},
  {q:'闭上眼睛那一刻，你的思绪飘向哪里？',o:[
    {e:'📋',t:'今日未完成的工作',v:0},
    {e:'🎞',t:'某个难忘的回忆',v:1},
    {e:'🔮',t:'明天会发生什么',v:2},
    {e:'😴',t:'哪里也不去，放空',v:3}]},
  {q:'梦里通常会出现什么？',o:[
    {e:'📋',t:'忙碌的工作场景',v:0},
    {e:'🎞',t:'故人旧事',v:1},
    {e:'🔮',t:'奇异的未来景象',v:2},
    {e:'😴',t:'很少做梦，一觉天亮',v:3}]}
]},
{d:'感受 · 精力水位',variants:[
  {q:'你的精力此刻在什么水位？',o:[
    {e:'🌊',t:'满溢——想做很多事，能量很足',v:0},
    {e:'🟢',t:'平稳——不多不少，刚好够用',v:1},
    {e:'🕯',t:'低潮——需要刻意补充才能维持',v:2},
    {e:'⚡',t:'波动——今天高涨，明天枯竭',v:3}]},
  {q:'电量还剩多少？',o:[
    {e:'🌊',t:'满格，闲不住',v:0},
    {e:'🟢',t:'够用，不多不少',v:1},
    {e:'🕯',t:'见底了，得硬撑',v:2},
    {e:'⚡',t:'忽高忽低，一阵一阵',v:3}]},
  {q:'这阵子精力咋样？',o:[
    {e:'🌊',t:'爆满，恨不得干十件事',v:0},
    {e:'🟢',t:'还行，正常输出',v:1},
    {e:'🕯',t:'虚，得歇',v:2},
    {e:'⚡',t:'今儿精神明儿蔫',v:3}]},
  {q:'如果用天气形容你的能量状态？',o:[
    {e:'🌊',t:'暴风雨前的能量积蓄',v:0},
    {e:'🟢',t:'阳光明媚的平静',v:1},
    {e:'🕯',t:'阴天缺少阳光',v:2},
    {e:'⚡',t:'晴雨不定的变幻',v:3}]},
  {q:'你现在想做事情的动力是？',o:[
    {e:'🌊',t:'非常充足，迫不及待',v:0},
    {e:'🟢',t:'刚刚好，不多不少',v:1},
    {e:'🕯',t:'很弱，需要外界刺激',v:2},
    {e:'⚡',t:'时有时无，不稳定',v:3}]}
]},
{d:'感受 · 预感之力',variants:[
  {q:'你对接下来会发生什么——有预感吗？',o:[
    {e:'🦅',t:'有，且清晰——直觉知道风向在变',v:0},
    {e:'🌫',t:'模糊——隐约感到有事，但看不清',v:1},
    {e:'🏃',t:'没有——眼前已够忙，顾不上下一步',v:2},
    {e:'🌿',t:'不想预判——放开控制，让它自己发生',v:3}]},
  {q:'接下来要发生啥，你有感觉吗？',o:[
    {e:'🦅',t:'有，还挺清楚，知道风往哪吹',v:0},
    {e:'🌫',t:'模模糊糊的，觉得有事',v:1},
    {e:'🏃',t:'没功夫想，眼前都忙不过来',v:2},
    {e:'🌿',t:'懒得猜，爱咋咋地',v:3}]},
  {q:'对马上要来的事，预感有几分？',o:[
    {e:'🦅',t:'门儿清，心里有数',v:0},
    {e:'🌫',t:'影影绰绰，看不准',v:1},
    {e:'🏃',t:'顾不上，先过今天再说',v:2},
    {e:'🌿',t:'不预判，来了再说',v:3}]},
  {q:'直觉告诉你接下来会怎样？',o:[
    {e:'🦅',t:'非常明确，有很强的方向感',v:0},
    {e:'🌫',t:'有点感觉，但说不清楚',v:1},
    {e:'🏃',t:'没什么感觉，走一步看一步',v:2},
    {e:'🌿',t:'顺其自然，不强求预知',v:3}]},
  {q:'你相信直觉吗？',o:[
    {e:'🦅',t:'非常相信，它很少出错',v:0},
    {e:'🌫',t:'半信半疑，偶尔参考',v:1},
    {e:'🏃',t:'不太相信，更相信事实',v:2},
    {e:'🌿',t:'无所谓，信与不信都行',v:3}]}
]},
// GROUP 2: 行动 ⚔ 火赤
{d:'行动 · 应对之姿',variants:[
  {q:'面对这一周外界的变化，你采取了什么姿态？',o:[
    {e:'⚔',t:'正面迎击——主动出击，以刚克刚',v:0},
    {e:'🏹',t:'迂回绕行——避其锋芒，寻找侧路',v:1},
    {e:'🧘',t:'静止不动——以不变应万变',v:2},
    {e:'⛵',t:'顺势借力——让变化本身带着我走',v:3}]},
  {q:'外面有变动，你怎么接？',o:[
    {e:'⚔',t:'硬刚，正面干',v:0},
    {e:'🏹',t:'绕一下，找侧门',v:1},
    {e:'🧘',t:'不动，等着看',v:2},
    {e:'⛵',t:'顺水推舟，让它带我走',v:3}]},
  {q:'碰上事儿，你的招数是？',o:[
    {e:'⚔',t:'迎上去，刚正面',v:0},
    {e:'🏹',t:'避其锋芒，迂回点',v:1},
    {e:'🧘',t:'稳住不动，以静制动',v:2},
    {e:'⛵',t:'借力打力，顺势而为',v:3}]},
  {q:'面对挑战时，你的第一反应是？',o:[
    {e:'⚔',t:'勇敢面对，主动解决',v:0},
    {e:'🏹',t:'寻找其他途径，避免正面冲突',v:1},
    {e:'🧘',t:'保持冷静，观察局势',v:2},
    {e:'⛵',t:'顺势而为，借力打力',v:3}]},
  {q:'如果人生是一场游戏，你选择什么角色？',o:[
    {e:'⚔',t:'战士——主动出击，不畏艰险',v:0},
    {e:'🏹',t:'刺客——灵活机动，寻找机会',v:1},
    {e:'🧘',t:'法师——冷静分析，运筹帷幄',v:2},
    {e:'⛵',t:'德鲁伊——与自然和谐，顺势而为',v:3}]}
]},
{d:'行动 · 人际之距',variants:[
  {q:'这一周，你与周围人的距离是怎样的？',o:[
    {e:'🤝',t:'被靠近——别人向你伸手的时候多了',v:0},
    {e:'🙋',t:'在靠近——你主动寻求支持与连接',v:1},
    {e:'🚪',t:'在保持距离——给自己留出空间',v:2},
    {e:'⚡',t:'出现了裂痕——某个关系需要面对',v:3}]},
  {q:'这周你跟周围人，啥距离？',o:[
    {e:'🤝',t:'别人往我这边凑的多',v:0},
    {e:'🙋',t:'是我主动凑过去的',v:1},
    {e:'🚪',t:'我想离远点，给自己腾地方',v:2},
    {e:'⚡',t:'出裂了，有个关系得处理',v:3}]},
  {q:'跟人之间，最近是啥状态？',o:[
    {e:'🤝',t:'被拉着，有人找我',v:0},
    {e:'🙋',t:'我找别人多',v:1},
    {e:'🚪',t:'躲着点，别太近',v:2},
    {e:'⚡',t:'别扭着，有缝了',v:3}]},
  {q:'最近在人际交往中，你感觉是？',o:[
    {e:'🤝',t:'很受欢迎，很多人主动接近',v:0},
    {e:'🙋',t:'积极主动，主动建立联系',v:1},
    {e:'🚪',t:'保持距离，享受独处',v:2},
    {e:'⚡',t:'有些矛盾，需要处理关系',v:3}]},
  {q:'你现在最需要的人际关系是？',o:[
    {e:'🤝',t:'被认可和支持',v:0},
    {e:'🙋',t:'去帮助和支持他人',v:1},
    {e:'🚪',t:'独立和空间',v:2},
    {e:'⚡',t:'坦诚沟通解决问题',v:3}]}
]},
{d:'行动 · 决断之态',variants:[
  {q:'面对需要做决定的事——你的状态更接近？',o:[
    {e:'✂',t:'已经做了——果断利落，一刀切下',v:0},
    {e:'⚖',t:'正在斟酌——反复权衡，还在推演',v:1},
    {e:'⏸',t:'推迟了——眼下不是做决定的时候',v:2},
    {e:'🌀',t:'没决定本身就是一个决定——在悬置中',v:3}]},
  {q:'该拍板的事，你啥状态？',o:[
    {e:'✂',t:'拍了，干脆利落',v:0},
    {e:'⚖',t:'还在掂量，来回想',v:1},
    {e:'⏸',t:'先放放，现在不是时候',v:2},
    {e:'🌀',t:'没定就是定了，先悬着',v:3}]},
  {q:'做决定这块儿，你到哪步了？',o:[
    {e:'✂',t:'定完了，一刀切',v:0},
    {e:'⚖',t:'权衡中，没下嘴',v:1},
    {e:'⏸',t:'往后推了，等等看',v:2},
    {e:'🌀',t:'吊着，不定也是种定',v:3}]},
  {q:'面对重大选择时，你通常？',o:[
    {e:'✂',t:'快速决策，果断行动',v:0},
    {e:'⚖',t:'仔细分析，权衡利弊',v:1},
    {e:'⏸',t:'暂时搁置，等待时机',v:2},
    {e:'🌀',t:'顺其自然，相信直觉',v:3}]},
  {q:'做决定对你来说是？',o:[
    {e:'✂',t:'很容易，喜欢当机立断',v:0},
    {e:'⚖',t:'有点难，需要反复思考',v:1},
    {e:'⏸',t:'很难，常常拖延',v:2},
    {e:'🌀',t:'不纠结，随缘就好',v:3}]}
]},
{d:'行动 · 压力之应',variants:[
  {q:'当压力来袭时，你的应对方式更接近？',o:[
    {e:'🏃',t:'化为行动——做点什么，哪怕只是小事',v:0},
    {e:'🧘',t:'向内收敛——安静下来，理清思路',v:1},
    {e:'🗣',t:'向外求助——找人聊聊，借一双耳朵',v:2},
    {e:'💥',t:'释放宣泄——让它出来，不憋着',v:3}]},
  {q:'压上来的时候，你习惯怎么扛？',o:[
    {e:'🏃',t:'找事干，动起来就好',v:0},
    {e:'🧘',t:'缩回去，静一静',v:1},
    {e:'🗣',t:'找人倒倒，借双耳朵',v:2},
    {e:'💥',t:'宣泄出来，不憋着',v:3}]},
  {q:'一有压力，你的出口是？',o:[
    {e:'🏃',t:'动手，忙起来压下去',v:0},
    {e:'🧘',t:'独处，理理头绪',v:1},
    {e:'🗣',t:'聊聊，说出来',v:2},
    {e:'💥',t:'释放，别闷在心里',v:3}]},
  {q:'压力大的时候，你最想？',o:[
    {e:'🏃',t:'出去跑一圈，动起来',v:0},
    {e:'🧘',t:'找个安静的地方待着',v:1},
    {e:'🗣',t:'找朋友倾诉',v:2},
    {e:'💥',t:'大哭一场或发泄一下',v:3}]},
  {q:'面对压力，你的本能反应是？',o:[
    {e:'🏃',t:'积极应对，解决问题',v:0},
    {e:'🧘',t:'冷静思考，寻找办法',v:1},
    {e:'🗣',t:'寻求帮助，分担压力',v:2},
    {e:'💥',t:'情绪释放，缓解压力',v:3}]}
]},
// GROUP 3: 走向 🔮 金黄
{d:'走向 · 投影之形',variants:[
  {q:'把这一周的状态投影到未来——你看到什么？',o:[
    {e:'📈',t:'上升——曲线在往上走',v:0},
    {e:'🌳',t:'扎根——不是在爬升，而是在深入',v:1},
    {e:'🔄',t:'转弯——方向正在发生改变',v:2},
    {e:'🌫',t:'空白——未来还不能被看见',v:3}]},
  {q:'把现在这状态往以后看，你瞅见啥？',o:[
    {e:'📈',t:'往上走，曲线抬头',v:0},
    {e:'🌳',t:'往下扎，不是爬是在深',v:1},
    {e:'🔄',t:'要拐弯，方向在变',v:2},
    {e:'🌫',t:'一片白，看不见',v:3}]},
  {q:'往未来一望，啥形状？',o:[
    {e:'📈',t:'上扬的，往上',v:0},
    {e:'🌳',t:'往土里钻，扎根',v:1},
    {e:'🔄',t:'在转方向',v:2},
    {e:'🌫',t:'啥也看不清',v:3}]},
  {q:'你觉得未来的发展趋势是？',o:[
    {e:'📈',t:'越来越好，持续上升',v:0},
    {e:'🌳',t:'稳扎稳打，逐步深入',v:1},
    {e:'🔄',t:'即将改变方向',v:2},
    {e:'🌫',t:'不确定，顺其自然',v:3}]},
  {q:'如果用天气比喻未来，你觉得是？',o:[
    {e:'📈',t:'晴空万里，阳光明媚',v:0},
    {e:'🌳',t:'细雨绵绵，润物无声',v:1},
    {e:'🔄',t:'风云变幻，即将变天',v:2},
    {e:'🌫',t:'迷雾重重，看不清前路',v:3}]}
]},
{d:'走向 · 内心召唤',variants:[
  {q:'你内心——有没有什么东西在召唤你？',o:[
    {e:'🧭',t:'有且明确——我知道我要去哪里',v:0},
    {e:'🌅',t:'有但模糊——只是一个方向感',v:1},
    {e:'🌿',t:'没有——活在当下就够了',v:2},
    {e:'🔇',t:'曾经有过，但最近听不到了',v:3}]},
  {q:'心里有没有个声音在喊你？',o:[
    {e:'🧭',t:'有，方向挺清楚',v:0},
    {e:'🌅',t:'有点儿，但模模糊糊',v:1},
    {e:'🌿',t:'没有，眼前就够忙了',v:2},
    {e:'🔇',t:'以前有，最近听不见了',v:3}]},
  {q:'你心里那个"该去做的事"，还在吗？',o:[
    {e:'🧭',t:'在，明明白白',v:0},
    {e:'🌅',t:'在，但还不太清晰',v:1},
    {e:'🌿',t:'顾不上，活在当下',v:2},
    {e:'🔇',t:'凉了，没啥召唤了',v:3}]},
  {q:'你的人生目标清晰吗？',o:[
    {e:'🧭',t:'非常清晰，知道要去哪里',v:0},
    {e:'🌅',t:'有大致方向，但还不明确',v:1},
    {e:'🌿',t:'没有明确目标，享受当下',v:2},
    {e:'🔇',t:'曾经有过，但现在迷失了',v:3}]},
  {q:'你现在最想做的事情是什么？',o:[
    {e:'🧭',t:'非常清楚，正在努力实现',v:0},
    {e:'🌅',t:'有点想法，但还没确定',v:1},
    {e:'🌿',t:'没想太多，过好每一天',v:2},
    {e:'🔇',t:'不知道，感觉迷茫',v:3}]}
]},
{d:'走向 · 转向之问',variants:[
  {q:'如果有一个声音劝你「该换个方向了」——',o:[
    {e:'🏃',t:'已经在换了——无需劝说',v:0},
    {e:'🤔',t:'会认真考虑——但需要证据',v:1},
    {e:'⏳',t:'听听而已——现在不是转向的时候',v:2},
    {e:'🚫',t:'拒绝——这条路我还没走完',v:3}]},
  {q:'有人劝你"该换条道了"，你？',o:[
    {e:'🏃',t:'早换了，不用劝',v:0},
    {e:'🤔',t:'会琢磨，但得给我理由',v:1},
    {e:'⏳',t:'听听得了，现在不动',v:2},
    {e:'🚫',t:'不换，这条还没走完',v:3}]},
  {q:'要是有人让你改方向——',o:[
    {e:'🏃',t:'已经在改了',v:0},
    {e:'🤔',t:'可以考虑，要看证据',v:1},
    {e:'⏳',t:'先听着，时机不到',v:2},
    {e:'🚫',t:'免谈，没到头呢',v:3}]},
  {q:'如果现在有机会换一条路，你会？',o:[
    {e:'🏃',t:'立刻行动，毫不犹豫',v:0},
    {e:'🤔',t:'仔细评估，看看是否合适',v:1},
    {e:'⏳',t:'暂时不换，先等等看',v:2},
    {e:'🚫',t:'坚决不换，继续走下去',v:3}]},
  {q:'你觉得现在是改变方向的时候吗？',o:[
    {e:'🏃',t:'是的，已经在行动了',v:0},
    {e:'🤔',t:'可能是，但还在犹豫',v:1},
    {e:'⏳',t:'不是，时机还没到',v:2},
    {e:'🚫',t:'不是，这条路还没走完',v:3}]}
]},
{d:'走向 · 关键词',variants:[
  {q:'最后——你觉得这一周最接近哪个词？',o:[
    {e:'💥',t:'突围——冲破某种限制或旧模式',v:0},
    {e:'🕯',t:'沉寂——在安静中重新认识自己',v:1},
    {e:'🤝',t:'连接——与他人建立了新的纽带',v:2},
    {e:'🍂',t:'释放——放下了某个执念或旧人',v:3}]},
  {q:'最后——这周一个词概括？',o:[
    {e:'💥',t:'突围——冲出去',v:0},
    {e:'🕯',t:'沉寂——静静待着',v:1},
    {e:'🤝',t:'连接——搭上谁了',v:2},
    {e:'🍂',t:'释放——放下了点啥',v:3}]},
  {q:'用一句话说，这周是？',o:[
    {e:'💥',t:'破局，干翻点东西',v:0},
    {e:'🕯',t:'安静，重新认认自己',v:1},
    {e:'🤝',t:'跟谁接上了头',v:2},
    {e:'🍂',t:'松手了，放下旧的',v:3}]},
  {q:'这一周对你来说意味着什么？',o:[
    {e:'💥',t:'突破——打破旧的格局',v:0},
    {e:'🕯',t:'沉淀——积累内在力量',v:1},
    {e:'🤝',t:'相遇——建立新的关系',v:2},
    {e:'🍂',t:'告别——结束一段旅程',v:3}]},
  {q:'如果给这周画一幅画，你会画什么？',o:[
    {e:'💥',t:'冲破云层的阳光',v:0},
    {e:'🕯',t:'深夜窗前的烛光',v:1},
    {e:'🤝',t:'两只紧握的手',v:2},
    {e:'🍂',t:'飘落的秋叶',v:3}]}
]},
];

// 本次会话选定的题面（每个元素为 {d,q,o} 形状，与原结构一致）
var QV=[];
var QVidx=[]; // 每题本次选中的 variant 序号（用于存入历史、查看历史时还原题面）
// 每次进入答题前，从每题的 variants 中随机挑一版
function pickQuizVariants(){
  QV=[];QVidx=[];
  Q.forEach(function(item){
    var i=Math.floor(Math.random()*item.variants.length);
    var v=item.variants[i];
    QV.push({d:item.d,q:v.q,o:v.o});
    QVidx.push(i);
  });
}
// 按历史记录里存的版本序号还原题面（用于查看历史卦象时显示"答题关键词"）
function restoreVariants(vi){
  QV=[];QVidx=[];
  Q.forEach(function(item,idx){
    var i=(vi&&vi[idx]!=null)?vi[idx]:0; // 没有则回退到原版（第 0 个）
    var v=item.variants[i]||item.variants[0];
    QV.push({d:item.d,q:v.q,o:v.o});
    QVidx.push(i);
  });
}

const GRP_META=[
  {name:'处境',icon:'🌍',cls:'grp-0',enter:'left'},
  {name:'感受',icon:'🌊',cls:'grp-1',enter:'down'},
  {name:'行动',icon:'⚔',cls:'grp-2',enter:'right'},
  {name:'走向',icon:'🔮',cls:'grp-3',enter:'up'},
];
const GRP_NAMES=['处境','感受','行动','走向'];
const GRP_ICONS=['🌍','🌊','⚔','🔮'];

// 八卦卦系配色（根据上下卦归到八类）
const TRIGRAM_FAMILIES={
  0x3F:'qian', 0x00:'kun', 0x2A:'kan', 0x15:'li',
  0x24:'zhen', 0x0C:'gen', 0x03:'xun', 0x39:'dui',
};
function getHexFamily(hexIdx){
  // 简化：取上卦和下卦，以纯卦为主；混合卦就近归类到阴阳倾向
  var upper=hexIdx>>3, lower=hexIdx&7;
  var pureUpper=upper===7?'qian':upper===0?'kun':upper===2?'kan':upper===5?'li':upper===4?'zhen':upper===1?'gen':upper===3?'xun':upper===6?'dui':null;
  if(pureUpper)return pureUpper;
  // 下卦纯
  var pureLower=lower===7?'qian':lower===0?'kun':lower===2?'kan':lower===5?'li':lower===4?'zhen':lower===1?'gen':lower===3?'xun':lower===6?'dui':null;
  if(pureLower)return pureLower;
  // 阴阳数量倾向
  var bc=0;for(var i=0;i<6;i++)if(hexIdx&(1<<i))bc++;
  return bc>=4?'qian':bc<=2?'kun':'li';
}

// ===== 核心算法 =====
function xorFold(answers){
  var parts=[];
  for(var g=0;g<5;g++){
    var v=0;
    for(var b=0;b<6;b++){
      var qi=g*6+b;
      if(qi<16) v|=(answers[qi]&3)<<(b*2);
    }
    parts.push(v&0xFFF);
  }
  var rem=answers[15]>>1;
  var result=rem;
  for(var i=0;i<parts.length;i++) result^=parts[i];
  // 加一个基于答案分布的轻微扰动以避免分布集中
  var sum=0;for(var j=0;j<16;j++)sum+=answers[j];
  result^=(sum*7)&0x3F;
  return result&0x3F;
}
function getChangeMask(answers){
  var mask=0;
  // 确定性算法：基于答案异或投影，不用随机
  for(var i=0;i<6;i++){
    var a=answers[i*2], b=answers[i*2+1];
    var diff=Math.abs(a-b);
    if(diff>=2) mask|=(1<<i);          // 强烈对立 → 动爻
    else if(diff===1 && (a+b+i)%3===0) mask|=(1<<i); // 弱对立 + 位置哈希 → 偶尔动爻
  }
  // 如果六爻皆静，在答案最"不平衡"的一爻加一个动爻，增加趣味（确定性）
  if(mask===0){
    var maxD=0,maxI=0;
    for(var j=0;j<6;j++){
      var d=Math.abs(answers[j*2]-answers[j*2+1]);
      if(d>maxD){maxD=d;maxI=j;}
    }
    if(maxD>=1) mask|=(1<<maxI);
  }
  return mask;
}

// ===== 状态 =====
var answers=new Array(16).fill(0),qI=0;
var hexIdx=-1,changeMask=0,unlocked=false;
var soundOn=true;    // 默认音效开启
var musicOn=true;    // 默认背景音乐开启
var audioCtx=null;
var audioPrimed=false; // 标记是否已完成第一次用户交互（激活 AudioContext）
var musicNodes=null;
var COOLDOWN_MS=7*24*60*60*1000; // 7天
var STORAGE_KEY='iching-now-history';
var FAV_KEY='iching-now-favorites';
var NOTE_KEY='iching-now-notes';
var REMIND_KEY='iching-now-reminder';

// ===== 存储 =====
function loadHistory(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');}catch(e){return[];}
}
function saveHistory(record){
  var hist=loadHistory();
  hist.unshift(record);
  if(hist.length>50)hist=hist.slice(0,50);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(hist));
}
function loadFavorites(){
  try{return JSON.parse(localStorage.getItem(FAV_KEY)||'[]');}catch(e){return[];}
}
function saveFavorites(favs){
  localStorage.setItem(FAV_KEY,JSON.stringify(favs));
}
function toggleFavorite(hexIdx){
  var favs=loadFavorites();
  var idx=favs.indexOf(hexIdx);
  if(idx>=0){
    favs.splice(idx,1);
    showAlert('已取消收藏','卦象已从收藏中移除','⭐');
  }else{
    favs.push(hexIdx);
    showAlert('收藏成功','卦象已添加到收藏','⭐');
  }
  saveFavorites(favs);
  updateFavoriteBtn();
}
function isFavorite(hexIdx){
  return loadFavorites().indexOf(hexIdx)>=0;
}
function updateFavoriteBtn(){
  var btn=document.getElementById('btnFavorite');
  if(!btn||hexIdx<0)return;
  btn.textContent=isFavorite(hexIdx)?'⭐ 已收藏此卦象':'⭐ 收藏此卦象';
}

function loadNotes(){
  try{return JSON.parse(localStorage.getItem(NOTE_KEY)||'{}');}catch(e){return{};}
}
function saveNotes(notes){
  localStorage.setItem(NOTE_KEY,JSON.stringify(notes));
}
function addNote(hexIdx,text){
  var notes=loadNotes();
  if(!notes[hexIdx])notes[hexIdx]=[];
  notes[hexIdx].unshift({text:text,time:Date.now()});
  if(notes[hexIdx].length>10)notes[hexIdx]=notes[hexIdx].slice(0,10);
  saveNotes(notes);
}
function getNotes(hexIdx){
  var notes=loadNotes();
  return notes[hexIdx]||[];
}

function loadReminder(){
  try{return JSON.parse(localStorage.getItem(REMIND_KEY)||'null');}catch(e){return null;}
}
function saveReminder(r){
  localStorage.setItem(REMIND_KEY,JSON.stringify(r));
}
function setDailyReminder(){
  if(!('Notification' in window)){
    showAlert('不支持','当前浏览器不支持推送通知','⏰');
    return;
  }
  Notification.requestPermission().then(function(perm){
    if(perm!=='granted'){
      showAlert('未授权','请允许通知权限以接收每日运势提醒','⏰');
      return;
    }
    var time='08:00';
    saveReminder({time:time,hex:hexIdx,enabled:true});
    showAlert('提醒已设置','每日 '+time+' 将收到卦象运势提醒','⏰');
    scheduleReminder();
  });
}
function scheduleReminder(){
  var r=loadReminder();
  if(!r||!r.enabled)return;
  var now=new Date();
  var parts=r.time.split(':');
  var target=new Date();
  target.setHours(parseInt(parts[0]),parseInt(parts[1]),0,0);
  if(target<=now)target.setDate(target.getDate()+1);
  var delay=target.getTime()-now.getTime();
  
  setTimeout(function(){
    showDailyNotification();
    scheduleReminder();
  },delay);
}
function showDailyNotification(){
  var r=loadReminder();
  if(!r)return;
  var hd=getHex(r.hex);
  var title='📅 今日卦象提醒';
  var body=hd.name+' · '+hd.tag+'\n'+hd.short;
  new Notification(title,{body:body,icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">☯</text></svg>'});
}
function checkReminderOnLoad(){
  var r=loadReminder();
  if(!r||!r.enabled)return;
  scheduleReminder();
}

function getLastRecord(){
  var h=loadHistory();
  return h.length?h[0]:null;
}
function isInCooldown(){
  var last=getLastRecord();
  if(!last)return false;
  return (Date.now()-last.time)<COOLDOWN_MS;
}
function cooldownRemaining(){
  var last=getLastRecord();
  if(!last)return 0;
  var rem=COOLDOWN_MS-(Date.now()-last.time);
  return rem>0?rem:0;
}
function fmtTime(ms){
  var s=Math.floor(ms/1000);
  var d=Math.floor(s/86400);s%=86400;
  var h=Math.floor(s/3600);s%=3600;
  var m=Math.floor(s/60);s%=60;
  if(d>0)return d+'天 '+h+'时';
  return pad(h)+':'+pad(m)+':'+pad(s);
}
function pad(n){return n<10?'0'+n:''+n;}
function vib(pat){try{if(navigator.vibrate)navigator.vibrate(pat||10);}catch(e){}}

// ===== 声音 =====
function initAudio(){
  if(audioCtx)return;
  try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}
}
// 激活 AudioContext 并自动开启音乐。幂等：可重复调用，重复调用仅做 resume/补启动。
function primeAudio(){
  initAudio();
  if(!audioCtx)return;
  if(audioCtx.state==='suspended')audioCtx.resume();
  if(musicOn&&!musicNodes)startMusic();
  audioPrimed=true;
  updateAudioButtons();
}
// 同步右上角两个音频按钮的图标与 muted 状态
function updateAudioButtons(){
  var sb=document.getElementById('btnSound'),mb=document.getElementById('btnMusic');
  if(sb){sb.textContent=soundOn?'🔔':'🔕';sb.classList.toggle('muted',!soundOn);}
  if(mb){mb.textContent=musicOn?'🎶':'🎵';mb.classList.toggle('muted',!musicOn);}
}
function chime(freq,delay,dur,vol,type){
  if(!audioCtx||!soundOn)return;
  var t=audioCtx.currentTime+delay;
  var o=audioCtx.createOscillator();
  var g=audioCtx.createGain();
  o.type=type||'sine';
  o.frequency.setValueAtTime(freq,t);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(vol||0.12,t+0.02);
  g.gain.exponentialRampToValueAtTime(0.001,t+dur);
  o.connect(g).connect(audioCtx.destination);
  o.start(t);o.stop(t+dur);
  // 泛音
  var o2=audioCtx.createOscillator(),g2=audioCtx.createGain();
  o2.type='sine';o2.frequency.setValueAtTime(freq*2,t);
  g2.gain.setValueAtTime(0,t);
  g2.gain.linearRampToValueAtTime((vol||0.12)*0.2,t+0.03);
  g2.gain.exponentialRampToValueAtTime(0.001,t+dur*0.7);
  o2.connect(g2).connect(audioCtx.destination);
  o2.start(t);o2.stop(t+dur*0.7);
}
function playIntroChime(){
  if(!soundOn)return;initAudio();
  // 五声音阶
  var s=[261.63,329.63,440.00,523.25];
  s.forEach(function(f,i){chime(f,i*0.18,2.5-i*0.2,0.09);});
}
function playLineDing(i,isYang){
  if(!soundOn)return;initAudio();
  // 阳用木铎(高频清亮三角波)，阴用陶埙(低频正弦)
  var base=[196,220,261.63,293.66,329.63,392][i];
  chime(base,0,isYang?0.9:1.4,0.08,isYang?'triangle':'sine');
}
function playFinalGong(){
  if(!soundOn)return;initAudio();
  var t=audioCtx.currentTime;
  var o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type='sine';o.frequency.setValueAtTime(110,t);
  o.frequency.exponentialRampToValueAtTime(55,t+4);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(0.18,t+0.2);
  g.gain.exponentialRampToValueAtTime(0.001,t+4);
  o.connect(g).connect(audioCtx.destination);
  o.start(t);o.stop(t+4);
  chime(523,0.3,2.5,0.05,'sine');
  chime(659,0.6,2,0.04,'sine');
  chime(784,0.9,1.8,0.03,'sine');
}
function playClick(){chime(440+Math.random()*80,0,0.15,0.04,'sine');}
function playBreatheTone(phase){
  if(!soundOn)return;initAudio();
  var f=phase===0?220:phase===1?330:440;
  chime(f,0,1.8,0.06,'sine');
}
function toggleSound(){
  primeAudio();
  soundOn=!soundOn;
  updateAudioButtons();
  if(soundOn)chime(659,0,0.3,0.06);
}

// ===== 背景音乐：古琴泛音环境音（Web Audio 合成，无需外部文件）=====
// 五声音阶：宫(261.6)商(293.7)角(329.6)徵(392.0)羽(440.0) + 高八度
var PENTA=[196.0,220.0,261.6,293.7,329.6,392.0,440.0,523.3,587.3];
function startMusic(){
  if(musicNodes)return; // 已在播放，避免重复创建节点
  initAudio();if(audioCtx&&audioCtx.state==='suspended')audioCtx.resume();
  if(!audioCtx)return;
  musicOn=true;
  var master=audioCtx.createGain();
  master.gain.setValueAtTime(0,audioCtx.currentTime);
  master.gain.linearRampToValueAtTime(0.08,audioCtx.currentTime+2); // 非常轻
  master.connect(audioCtx.destination);

  // 低通滤波器（柔和音色）
  var lp=audioCtx.createBiquadFilter();
  lp.type='lowpass';lp.frequency.value=1800;lp.Q.value=0.7;
  lp.connect(master);

  // 基础 drone：两个低音五度叠音，慢颤
  var drones=[];
  function makeDrone(freq){
    var o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type='sine';o.frequency.value=freq;
    g.gain.value=0;
    var lfo=audioCtx.createOscillator(),lfoG=audioCtx.createGain();
    lfo.frequency.value=0.08+Math.random()*0.06;
    lfoG.gain.value=0.015;
    lfo.connect(lfoG).connect(g.gain);
    o.connect(g).connect(lp);
    g.gain.linearRampToValueAtTime(0.15,audioCtx.currentTime+3);
    o.start();lfo.start();
    return {o:o,g:g,lfo:lfo};
  }
  drones.push(makeDrone(130.8));  // C3
  drones.push(makeDrone(196.0));  // G3 五度
  // 一个高频轻和声
  var air=audioCtx.createOscillator(),airG=audioCtx.createGain();
  air.type='triangle';air.frequency.value=523.3;
  airG.gain.value=0;
  var airLfo=audioCtx.createOscillator(),airLfoG=audioCtx.createGain();
  airLfo.frequency.value=0.13;airLfoG.gain.value=0.02;
  airLfo.connect(airLfoG).connect(airG.gain);
  air.connect(airG).connect(lp);
  airG.gain.linearRampToValueAtTime(0.05,audioCtx.currentTime+4);
  air.start();airLfo.start();
  drones.push({o:air,g:airG,lfo:airLfo});

  // 不定期飘一个泛音音符（模拟古琴散音）
  var lastIdx=-1;
  function pluckNote(){
    if(!musicOn||!audioCtx)return;
    var idx;
    do{idx=Math.floor(Math.random()*PENTA.length);}while(Math.abs(idx-lastIdx)<2&&Math.random()<0.6);
    lastIdx=idx;
    var f=PENTA[idx];
    var t=audioCtx.currentTime;
    // 主音（三角波柔和拨弦感）
    var o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type='triangle';o.frequency.value=f;
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(0.12,t+0.05);
    g.gain.exponentialRampToValueAtTime(0.001,t+3.5);
    o.connect(g).connect(lp);
    o.start(t);o.stop(t+4);
    // 八度泛音
    var o2=audioCtx.createOscillator(),g2=audioCtx.createGain();
    o2.type='sine';o2.frequency.value=f*2;
    g2.gain.setValueAtTime(0,t);
    g2.gain.linearRampToValueAtTime(0.04,t+0.08);
    g2.gain.exponentialRampToValueAtTime(0.001,t+2.5);
    o2.connect(g2).connect(lp);
    o2.start(t);o2.stop(t+3);
    // 偶尔加一个下行装饰音
    if(Math.random()<0.3){
      var o3=audioCtx.createOscillator(),g3=audioCtx.createGain();
      o3.type='sine';o3.frequency.setValueAtTime(f*1.5,t+1.5);
      o3.frequency.exponentialRampToValueAtTime(f,t+3);
      g3.gain.setValueAtTime(0,t+1.5);
      g3.gain.linearRampToValueAtTime(0.03,t+1.6);
      g3.gain.exponentialRampToValueAtTime(0.001,t+3.2);
      o3.connect(g3).connect(lp);
      o3.start(t+1.5);o3.stop(t+3.3);
    }
    // 下一次：4-10 秒后
    musicNodes.pluckTimer=setTimeout(pluckNote,4000+Math.random()*6000);
  }
  // 1.5 秒后第一个音，然后循环
  musicNodes={master:master,lp:lp,drones:drones,pluckTimer:setTimeout(pluckNote,1500)};
}
function stopMusic(){
  if(!musicOn)return;
  musicOn=false;
  if(!musicNodes||!audioCtx)return;
  var t=audioCtx.currentTime;
  musicNodes.master.gain.cancelScheduledValues(t);
  musicNodes.master.gain.setValueAtTime(musicNodes.master.gain.value,t);
  musicNodes.master.gain.linearRampToValueAtTime(0,t+1.2);
  if(musicNodes.pluckTimer)clearTimeout(musicNodes.pluckTimer);
  var nodes=musicNodes;
  musicNodes=null; // 立即释放，便于随后重新 startMusic 不会被判为“已在播放”
  setTimeout(function(){
    try{
      nodes.drones.forEach(function(d){try{d.o.stop();d.lfo.stop();}catch(e){}});
    }catch(e){}
  },1300);
}
function toggleMusic(){
  primeAudio();
  if(musicOn){
    stopMusic();
  }else{
    startMusic();
    chime(523,0,0.4,0.06);
    chime(784,0.15,0.5,0.04);
  }
  updateAudioButtons();
}

// ===== Modal =====
function showAlert(title,body,icon){
  document.getElementById('alertTitle').textContent=title||'';
  document.getElementById('alertBody').innerHTML=body||'';
  if(icon)document.getElementById('alertIcon').textContent=icon;
  document.getElementById('overlayAlert').classList.add('active');
}
var _adTimer=null;
function showAdThen(cb){
  var modal=document.getElementById('overlayAd');
  var btn=document.getElementById('btnAdDone');
  var body=document.getElementById('adBody');
  modal.classList.add('active');
  body.innerHTML='📺 广告位<br><br>广告加载中…<br><br><span style="font-size:12px;color:#b8a88a;">（实际部署时接入微信广告 / Google AdSense）</span>';
  var n=5;
  btn.disabled=true;btn.style.opacity='0.5';
  btn.innerHTML='请稍候 <span id="adCountdown">'+n+'</span>s';
  var cd=document.getElementById('adCountdown');
  if(_adTimer){clearInterval(_adTimer);_adTimer=null;}
  _adTimer=setInterval(function(){
    n--;
    if(cd)cd.textContent=n;
    if(n<=0){
      clearInterval(_adTimer);_adTimer=null;
      btn.disabled=false;btn.style.opacity='1';
      btn.innerHTML='✓ 点此解锁完整解读';
      vib(15);
      chime(659,0,0.3,0.06);
    }
  },1000);
  btn.onclick=function(){
    if(btn.disabled)return;
    modal.classList.remove('active');
    if(_adTimer){clearInterval(_adTimer);_adTimer=null;}
    btn.onclick=null;
    cb&&cb();
  };
}
function closeAdModal(){
  var modal=document.getElementById('overlayAd');
  if(!modal.classList.contains('active'))return;
  modal.classList.remove('active');
  if(_adTimer){clearInterval(_adTimer);_adTimer=null;}
  var btn=document.getElementById('btnAdDone');
  btn.onclick=null;
  btn.disabled=false;btn.style.opacity='1';
  btn.innerHTML='✓ 解锁完整解读';
}
function closeAllModals(){
  document.querySelectorAll('.modal.active').forEach(function(m){m.classList.remove('active');});
  closeAdModal(); // 清理广告弹窗的 timer/回调
}
document.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',closeAllModals);});
document.querySelectorAll('.modal').forEach(function(m){
  m.addEventListener('click',function(e){if(e.target===m)m.classList.remove('active');});
});
document.getElementById('btnAlertOk').addEventListener('click',closeAllModals);
// 点遮罩关闭广告弹窗时清理 timer
document.getElementById('overlayAd').addEventListener('click',function(e){
  if(e.target===this)closeAdModal();
});

// ===== 屏幕切换 =====
function S(id){
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  var ls=document.getElementById('s-loading');
  if(ls)ls.classList.remove('active');
  var e=document.getElementById('s-'+id);
  if(e){e.classList.add('active');e.scrollTop=0;}
  window.scrollTo({top:0,behavior:id==='result'?'auto':'smooth'});
}

// ===== 四维主题切换 =====
function applyGrpTheme(grp){
  document.body.className=document.body.className.replace(/grp-\d+/g,'').trim();
  document.body.classList.add(GRP_META[grp].cls);
  // 答题页入场方向
  var dir=GRP_META[grp].enter;
  var qt=document.getElementById('qText');
  var qd=document.getElementById('qDim');
  if(qt){qt.style.animation='none';qt.offsetHeight;qt.style.animation=dir==='left'?'fadeInLeft 0.4s ease':dir==='right'?'fadeInRight 0.4s ease':dir==='up'?'fadeInUp 0.4s ease':'fadeInDown 0.4s ease';}
}
function applyHexTheme(hexIdx){
  // 清除旧卦系
  document.body.className=document.body.className.replace(/hex-\w+/g,'').trim();
  var fam=getHexFamily(hexIdx);
  document.body.classList.add('hex-'+fam);
  // 停转背景并定位到卦的方位
  rotateBaguaToHex(hexIdx);
}
// 卦→先天八卦方位（把代表卦旋转到上方）
const TRIGRAM_ANGLES={qian:-90,dui:-45,li:0,zhen:45,kun:90,gen:135,kan:180,xun:225};
function rotateBaguaToHex(hexIdx){
  var upper=hexIdx>>3;
  var triKeys=['kun','gen','kan','xun','zhen','li','dui','qian'];
  var triName=triKeys[upper]||'qian';
  var targetAngle=TRIGRAM_ANGLES[triName]||-90;
  // 当前 CSS 动画是 120s/圈，我们取它停下来的位置到 targetAngle+90（让该卦象在正上方）
  var big=document.getElementById('bgBaguaBig');
  if(big){
    // 取当前动画角度
    big.style.animationPlayState='paused';
    // 用 transition 平滑转到目标
    big.style.transition='transform 1.5s cubic-bezier(.22,.61,.36,1)';
    big.style.transform='translate(-50%,-50%) rotate('+(targetAngle+90)+'deg)';
  }
  var small=document.getElementById('bgBaguaSmall');
  if(small){
    small.style.animationPlayState='paused';
    small.style.transition='transform 1.5s cubic-bezier(.22,.61,.36,1)';
    small.style.transform='translate(-50%,-50%) rotate('+(-targetAngle-90)+'deg)';
  }
}
function resetBagua(){
  var big=document.getElementById('bgBaguaBig'),small=document.getElementById('bgBaguaSmall');
  if(big){big.style.animationPlayState='running';big.style.transition='';big.style.transform='';}
  if(small){small.style.animationPlayState='running';small.style.transition='';small.style.transform='';}
}

// ===== 墨晕点击效果 =====
function inkRipple(x,y,color){
  var r=document.createElement('div');
  r.className='ink-ripple';
  r.style.left=x+'px';r.style.top=y+'px';
  r.style.width=r.style.height='100px';
  if(color)r.style.background='radial-gradient(circle,'+color+'33 0%,transparent 70%)';
  document.body.appendChild(r);
  setTimeout(function(){r.remove();},600);
}

// ===== 首页 =====
function renderLanding(){
  resetBagua();
  document.body.className=document.body.className.replace(/hex-\w+|grp-\d+/g,'').trim();
  var entry=document.getElementById('lastHexEntry');
  var last=getLastRecord();
  if(last){
    var hd=getHex(last.hex);
    var inCd=isInCooldown();
    var tipLine=inCd
      ? '距上次起卦 '+fmtTime(cooldownRemaining())+'（古人云七日一问）'
      : '上回是 '+formatDate(last.time)+' 的你';
    entry.innerHTML='<div class="last-hex" id="gotoLast"><div class="lh-sym">'+hd.symbol+'</div><div class="lh-info"><div class="lh-title">'+hd.name+(inCd?' · 上回之卦':' · 上回卦象')+'</div><div class="lh-sub">'+hd.tag+'</div><div class="lh-count">'+tipLine+'</div></div><div style="color:var(--gold);font-size:20px;">→</div></div>';
    document.getElementById('gotoLast').addEventListener('click',function(){viewHistoryRecord(last);});
    document.getElementById('btnStart').textContent=inCd?'再 起 一 卦':'起 卦';
  }else{
    entry.innerHTML='';
    document.getElementById('btnStart').textContent='起 卦';
  }
}

function formatDate(ts){
  var d=new Date(ts);
  return d.getMonth()+1+'月'+d.getDate()+'日';
}

// ===== 静心页 =====
var breatheTimer=null;
function startBreathe(){
  S('breathe');
  playBreatheTone(0);
  var phases=[
    {text:'吸 气',sub:'清气入怀',dur:4000},
    {text:'屏 息',sub:'气沉丹田',dur:2000},
    {text:'呼 气',sub:'浊气尽出',dur:4000},
  ];
  var cycles=0;
  var txt=document.getElementById('breatheText');
  var sub=document.getElementById('breatheSub');
  var cnt=document.getElementById('breatheCount');
  function run(){
    var p=cycles%3;
    txt.textContent=phases[p].text;
    sub.textContent=phases[p].sub;
    cnt.textContent='第 '+Math.floor(cycles/3+1)+' 息';
    playBreatheTone(p);
    cycles++;
    if(cycles>=9){ // 3 个呼吸
      setTimeout(startQuiz,800);
      return;
    }
    breatheTimer=setTimeout(run,phases[p].dur);
  }
  breatheTimer=setTimeout(run,300);
}
function skipBreathe(){
  if(breatheTimer){clearTimeout(breatheTimer);breatheTimer=null;}
  startQuiz();
}

// ===== 答题 =====
function startQuiz(){
  pickQuizVariants(); // 每次进入答题，重新为每题随机抽取一个版本
  answers=new Array(16).fill(0);qI=0;hexIdx=-1;changeMask=0;unlocked=false;
  resetAdviceUI();
  applyGrpTheme(0);
  // 重置雷达条
  for(var g=0;g<4;g++){var f=document.getElementById('radar'+g);if(f)f.style.width='0%';}
  rQ();
  S('quiz');
}
function resetAdviceUI(){
  try{
    document.getElementById('advice').style.display='none';
    document.getElementById('locked').style.display='block';
    document.getElementById('btnUnlock').style.display='none';
    document.getElementById('sharePrev').innerHTML='';
    document.getElementById('hexLines').innerHTML='';
    document.getElementById('hexTransition').innerHTML='';
    document.getElementById('algoContent').innerHTML='';
    document.getElementById('algoBox').removeAttribute('open');
  }catch(e){}
}

function updateRadar(){
  // 每个维度 4 道题，累加答案(0-3)，归一化到 0-100
  for(var g=0;g<4;g++){
    var sum=0,count=0;
    for(var i=0;i<4;i++){
      var qi=g*4+i;
      if(qi<=qI){sum+=answers[qi];count++;}
    }
    var pct=count?Math.round((sum/(count*3))*100):0;
    var fill=document.getElementById('radar'+g);
    if(fill)fill.style.width=pct+'%';
    var item=document.querySelector('.radar-item[data-grp="'+g+'"]');
    if(item)item.classList.toggle('active',g===Math.floor(qI/4));
  }
}
function rQ(){
  var q=QV[qI],grp=Math.floor(qI/4);
  applyGrpTheme(grp);
  document.getElementById('qIdx').textContent=qI+1;
  document.getElementById('qGrp').textContent=GRP_META[grp].name;
  document.getElementById('qGrpIcon').textContent=GRP_META[grp].icon;
  document.getElementById('qBar').style.width=((qI+1)/16*100)+'%';
  document.getElementById('qDim').textContent=q.d;
  document.getElementById('qText').textContent=q.q;
  updateRadar();
  var od=document.getElementById('qOpts');
  od.innerHTML='';
  q.o.forEach(function(opt){
    var b=document.createElement('div');
    b.className='quiz-option';
    if(answers[qI]===opt.v)b.classList.add('selected');
    b.innerHTML='<span class="qoe">'+opt.e+'</span><span class="opt-text">'+opt.t+'</span>';
    b.addEventListener('mousemove',function(e){
      var rect=b.getBoundingClientRect();
      b.style.setProperty('--mx',(e.clientX-rect.left)+'px');
      b.style.setProperty('--my',(e.clientY-rect.top)+'px');
    });
    b.addEventListener('click',function(e){
      inkRipple(e.clientX,e.clientY,GRP_META[grp].cls==='grp-0'?'#5b8c5a':GRP_META[grp].cls==='grp-1'?'#4a6fa5':GRP_META[grp].cls==='grp-2'?'#b54b3b':'#c9a96e');
      answers[qI]=opt.v;
      chime(329.63+opt.v*40,0,0.3,0.05,'triangle');
      vib(8);
      var as=od.querySelectorAll('.quiz-option');
      as.forEach(function(x){x.classList.remove('selected');});
      b.classList.add('selected');
      setTimeout(function(){nQ();},260);
    });
    od.appendChild(b);
    // 触发动画
    requestAnimationFrame(function(){b.classList.add('anim-in');});
  });
}
function nQ(){if(qI<15){qI++;rQ();}else{calc();}}
function prev(){
  if(qI>0){qI--;rQ();}
  else{renderLanding();S('landing');}
}

// ===== 计算 + Loading + 结果 =====
var LOAD_MANTRAS=[
  '八卦成列，象在其中矣',
  '天地定位，山泽通气',
  '诚则灵，不诚则不响',
  '刚柔相推，变在其中矣',
  '无思无为，感而遂通',
  '极数知来之谓占',
];
function calc(){
  // Loading 页
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  var ls=document.getElementById('s-loading');
  ls.classList.add('active');
  document.getElementById('loadText').textContent='推 演 卦 象 中';
  document.getElementById('loadSub').textContent=LOAD_MANTRAS[Math.floor(Math.random()*LOAD_MANTRAS.length)];
  var ll=document.getElementById('loadLines');
  ll.innerHTML='';
  // 6 根爻依次预览（随机）
  for(var i=0;i<6;i++){
    (function(yi){
      setTimeout(function(){
        var yang=Math.random()>0.5;
        if(yang)ll.insertAdjacentHTML('beforeend','<div class="ll"><div class="ll-bar"></div></div>');
        else ll.insertAdjacentHTML('beforeend','<div class="ll"><div class="ll-yin"><span></span><span></span></div></div>');
      },yi*220);
    })(i);
  }

  setTimeout(function(){
    hexIdx=xorFold(answers);
    changeMask=getChangeMask(answers);
    unlocked=true;
    resetAdviceUI();
    applyHexTheme(hexIdx);
    render();
    S('result');
    playIntroChime();
    animateHexLines(function(){playFinalGong();});
    setTimeout(function(){
      document.getElementById('locked').style.display='none';
      document.getElementById('advice').style.display='block';
    }, 2800);
    // 存历史
    saveHistory({hex:hexIdx,mask:changeMask,time:Date.now(),answers:answers.slice(),vi:QVidx.slice()});
  },2000);
}

function animateHexLines(onDone){
  var container=document.getElementById('hexLines');
  container.innerHTML='';
  var html='';
  for(var i=5;i>=0;i--){
    var yang=((hexIdx>>i)&1)===1;
    var isChg=!!(changeMask&(1<<i));
    if(yang){
      html+='<div class="hy"><div class="hy-bar yang'+(isChg?' changing':'')+'" data-i="'+i+'"></div></div>';
    }else{
      html+='<div class="hy"><div class="hy-yin-wrap"><div class="hy-bar yin-l'+(isChg?' changing':'')+'" data-i="'+i+'"></div><div class="hy-bar yin-r'+(isChg?' changing':'')+'" data-i="'+i+'"></div></div></div>';
    }
  }
  container.innerHTML=html;
  var bars=container.querySelectorAll('.hy-bar');
  bars.forEach(function(b){b.style.animation='none';b.offsetHeight;});
  for(var i=0;i<6;i++){
    (function(yi){
      setTimeout(function(){
        var targets=container.querySelectorAll('[data-i="'+yi+'"]');
        var isYang=targets[0]&&targets[0].classList.contains('yang');
        targets.forEach(function(b){
          var t=isYang?'growYang':(b.classList.contains('yin-l')?'growYinL':'growYinR');
          b.style.animation=t+' 0.6s cubic-bezier(.34,1.56,.64,1) forwards';
        });
        playLineDing(yi,isYang);
        vib(12);
        if(yi===5&&onDone)setTimeout(onDone,700);
      },yi*320+100);
    })(i);
  }
}

// ===== 渲染结果 =====
function render(){
  try{
    var hd=getHex(hexIdx),changeCount=countBits(changeMask);
    var newIdx=hexIdx;
    for(var i=0;i<6;i++){if(changeMask&(1<<i))newIdx^=(1<<i);}
    var cd=getHex(newIdx);
    var cl=changeLabels(changeMask);

    document.getElementById('hexDisp').innerHTML=
      '<div class="mini-label">☯ 当 下 卦 象</div>'+
      '<div class="hex-symbol-wrap"><div class="hex-symbol">'+hd.symbol+'</div></div>'+
      '<div class="hex-name">'+hd.name+'</div>'+
      '<div class="hex-tag">「'+hd.tag+'」</div>';

    // 本卦→变卦视觉
    var tr=document.getElementById('hexTransition');
    if(changeCount>0){
      tr.innerHTML=
        '<span class="mini-hex">'+hd.symbol+'</span>'+
        '<span>'+hd.name+'</span>'+
        '<span class="arrow">→</span>'+
        '<span class="mini-hex changing">'+cd.symbol+'</span>'+
        '<span style="color:var(--rl);">'+cd.name+'</span>';
    }else{
      tr.innerHTML='<span style="font-size:13px;color:var(--il);">六 爻 皆 静 · 当 下 即 是</span>';
    }

    var pred=(typeof PRED!=='undefined'&&PRED[hexIdx])?PRED[hexIdx]:['','','','','',''];
    // 卦辞原文 + 象曰
    var classicsHTML='';
    if(hd.judgment||hd.image){
      classicsHTML=
        '<div class="classics-box">'+
        (hd.judgment?'<div class="classic-line"><span class="classic-tag">卦辞</span><span class="classic-text">'+hd.judgment+'</span></div>':'')+
        (hd.image?'<div class="classic-line"><span class="classic-tag">象曰</span><span class="classic-text">'+hd.image+'</span></div>':'')+
        '</div>';
    }

    // 贵人 + 事件
    var peopleEventHTML='';
    if(hd.goodPerson||hd.event){
      peopleEventHTML=
        '<div class="people-event-grid">'+
        (hd.goodPerson?'<div class="pe-card"><div class="pe-label">👤 易遇贵人</div><p>'+hd.goodPerson+'</p></div>':'')+
        (hd.event?'<div class="pe-card"><div class="pe-label">🎯 当断之事</div><p>'+hd.event+'</p></div>':'')+
        (hd.direction||hd.element?'<div class="pe-card"><div class="pe-label">🧭 方位·五行</div><p>'+(hd.direction?'利 '+hd.direction:'')+(hd.direction&&hd.element?' · ':'')+(hd.element?hd.element:'')+'</p></div>':'')+
        '</div>';
    }

    // 宜忌
    var yijiHTML='';
    if((hd.yi&&hd.yi.length)||(hd.ji&&hd.ji.length)){
      yijiHTML=
        '<div class="yiji-box">'+
        (hd.yi&&hd.yi.length?'<div class="yiji-row yi"><span class="yiji-tag yi-tag">宜</span><span class="yiji-list">'+hd.yi.join(' · ')+'</span></div>':'')+
        (hd.ji&&hd.ji.length?'<div class="yiji-row ji"><span class="yiji-tag ji-tag">忌</span><span class="yiji-list">'+hd.ji.join(' · ')+'</span></div>':'')+
        '</div>';
    }

    document.getElementById('desc').innerHTML=
      classicsHTML+
      '<p style="font-size:16px;line-height:2.2;text-align:left;padding:0 4px;margin-top:14px;">'+hd.desc+'</p>'+
      peopleEventHTML+
      yijiHTML+
      '<div class="pred-box">'+
      '<div class="pred-label">🗓 未来一周核心事件</div>'+
      '<p>'+pred[3]+'</p>'+
      (pred[5]?'<p class="lucky">🍀 '+pred[5]+'</p>':'')+
      '</div>';

    var chgTitle='';
    if(changeCount===0)chgTitle='此卦六爻皆静——当下是稳态，无需变动';
    else chgTitle='第'+cl+'爻动 → '+cd.name+' · '+cd.tag;
    document.getElementById('chgTitle').textContent=chgTitle;

    var lockedHTML='';
    if(changeCount===0){
      lockedHTML='<p>六爻皆静，没有变爻。</p><p>你这周的卦象是稳定的——当下即是答案。保持现在的方向，不用急于改变。</p>';
    }else{
      lockedHTML=
        '<p>你的<strong>'+cl+'</strong>正在变动——</p>'+
        '<p>从<strong>'+hd.name+'</strong>向<strong style="color:var(--rl);">'+cd.name+'</strong>过渡。</p>'+
        '<p style="margin-top:10px;color:var(--gold);">🔒 解锁后查看：事业·感情·健康分领域 · 六爻逐爻详解 · 改运指南</p>';
    }
    document.getElementById('locked').innerHTML=lockedHTML;

    // 未解锁详细内容
    var adv=document.getElementById('advice');
    var yaoHTML='';
    for(var j=0;j<6;j++){
      var yn=((hexIdx>>j)&1)?'阳':'阴';
      var chgMark=(changeMask&(1<<j))?' <span style="color:var(--rl);font-weight:bold;">【动爻】</span>':'';
      yaoHTML+='<div class="yao-item'+(changeMask&(1<<j)?' changing':'')+'">'+
        '<div class="yao-title">'+['初','二','三','四','五','上'][j]+'爻 · '+yn+'爻'+chgMark+'</div>'+
        '<p>'+hd.yao[j]+'</p></div>';
    }
    adv.innerHTML=
      '<h3>📊 分 领 域 详 解</h3>'+
      '<div class="adv-grid">'+
      '<div class="adv-card"><div class="adv-label">💼 事业</div><p>'+pred[0]+'</p></div>'+
      '<div class="adv-card"><div class="adv-label">💛 感情</div><p>'+pred[1]+'</p></div>'+
      '<div class="adv-card"><div class="adv-label">🫀 健康</div><p>'+pred[2]+'</p></div>'+
      '<div class="adv-card"><div class="adv-label">⚠ 提醒</div><p>'+(pred[4]||'保持警觉')+'</p></div>'+
      '</div>'+
      (changeCount>0?
        '<h3>⚡ 变 卦 预 示 · '+cd.name+'</h3>'+
        '<p style="line-height:2;font-size:15px;">卦中'+changeCount+'根爻正在变动，从<strong>'+hd.name+'</strong>向<strong style="color:var(--rl);">'+cd.name+'</strong>过渡——这是你的趋势所指。</p>'+
        '<p style="line-height:2;font-size:14px;color:var(--il);margin-top:8px;">'+cd.short+'</p>'
      :'')+
      '<h3>📜 六 爻 逐 解</h3>'+yaoHTML+
      '<h3>💡 改 运 指 南</h3>'+
      '<p style="line-height:2;font-size:15px;">'+hd.advice+'</p>'+
      '<div class="final-words">✨ <strong>卦象不是命定，是你当下的镜子。</strong><br>下周的卦象，由你本周做的每一个选择决定。<br>七天后回来——看看你的卦，变了没有。</div>';

    renderAlgo(hd,cd,changeCount,cl);
    updateFavoriteBtn();
    renderNotes();
  }catch(e){
    document.getElementById('desc').innerHTML='<p style="color:var(--rl);">渲染出错: '+e.message+'。请刷新重试。</p>';
    console.error(e);
  }
}

function renderNotes(){
  var notes=getNotes(hexIdx);
  var desc=document.getElementById('desc');
  if(!notes.length)return;
  var html='<div class="compare-viz" style="margin-top:16px;">';
  html+='<div class="cv-title">📝 我的笔记</div>';
  html+='<div style="display:flex;flex-direction:column;gap:8px;">';
  notes.forEach(function(n){
    var d=new Date(n.time);
    html+='<div style="padding:10px;background:rgba(201,169,110,0.08);border-radius:8px;border-left:3px solid var(--gold);">';
    html+='<div style="font-size:13px;line-height:1.8;color:var(--ink);">'+n.text+'</div>';
    html+='<div style="font-size:11px;color:#b8a88a;margin-top:4px;">'+d.getMonth()+1+'月'+d.getDate()+'日 '+pad(d.getHours())+':'+pad(d.getMinutes())+'</div>';
    html+='</div>';
  });
  html+='</div></div>';
  desc.insertAdjacentHTML('beforeend',html);
}

function countBits(n){var c=0;while(n){c+=n&1;n>>=1;}return c;}
function changeLabels(mask){
  var ls=['初','二','三','四','五','上'],r=[];
  for(var i=0;i<6;i++){if(mask&(1<<i))r.push(ls[i]);}
  return r.join('、');
}

function renderAlgo(hd,cd,cc,cl){
  var box=document.getElementById('algoContent');
  var bits=[];for(var i=5;i>=0;i--)bits.push((hexIdx>>i)&1);
  var chg=[];for(var i=5;i>=0;i--)chg.push(!!(changeMask&(1<<i)));
  var names=['上','五','四','三','二','初'];
  var bitsHtml='<div style="text-align:center;font-size:12px;color:var(--il);margin-bottom:6px;">你的卦象 · 六爻（上→下）</div><div class="algo-bits">';
  bits.forEach(function(b,i){
    bitsHtml+='<div class="algo-bit '+(b?'yang':'')+(chg[i]?' chg':'')+'" style="animation-delay:'+(i*0.08)+'s;">'+b+'</div>';
  });
  bitsHtml+='</div><div style="display:flex;gap:4px;justify-content:center;font-size:10px;color:#b8a88a;margin-bottom:12px;">';
  names.forEach(function(n){bitsHtml+='<div style="width:32px;text-align:center;">'+n+'</div>';});
  bitsHtml+='</div>';

  var ansHtml='<div style="font-size:12px;color:var(--il);margin:8px 0 6px;">16 题答案（四选一）</div><div class="algo-answers">';
  for(var a=0;a<16;a++)ansHtml+='<div class="algo-answer">'+answers[a]+'</div>';
  ansHtml+='</div>';

  // 关键字呼应
  var groups={};
  QV.forEach(function(q,idx){
    var grp=Math.floor(idx/4);
    if(!groups[grp])groups[grp]=[];
    var sel=q.o.find(function(x){return x.v===answers[idx];});
    if(sel)groups[grp].push(sel.t.split('——')[0]);
  });
  var matchHtml='<div class="algo-match"><strong style="color:var(--ink);">📌 你的答题关键词：</strong><br>';
  var grpNames=['🌍 处境','🌊 感受','⚔ 行动','🔮 走向'];
  for(var g=0;g<4;g++){
    matchHtml+='<span style="color:var(--il);">'+grpNames[g]+'：'+(groups[g]?groups[g].join(' · '):'')+'</span><br>';
  }
  matchHtml+='<div style="margin-top:8px;color:var(--gold);font-size:11px;line-height:1.8;">这些关键词的气质，与「'+hd.name+'」的卦意相呼应。</div></div>';

  box.innerHTML=
    '<div style="margin-bottom:8px;">你的答案经 <code>XOR 异或折叠</code> 映射为 <code>0-63</code> 的卦序号。算法受传统铜钱起卦启发，专为问卷设计。</div>'+
    bitsHtml+
    (cc>0?'<div style="text-align:center;font-size:12px;color:var(--rl);margin:6px 0;">红框为动爻 · 指向 '+cd.name+'</div>':'')+
    ansHtml+
    matchHtml+
    '<div class="algo-tip">卦序：<code>#'+hexIdx+' · '+hd.name+'</code> · 仅供娱乐参考 · 卦由心生</div>';
}

// ===== 解锁 =====
function unlock(){
  vib(15);
  showAdThen(function(){
    unlocked=true;
    document.getElementById('locked').style.display='none';
    document.getElementById('advice').style.display='block';
    document.getElementById('btnUnlock').style.display='none';
    chime(523,0,0.5,0.08);chime(659,0.12,0.5,0.08);chime(784,0.24,0.8,0.08);
    vib([10,30,10]);
  });
}
function simPay(){
  closeAllModals();
  setTimeout(function(){
    showAlert('✨ 支 付 成 功','感谢支持！完整解读已解锁。<br><br>（这是演示，实际部署请接入微信/支付宝。）','🙏');
    unlocked=true;
    document.getElementById('locked').style.display='none';
    document.getElementById('advice').style.display='block';
    document.getElementById('btnUnlock').style.display='none';
    chime(523,0,0.4,0.08);chime(659,0.1,0.4,0.08);chime(784,0.2,0.4,0.08);chime(1046,0.3,1,0.08);
  },300);
}

// ===== 分享卡片 =====
function drawBaguaDeco(c,cx,cy,r,alpha){
  c.save();c.globalAlpha=alpha||0.08;
  c.strokeStyle='#c9a96e';c.lineWidth=1;
  c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.stroke();
  c.beginPath();c.arc(cx,cy,r*0.75,0,Math.PI*2);c.stroke();
  c.fillStyle='#2c2416';c.beginPath();c.arc(cx,cy,r*0.5,0,Math.PI*2);c.fill();
  c.restore();
}
function share(){
  var hd=getHex(hexIdx);
  var renderCard=function(){
  var cv=document.createElement('canvas');cv.width=600;cv.height=1000;
  var c=cv.getContext('2d');
  var bg=c.createLinearGradient(0,0,0,1000);
  bg.addColorStop(0,'#faf6ee');bg.addColorStop(0.5,'#f0e8d5');bg.addColorStop(1,'#e8dcc8');
  c.fillStyle=bg;c.fillRect(0,0,600,1000);
  c.save();c.globalAlpha=0.08;drawBaguaDeco(c,300,500,300,0.1);c.restore();
  c.strokeStyle='#c9a96e';c.lineWidth=2;c.strokeRect(30,30,540,940);c.strokeRect(40,40,520,920);
  c.fillStyle='#c9a96e';c.fillRect(200,60,200,2);
  c.fillStyle='#2c2416';c.font='bold 36px "Noto Serif SC",serif';c.textAlign='center';c.fillText('当 下 卦 象',300,120);
  c.font='16px "Noto Sans SC",sans-serif';c.fillStyle='#5c4a2e';c.fillText('六 十 四 卦 · 七 日 一 易',300,152);
  c.fillText('— ◆ —',300,190);
  c.fillStyle='#2c2416';c.font='bold 110px "Noto Serif SC",serif';c.fillText(hd.symbol,300,300);
  c.font='bold 34px "Noto Serif SC",serif';c.fillText(hd.name,300,350);
  c.font='18px "Noto Sans SC",sans-serif';c.fillStyle='#c9a96e';c.fillText('「'+hd.tag+'」',300,386);

  var lineY=420,lineW=140,gap=18;
  c.fillStyle='#2c2416';
  for(var i=5;i>=0;i--){
    var yang=((hexIdx>>i)&1)===1;
    var isChg=!!(changeMask&(1<<i));
    if(yang)c.fillRect(300-lineW/2,lineY,lineW,10);
    else{c.fillRect(300-lineW/2,lineY,(lineW-22)/2,10);c.fillRect(300+11,lineY,(lineW-22)/2,10);}
    if(isChg){c.strokeStyle='#c44536';c.lineWidth=2;c.strokeRect(300-lineW/2-3,lineY-3,lineW+6,16);}
    lineY+=gap+10;
  }

  c.font='15px "Noto Sans SC",sans-serif';c.fillStyle='#5c4a2e';
  var dw=wrap(c,hd.short,480);
  for(var j=0;j<Math.min(dw.length,3);j++)c.fillText(dw[j],300,lineY+20+j*26);
  var yaoText=hd.yao[5]||hd.advice;
  if(yaoText){
    c.font='italic 14px "Noto Serif SC",serif';c.fillStyle='#c9a96e';
    var yw=wrap(c,'"'+yaoText.split('：')[0].slice(0,30)+'..."',440);
    for(var k=0;k<Math.min(yw.length,2);k++)c.fillText(yw[k],300,lineY+140+k*24);
  }
  c.fillStyle='#c9a96e';c.font='14px "Noto Sans SC",sans-serif';c.fillText('扫 码 看 看 你 的 当 下 卦 象 →',300,880);
  c.fillStyle='#2c2416';c.fillRect(220,895,160,50);
  c.fillStyle='#faf6ee';c.font='11px "Noto Sans SC",sans-serif';c.fillText('当 下 卦 象 · 欢 迎 分 享',300,925);
  c.fillStyle='#c9a96e';c.fillRect(200,960,200,1);

  var pv=document.getElementById('sharePrev');pv.innerHTML='<div style="text-align:center;padding:40px;color:var(--il);font-size:14px;">⏳ 卡片生成中…</div>';
  cv.style.maxWidth='100%';cv.style.borderRadius='16px';cv.style.boxShadow='0 12px 40px rgba(0,0,0,0.15)';
  pv.innerHTML='';
  pv.appendChild(cv);
  var dlBtn=document.createElement('button');
  dlBtn.className='bs';
  dlBtn.style.marginTop='12px';
  dlBtn.textContent='💾 保存分享卡片';
  dlBtn.addEventListener('click',function(){
    try{
      var a=document.createElement('a');a.download='当下卦象-'+hd.name+'.png';a.href=cv.toDataURL('image/png');a.click();
      vib([10,30,10]);
    }catch(e){showAlert('保存失败','请长按图片或右键图片选择「保存图片」。','📱');}
  });
  pv.appendChild(dlBtn);
  var tip=document.createElement('div');tip.className='save-tip';tip.textContent='长按图片或点击按钮保存';pv.appendChild(tip);
  pv.scrollIntoView({behavior:'smooth'});
  chime(523,0,0.5,0.07);chime(784,0.2,0.7,0.05);
  vib(20);
  }; // end renderCard
  // 等字体加载完成再绘制
  if(document.fonts&&document.fonts.ready){
    document.fonts.ready.then(renderCard);
  }else{
    setTimeout(renderCard,500);
  }
}
function wrap(ctx,text,mw){var ls=[],cur='';for(var i=0;i<text.length;i++){var t=cur+text[i];if(ctx.measureText(t).width>mw&&cur.length>0){ls.push(cur);cur=text[i];}else{cur=t;}}if(cur)ls.push(cur);return ls;}

// ===== 七日冷却页 =====
var cooldownTimer=null;
function showCooldown(){
  var last=getLastRecord();if(!last){renderLanding();S('landing');return;}
  var hd=getHex(last.hex);
  document.getElementById('cooldownHex').innerHTML='<div class="cooldown-hex-sym">'+hd.symbol+'</div><div class="cooldown-hex-name">'+hd.name+'</div><div style="font-size:12px;color:var(--il);margin-top:4px;">'+hd.tag+'</div>';
  updateCooldownTimer();
  if(cooldownTimer)clearInterval(cooldownTimer);
  cooldownTimer=setInterval(updateCooldownTimer,1000);
  S('cooldown');
}
function updateCooldownTimer(){
  var el=document.getElementById('cooldownTimer');
  var rem=cooldownRemaining();
  if(rem<=0){el.textContent='七日已满';if(cooldownTimer){clearInterval(cooldownTimer);cooldownTimer=null;}return;}
  el.textContent=fmtTime(rem);
}

function viewHistoryRecord(rec){
  hexIdx=rec.hex;changeMask=rec.mask;answers=rec.answers?rec.answers.slice():new Array(16).fill(0);unlocked=true;
  restoreVariants(rec.vi); // 还原该次答题时使用的题面版本，使"答题关键词"准确
  resetAdviceUI();
  applyHexTheme(hexIdx);
  render();
  // 直接显示爻（不播动画）
  var container=document.getElementById('hexLines');
  container.innerHTML='';
  for(var i=5;i>=0;i--){
    var yang=((hexIdx>>i)&1)===1,isChg=!!(changeMask&(1<<i));
    if(yang)container.insertAdjacentHTML('beforeend','<div class="hy"><div class="hy-bar yang'+(isChg?' changing':'')+'" data-i="'+i+'" style="transform:scaleX(1);opacity:1;"></div></div>');
    else container.insertAdjacentHTML('beforeend','<div class="hy"><div class="hy-yin-wrap"><div class="hy-bar yin-l'+(isChg?' changing':'')+'" data-i="'+i+'" style="transform:scaleX(1);opacity:1;"></div><div class="hy-bar yin-r'+(isChg?' changing':'')+'" data-i="'+i+'" style="transform:scaleX(1);opacity:1;"></div></div></div>');
  }
  document.getElementById('locked').style.display='none';
  document.getElementById('advice').style.display='block';
  document.getElementById('btnUnlock').style.display='none';
  S('result');
}

// ===== 历史页 =====
function showHistory(){
  var hist=loadHistory();
  var list=document.getElementById('histList');
  var compareBtn=document.getElementById('btnCompare');
  if(!hist.length){
    list.innerHTML='<div class="hist-empty"><div class="hi-icon">📜</div>还 没 有 卦 象 记 录<br>起 一 卦 开 始 你 的 故 事</div>';
    compareBtn.style.display='none';
  }else{
    list.innerHTML=hist.map(function(r){
      var h=getHex(r.hex);
      var d=new Date(r.time);
      return '<div class="hist-item" data-ts="'+r.time+'"><div class="hi-sym">'+h.symbol+'</div><div class="hi-info"><div class="hi-name">'+h.name+' · '+h.tag+'</div><div class="hi-date">'+d.getFullYear()+'.'+(d.getMonth()+1)+'.'+d.getDate()+' '+pad(d.getHours())+':'+pad(d.getMinutes())+'</div></div><div style="color:var(--gold);">→</div></div>';
    }).join('');
    list.querySelectorAll('.hist-item').forEach(function(it){
      it.addEventListener('click',function(){
        var ts=+it.getAttribute('data-ts');
        var rec=hist.find(function(x){return x.time===ts;});
        if(rec)viewHistoryRecord(rec);
      });
    });
    compareBtn.style.display=hist.length>=2?'block':'none';
  }
  S('history');
}

function showFavorites(){
  var favs=loadFavorites();
  var list=document.getElementById('favList');
  if(!favs.length){
    list.innerHTML='<div class="hist-empty"><div class="hi-icon">⭐</div>还 没 有 收 藏 的 卦 象<br>在 结 果 页 点 击 收 藏 添 加</div>';
  }else{
    list.innerHTML=favs.map(function(hex){
      var h=getHex(hex);
      var notes=getNotes(hex);
      return '<div class="hist-item" data-hex="'+hex+'"><div class="hi-sym">'+h.symbol+'</div><div class="hi-info"><div class="hi-name">'+h.name+' · '+h.tag+'</div><div class="hi-date" style="color:var(--gold);font-size:11px;">'+(notes.length?'📝 '+notes.length+'条笔记':'')+'</div></div><div style="color:var(--gold);">→</div></div>';
    }).join('');
    list.querySelectorAll('.hist-item').forEach(function(it){
      it.addEventListener('click',function(){
        var hex=+it.getAttribute('data-hex');
        var rec={hex:hex,mask:0,time:Date.now(),answers:[]};
        viewHistoryRecord(rec);
      });
    });
  }
  S('favorites');
}

function openNoteModal(){
  document.getElementById('noteInput').value='';
  document.getElementById('overlayNote').classList.add('active');
}

function saveNote(){
  var text=document.getElementById('noteInput').value.trim();
  if(!text){showAlert('提示','请输入笔记内容','📝');return;}
  addNote(hexIdx,text);
  closeAllModals();
  showAlert('笔记已保存','你的感悟已记录','📝');
}

function showCompare(){
  var hist=loadHistory();
  if(hist.length<2){showAlert('提示','至少需要两次卦象记录才能对比','📊');return;}
  var curr=hist[0],prev=hist[1];
  var currHex=getHex(curr.hex),prevHex=getHex(prev.hex);
  var currD=new Date(curr.time),prevD=new Date(prev.time);
  var diffDays=Math.floor((curr.time-prev.time)/(1000*60*60*24));
  
  var changeAnalysis='';
  if(curr.hex===prev.hex){
    changeAnalysis='卦象未变——你仍处在同一个状态周期中。这可能意味着你在稳固地积累，也可能意味着需要一些新的变化来打破僵局。';
  }else{
    changeAnalysis='卦象已变——你的状态正在发生转变。从「'+prevHex.name+'」到「'+currHex.name+'」，这是一个值得关注的信号。';
  }
  
  var variantChange=0;
  if(curr.vi&&prev.vi){
    for(var i=0;i<Math.min(curr.vi.length,prev.vi.length);i++){
      if(curr.vi[i]!==prev.vi[i])variantChange++;
    }
  }
  
  var content='';
  content+='<div class="compare-row">';
  content+='<div class="compare-card">';
  content+='<div class="cc-date">'+prevD.getMonth()+1+'月'+prevD.getDate()+'日</div>';
  content+='<div class="cc-sym">'+prevHex.symbol+'</div>';
  content+='<div class="cc-name">'+prevHex.name+'</div>';
  content+='<div class="cc-tag">「'+prevHex.tag+'」</div>';
  content+='</div>';
  content+='<div class="compare-arrow">→</div>';
  content+='<div class="compare-card">';
  content+='<div class="cc-date">'+currD.getMonth()+1+'月'+currD.getDate()+'日</div>';
  content+='<div class="cc-sym">'+currHex.symbol+'</div>';
  content+='<div class="cc-name">'+currHex.name+'</div>';
  content+='<div class="cc-tag">「'+currHex.tag+'」</div>';
  content+='</div>';
  content+='</div>';
  
  content+='<div class="compare-viz">';
  content+='<div class="cv-title">📊 对比数据</div>';
  content+='<div class="cv-grid">';
  content+='<div class="cv-item"><div class="cv-icon">📅</div><div class="cv-text">间隔 '+diffDays+' 天</div></div>';
  content+='<div class="cv-item"><div class="cv-icon">🔄</div><div class="cv-text">'+(curr.hex===prev.hex?'卦象未变':'卦象已变')+'</div></div>';
  content+='<div class="cv-item"><div class="cv-icon">⚡</div><div class="cv-text">变爻 '+countBits(curr.mask)+' → '+countBits(prev.mask)+'</div></div>';
  content+='<div class="cv-item"><div class="cv-icon">📝</div><div class="cv-text">题面差异 '+variantChange+' 处</div></div>';
  content+='</div></div>';
  
  content+='<div class="compare-change">';
  content+='<div class="cc-label">🔮 变化解读</div>';
  content+='<p>'+changeAnalysis+'</p>';
  content+='</div>';
  
  content+='<div class="compare-viz">';
  content+='<div class="cv-title">📜 卦辞对比</div>';
  content+='<div class="cv-grid">';
  content+='<div class="cv-item"><div class="cv-icon">📖</div><div class="cv-text">'+prevHex.short+'</div></div>';
  content+='<div class="cv-item"><div class="cv-icon">📖</div><div class="cv-text">'+currHex.short+'</div></div>';
  content+='</div></div>';
  
  content+='<div class="compare-summary">';
  content+='<div class="cs-title">✨ 对比总结</div>';
  content+='<div class="cs-text">';
  if(curr.hex===prev.hex){
    content+='你的卦象保持稳定，这是「守」的阶段。<br>';
    content+='建议：在稳定中寻找微小的突破点，不要急于求变。';
  }else{
    content+='你的卦象发生了变化，这是「动」的信号。<br>';
    content+='从「'+prevHex.tag+'」到「'+currHex.tag+'」，你正在经历转变。<br>';
    content+='建议：关注变化带来的新机会，勇敢地向前迈出一步。';
  }
  content+='</div></div>';
  
  document.getElementById('compareContent').innerHTML=content;
  S('compare');
}

// ===== 六十四卦列表 =====
function showHexList(){
  var grid=document.getElementById('hexGrid');
  var html='';
  for(var i=0;i<64;i++){
    var h=getHex(i);
    html+='<div class="hex-grid-item" data-hex="'+i+'">';
    html+='<div class="hgi-sym">'+h.symbol+'</div>';
    html+='<div class="hgi-name">'+h.name+'</div>';
    html+='</div>';
  }
  grid.innerHTML=html;
  grid.querySelectorAll('.hex-grid-item').forEach(function(it){
    it.addEventListener('click',function(){
      var hex=+it.getAttribute('data-hex');
      showHexDetail(hex);
    });
  });
  S('hexlist');
}

// ===== 卦象详情页面 =====
function showHexDetail(hex){
  hexIdx=hex;
  changeMask=0;
  applyHexTheme(hex);
  var hd=getHex(hex);
  document.getElementById('hexDetailDisp').innerHTML=
    '<div class="mini-label">☯ '+hd.name+'</div>'+
    '<div class="hex-symbol-wrap"><div class="hex-symbol">'+hd.symbol+'</div></div>'+
    '<div class="hex-name">'+hd.name+'</div>'+
    '<div class="hex-tag">「'+hd.tag+'」</div>';
  var container=document.getElementById('hexDetailLines');
  container.innerHTML='';
  var html='';
  for(var i=5;i>=0;i--){
    var yang=((hex>>i)&1)===1;
    if(yang){
      html+='<div class="hy"><div class="hy-bar yang" data-i="'+i+'"></div></div>';
    }else{
      html+='<div class="hy"><div class="hy-yin-wrap"><div class="hy-bar yin-l" data-i="'+i+'"></div><div class="hy-bar yin-r" data-i="'+i+'"></div></div></div>';
    }
  }
  container.innerHTML=html;
  var bars=container.querySelectorAll('.hy-bar');
  bars.forEach(function(b){b.style.animation='none';b.offsetHeight;});
  for(var i=0;i<6;i++){
    (function(yi){
      setTimeout(function(){
        var targets=container.querySelectorAll('[data-i="'+yi+'"]');
        var isYang=targets[0]&&targets[0].classList.contains('yang');
        targets.forEach(function(b){
          var t=isYang?'growYang':(b.classList.contains('yin-l')?'growYinL':'growYinR');
          b.style.animation=t+' 0.6s cubic-bezier(.34,1.56,.64,1) forwards';
        });
      },yi*150+100);
    })(i);
  }
  var classicsHTML='';
  if(hd.judgment||hd.image){
    classicsHTML=
      '<div class="classics-box">'+
      (hd.judgment?'<div class="classic-line"><span class="classic-tag">卦辞</span><span class="classic-text">'+hd.judgment+'</span></div>':'')+
      (hd.image?'<div class="classic-line"><span class="classic-tag">象曰</span><span class="classic-text">'+hd.image+'</span></div>':'')+
      '</div>';
  }
  var yaoHTML='';
  for(var j=0;j<6;j++){
    var yn=((hex>>j)&1)?'阳':'阴';
    yaoHTML+='<div class="yao-detail">'+
      '<div class="yao-num">'+['初','二','三','四','五','上'][j]+'爻 · '+yn+'爻</div>'+
      '<p>'+hd.yao[j]+'</p></div>';
  }
  var detailHTML=classicsHTML+
    '<p style="font-size:16px;line-height:2.2;text-align:left;padding:0 4px;margin-top:14px;">'+hd.desc+'</p>'+
    (hd.short?'<p style="font-size:14px;line-height:2;color:var(--il);margin-top:12px;">'+hd.short+'</p>':'')+
    '<h3 style="margin-top:24px;color:var(--gold);letter-spacing:4px;">📜 六 爻 逐 解</h3>'+yaoHTML+
    '<h3 style="margin-top:24px;color:var(--gold);letter-spacing:4px;">💡 改 运 指 南</h3>'+
    '<p style="line-height:2;font-size:15px;">'+hd.advice+'</p>';
  document.getElementById('hexDetailDesc').innerHTML=detailHTML;
  S('hexdetail');
}

// ===== 五行相生相克可视化 =====
function showFiveElements(){
  var content='';
  content+='<div class="five-ring">';
  content+='<div class="five-element wood" data-element="wood">木</div>';
  content+='<div class="five-element fire" data-element="fire">火</div>';
  content+='<div class="five-element earth" data-element="earth">土</div>';
  content+='<div class="five-element metal" data-element="metal">金</div>';
  content+='<div class="five-element water" data-element="water">水</div>';
  content+='</div>';
  content+='<div class="five-info">';
  content+='<div class="fi-title">🌱 相 生 关 系</div>';
  content+='<p>木生火 → 火生土 → 土生金 → 金生水 → 水生木</p>';
  content+='<p style="margin-top:8px;font-size:13px;color:var(--il);">木生火：木可燃烧产生火焰；火生土：火燃烧后化为灰烬；土生金：土里蕴藏金属矿物；金生水：金属可融化成液体；水生木：水滋养树木生长。</p>';
  content+='</div>';
  content+='<div class="five-info">';
  content+='<div class="fi-title">⚔ 相 克 关 系</div>';
  content+='<p>木克土 → 土克水 → 水克火 → 火克金 → 金克木</p>';
  content+='<p style="margin-top:8px;font-size:13px;color:var(--il);">木克土：树木根系破土而出；土克水：土能阻挡水流；水克火：水能浇灭火焰；火克金：火能熔化金属；金克木：金属器具可砍伐树木。</p>';
  content+='</div>';
  content+='<div class="five-info">';
  content+='<div class="fi-title">🔮 生 活 运 用</div>';
  content+='<p>五行相生相克的道理可以应用于生活的方方面面。当你感到某一方面「过盛」或「不足」时，可以通过相生相克的关系来调节。例如：若感到心火过旺（焦虑、烦躁），可以用水元素（冷静、冥想）来克制；若感到缺乏动力，可以用火元素（热情、行动）来补充。</p>';
  content+='</div>';
  document.getElementById('fiveContent').innerHTML=content;
  S('fiveelements');
}

// ===== 暗色模式切换 =====
function toggleTheme(){
  var body=document.body;
  var isDark=body.classList.toggle('dark');
  localStorage.setItem('iching-now-theme',isDark?'dark':'light');
  showAlert(isDark?'暗色模式':'亮色模式','已切换到'+(isDark?'暗色':'亮色')+'主题','🌓');
}

function initTheme(){
  var saved=localStorage.getItem('iching-now-theme');
  var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(saved==='dark'||(!saved&&prefersDark)){
    document.body.classList.add('dark');
  }
}

// ===== 事件绑定 =====
function B(id,fn){var e=document.getElementById(id);if(!e)return;e.addEventListener('click',fn);}

B('btnStart',function(){
  primeAudio(); // 首次激活音频（浏览器要求用户交互）
  chime(392,0,0.6,0.08,'triangle');
  chime(523,0.15,0.8,0.06,'triangle');
  var last=getLastRecord();
  if(last && isInCooldown()){
    var hd=getHex(last.hex);
    document.getElementById('remindBody').innerHTML=
      '<div style="margin-bottom:10px;">你上次起卦是 <strong>'+formatDate(last.time)+'</strong>，距今 '+fmtTime(Date.now()-last.time)+'。</div>'+
      '<div style="margin:12px 0;padding:14px;background:rgba(201,169,110,0.12);border-radius:10px;">'+
      '<div style="font-size:48px;font-family:serif;color:var(--ink);">'+hd.symbol+'</div>'+
      '<div style="font-family:serif;font-size:16px;margin-top:4px;">'+hd.name+'</div>'+
      '<div style="font-size:12px;color:var(--il);margin-top:2px;">'+hd.tag+'</div>'+
      '</div>'+
      '<div style="font-size:13px;color:var(--il);line-height:1.8;">古人云「七日一易」，卦问的是你当下的心境——频繁起卦恐失诚心。<br>若确有新事想问，可执意再问。</div>';
    document.getElementById('overlayRemind').classList.add('active');
    return;
  }
  startBreathe();
});
B('btnBreatheSkip',skipBreathe);
B('btnPrev',prev);
B('btnQuizHome',function(){if(breatheTimer){clearTimeout(breatheTimer);breatheTimer=null;}renderLanding();S('landing');});
B('btnResultHome',function(){renderLanding();S('landing');});
B('btnCooldownHome',function(){if(cooldownTimer){clearInterval(cooldownTimer);cooldownTimer=null;}renderLanding();S('landing');});
B('btnCooldownView',function(){
  var last=getLastRecord();if(last)viewHistoryRecord(last);
});
B('btnUnlock',unlock);
B('btnShare',share);
B('btnRestart',function(){
  chime(392,0,0.5,0.06);
  // 重新测试同样检查七日提醒
  var last=getLastRecord();
  if(last && isInCooldown()){
    var hd=getHex(last.hex);
    document.getElementById('remindBody').innerHTML=
      '<div style="margin-bottom:10px;">你上次起卦是 <strong>'+formatDate(last.time)+'</strong>，距今 '+fmtTime(Date.now()-last.time)+'。</div>'+
      '<div style="margin:12px 0;padding:14px;background:rgba(201,169,110,0.12);border-radius:10px;">'+
      '<div style="font-size:48px;font-family:serif;color:var(--ink);">'+hd.symbol+'</div>'+
      '<div style="font-family:serif;font-size:16px;margin-top:4px;">'+hd.name+'</div>'+
      '<div style="font-size:12px;color:var(--il);margin-top:2px;">'+hd.tag+'</div>'+
      '</div>'+
      '<div style="font-size:13px;color:var(--il);line-height:1.8;">古人云「七日一易」，频繁起卦恐失诚心。<br>若确有新事想问，可执意再问。</div>';
    document.getElementById('overlayRemind').classList.add('active');
    return;
  }
  startBreathe();
});
B('btnSound',toggleSound);
B('btnMusic',toggleMusic);
B('btnTheme',toggleTheme);
B('btnFive',showFiveElements);
B('btnFiveBack',function(){renderLanding();S('landing');});
B('btnHexList',showHexList);
B('btnHexListBack',function(){renderLanding();S('landing');});
B('btnHexDetailBack',function(){showHexList();});
B('btnHist',showHistory);
B('btnHistBack',function(){renderLanding();S('landing');});
B('btnCompare',showCompare);
B('btnCompareBack',function(){showHistory();});
B('btnFav',showFavorites);
B('btnFavBack',function(){renderLanding();S('landing');});
B('btnFavorite',function(){toggleFavorite(hexIdx);});
B('btnAddNote',openNoteModal);
B('btnNoteSave',saveNote);
B('btnReminder',setDailyReminder);
B('btnPay',simPay);
B('btnPayClose',function(){closeAllModals();setTimeout(unlock,100);});

// 起卦提醒弹窗按钮
B('btnRemindGo',function(){
  closeAllModals();
  chime(440,0,0.5,0.06);
  chime(587,0.15,0.7,0.05);
  startBreathe();
});
B('btnRemindCancel',function(){
  closeAllModals();
  var last=getLastRecord();
  if(last){
    viewHistoryRecord(last);
  }else{
    renderLanding();S('landing');
  }
});

// 长按解锁按钮触发付费
var pt;
var unlockBtn=document.getElementById('btnUnlock');
unlockBtn.addEventListener('pointerdown',function(){
  pt=setTimeout(function(){document.getElementById('overlayPay').classList.add('active');},800);
});
unlockBtn.addEventListener('pointerup',function(){clearTimeout(pt);});
unlockBtn.addEventListener('pointerleave',function(){clearTimeout(pt);});
unlockBtn.addEventListener('pointercancel',function(){clearTimeout(pt);});

// ===== 背景装饰 =====
(function initBgDecor(){
  var bg=document.querySelector('.bg-layer');if(!bg)return;
  for(var i=0;i<3;i++){
    var t=document.createElement('div');t.className='taiji-float';t.textContent=i===0?'☯':i===1?'◐':'◑';
    t.style.left=(8+Math.random()*84)+'%';t.style.top=(8+Math.random()*84)+'%';
    t.style.animationDelay=(i*7)+'s';t.style.animationDuration=(22+Math.random()*15)+'s';
    t.style.fontSize=(16+Math.random()*18)+'px';bg.appendChild(t);
  }
  for(var j=0;j<12;j++){
    var d=document.createElement('div');d.className='float-dot';
    d.style.left=(Math.random()*100)+'%';d.style.animationDuration=(18+Math.random()*18)+'s';
    d.style.animationDelay=(Math.random()*20)+'s';
    var size=2+Math.random()*3;d.style.width=d.style.height=size+'px';
    bg.appendChild(d);
  }
})();

// 背景 SVG 三爻（先天八卦方位）
(function drawBgTrigrams(){
  var g=document.getElementById('trigrams');if(!g)return;
  var trigrams=[
    {a:-90,y:[1,1,1]},
    {a:-45,y:[0,1,1]},
    {a:0,  y:[1,0,1]},
    {a:45, y:[0,0,1]},
    {a:90, y:[0,0,0]},
    {a:135,y:[1,0,0]},
    {a:180,y:[0,1,0]},
    {a:225,y:[1,1,0]},
  ];
  var R=170,gw=40,gh=10,gg=8;
  trigrams.forEach(function(t){
    var rad=t.a*Math.PI/180,cx=200+R*Math.cos(rad),cy=200+R*Math.sin(rad);
    var ang=Math.atan2(cy-200,cx-200)*180/Math.PI+90;
    var sy='';
    for(var i=0;i<3;i++){
      var yOff=(i-1)*(gh+gg);
      if(t.y[i])sy+='<rect x="'+(-gw/2)+'" y="'+(yOff-gh/2)+'" width="'+gw+'" height="'+gh+'" fill="currentColor"/>';
      else{sy+='<rect x="'+(-gw/2)+'" y="'+(yOff-gh/2)+'" width="'+((gw-gg)/2)+'" height="'+gh+'" fill="currentColor"/>';sy+='<rect x="'+(gg/2)+'" y="'+(yOff-gh/2)+'" width="'+((gw-gg)/2)+'" height="'+gh+'" fill="currentColor"/>';}
    }
    g.innerHTML+='<g transform="translate('+cx+','+cy+') rotate('+ang+')">'+sy+'</g>';
  });
  // 首页小八卦
  var mg=document.getElementById('miniTrigrams');if(mg){
    var mR=80;
    trigrams.forEach(function(t){
      var rad=t.a*Math.PI/180,cx=100+mR*Math.cos(rad),cy=100+mR*Math.sin(rad);
      var ang=Math.atan2(cy-100,cx-100)*180/Math.PI+90;
      var sy='';
      for(var i=0;i<3;i++){
        var yOff=(i-1)*7;
        if(t.y[i])sy+='<rect x="-12" y="'+(yOff-2)+'" width="24" height="3"/>';
        else{sy+='<rect x="-12" y="'+(yOff-2)+'" width="10" height="3"/>';sy+='<rect x="2" y="'+(yOff-2)+'" width="10" height="3"/>';}
      }
      mg.innerHTML+='<g transform="translate('+cx+','+cy+') rotate('+ang+')">'+sy+'</g>';
    });
  }
})();

// 点击空白水波（轻微）
document.addEventListener('click',function(e){
  if(e.target.closest('button')||e.target.closest('.quiz-option')||e.target.closest('.hist-item')||e.target.closest('.last-hex'))return;
  inkRipple(e.clientX,e.clientY);
},true);

// 进入即激活音频：页面加载时立即尝试（部分浏览器/有历史交互时可直接发声），
// 并在首次任意手势时再次 resume（浏览器自动播放策略要求用户交互后才允许发声）。
function firstInteract(){
  primeAudio();
  document.removeEventListener('click',firstInteract,true);
  document.removeEventListener('touchstart',firstInteract,true);
  document.removeEventListener('keydown',firstInteract,true);
}
document.addEventListener('click',firstInteract,true);
document.addEventListener('touchstart',firstInteract,true);
document.addEventListener('keydown',firstInteract,true);
// 可见性恢复：从后台切回前台时，若被系统挂起则重新 resume
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='visible'&&audioCtx&&audioCtx.state==='suspended')audioCtx.resume();
});

// 启动
initTheme();
renderLanding();
S('landing');
primeAudio(); // 进入页面即激活音频（背景音乐 + 音效默认开启）
updateAudioButtons();
checkReminderOnLoad(); // 检查并调度每日提醒
