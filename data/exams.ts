export type Exam = {
  slug: string;
  name: string;
  category: string;
  description?: string;

  // 基本信息
  nextExamDate?: string;
  registrationTime?: string;
  officialLink?: string;
  fee?: string;
  certificates?: string[];

  // 难度 / 认可度 / 学习周期（1-5）
  difficulty?: number;
  recognition?: number;
  duration?: number;

  // 考试结构
  subjects?: string[];
  passLine?: string;
  passRate?: string;

  // 适合人群 / 备考建议 / 报考流程 / 职业方向
  suitable?: string[];
  tips?: string[];
  flow?: string[];
  careers?: string[];

  // 热度（可由前端或脚本维护）
  heat?: number;
};

export const exams: Exam[] = [
  {
    slug: "teacher-cert-primary",
    name: "教师资格证（小学）",
    category: "教育类 · 教资",
    description: "面向想进入小学教育岗位的人群，是入行 K12 教育的基础证书。",
    nextExamDate: "2025-03-09（以官方公告为准）",
    registrationTime: "考前约 2 个月，省份略有差异",
    officialLink: "http://ntce.neea.edu.cn/",
    fee: "约 120–200 元/科，按各地标准",
    certificates: ["教师资格证书（小学）"],
    difficulty: 2,
    recognition: 4,
    duration: 2,
    subjects: [
      "综合素质（小学）",
      "教育教学知识与能力"
    ],
    passLine: "各省公布，一般为卷面分数的 60% 左右",
    passRate: "官方未公布，整体通过率中等偏上",
    suitable: [
      "准备进入小学教育岗位的人",
      "计划从非教育行业转型到 K12 教育的人",
      "希望未来在培训机构、托辅机构任教的人"
    ],
    tips: [
      "先熟悉教材结构和历年真题，建立整体感。",
      "综合素质背诵类内容很多，建议提前整理错题与常考考点。",
      "可搭配视频课 + 真题刷题，不必一开始就买太多资料。"
    ],
    flow: [
      "关注各省考试院 / 教考中心公告",
      "网上报名并选择考点",
      "缴费并打印准考证",
      "参加笔试 → 面试",
      "通过后申请教师资格证书"
    ],
    careers: [
      "小学在编 / 合同教师（视编制招聘政策）",
      "民办学校 / 培训机构教师",
      "线上课程老师 / 题库出题老师"
    ],
    heat: 95,
  },

  {
    slug: "teacher-cert-middle",
    name: "教师资格证（中学）",
    category: "教育类 · 教资",
    description: "进入初中、高中教育体系的基本准入证，适合有学科特长的人。",
    nextExamDate: "2025-03-09（以官方公告为准）",
    registrationTime: "考前约 2 个月，省份略有差异",
    officialLink: "http://ntce.neea.edu.cn/",
    fee: "约 120–200 元/科",
    certificates: ["教师资格证书（初中/高中，对应学科）"],
    difficulty: 3,
    recognition: 4,
    duration: 3,
    subjects: [
      "综合素质（中学）",
      "教育知识与能力",
      "学科专业知识（面试阶段体现）"
    ],
    passLine: "各省公布，一般为卷面 60% 左右",
    passRate: "中等偏上，视学科与地区而定",
    suitable: [
      "有明确学科方向（语数外 / 理科 / 文综等）的人",
      "希望进入中学、公办学校体系的人",
      "希望通过教资提升自己“备课 / 讲课”能力的人"
    ],
    tips: [
      "先搞清“考哪一个学科”，再去看对应大纲。",
      "中学教资对教育学、心理学要求更高，注意理解而不是死记。",
      "多看历年面试结构，提前思考试讲思路。"
    ],
    flow: [
      "确认报考学段与学科",
      "网上报名 + 缴费",
      "参加笔试（综合素质 + 教育知识与能力）",
      "笔试通过后预约面试",
      "资格认定并领取证书"
    ],
    careers: [
      "初中 / 高中教师（视编制与招聘）",
      "中学学科类培训机构讲师",
      "教研编辑 / 教材内容策划"
    ],
    heat: 90,
  },

  {
    slug: "cpa",
    name: "注册会计师（CPA）",
    category: "财会类 · 会计 & 审计",
    description: "国内财会领域含金量最高的证书之一，适合打算长期深耕财务 / 审计的人。",
    nextExamDate: "每年 8–10 月分批次举行（以中注协公告为准）",
    registrationTime: "一般 4–6 月报名",
    officialLink: "https://www.cicpa.org.cn/",
    fee: "按科目收取，各地略有差异",
    certificates: ["注册会计师全国统一考试合格证书"],
    difficulty: 5,
    recognition: 5,
    duration: 5,
    subjects: [
      "会计",
      "审计",
      "财务成本管理",
      "公司战略与风险管理",
      "税法",
      "经济法"
    ],
    passLine: "卷面 60 分及以上为合格",
    passRate: "单科通过率约 10%–20%",
    suitable: [
      "希望进入四大 / 大型事务所的人",
      "打算在财务、审计、内控领域长期发展的人",
      "已经有会计基础，希望进一步提升的人"
    ],
    tips: [
      "不要一次性报太多科目，结合自己的工作强度合理规划。",
      "优先打好会计、审计基础，再逐步扩展到其他科目。",
      "备考周期以“年”为单位，不必急于一年通关。"
    ],
    flow: [
      "在中注协官网或官方报名网站注册并报名",
      "选择考试科目与考点并缴费",
      "按计划备考并参加统一考试",
      "通过全部科目后申请相关执业资格"
    ],
    careers: [
      "会计师事务所（审计 / 税务）",
      "大型企业财务 / 内控 / 风控岗位",
      "投行、咨询公司等与财务相关岗位"
    ],
    heat: 88,
  },

  {
    slug: "fund-qualification",
    name: "基金从业资格考试",
    category: "财会类 · 会计 & 审计",
    description: "进入基金公司、证券公司资管业务的入门级证书。",
    nextExamDate: "全年多批次考试（以协会公告为准）",
    registrationTime: "考前约 1 个月开放报名",
    officialLink: "https://www.amac.org.cn/",
    fee: "单科约 65 元，具体看协会公告",
    certificates: ["基金从业资格考试合格证"],
    difficulty: 2,
    recognition: 3,
    duration: 2,
    subjects: [
      "基金法律法规、职业道德与业务规范",
      "证券投资基金基础知识",
      "私募股权投资基金基础知识（选考）"
    ],
    passLine: "一般为 60 分（满分 100 分）",
    passRate: "中等偏上，刷题效果明显",
    suitable: [
      "打算进入基金公司、券商资管等岗位的人",
      "已经在金融圈但缺少从业资格的从业者",
      "想系统了解基金运作和监管框架的人"
    ],
    tips: [
      "以教材 + 题库为主，不需要太多额外资料。",
      "法律法规类内容建议建立错题集，方便考前冲刺。",
      "备考周期通常 2–4 周即可。"
    ],
    flow: [
      "在中国基金业协会指定网站注册报名",
      "选择科目与考区并缴费",
      "下载/打印准考证",
      "参加机考并等待成绩公布"
    ],
    careers: [
      "基金公司 / 资管机构基础岗位",
      "银行理财、理财经理岗位加分项",
      "金融行业简历上的“门槛证书”之一"
    ],
    heat: 80,
  },

  {
    slug: "pmp",
    name: "PMP 项目管理专业人士",
    category: "项目管理类",
    description: "国际认可的项目管理证书，适合 IT、工程、运营等需要管项目的人。",
    nextExamDate: "每年多批次，由各地授权机构组织",
    registrationTime: "通常需提前 2–3 个月通过培训机构报名",
    officialLink: "https://www.pmi.org/",
    fee: "视培训机构与考试安排，一般数千元",
    certificates: ["PMP® 项目管理专业人士证书"],
    difficulty: 3,
    recognition: 4,
    duration: 3,
    subjects: [
      "项目启动、规划、执行、监控、收尾",
      "敏捷与混合项目管理",
      "团队与干系人管理"
    ],
    passLine: "PMI 综合评估（不公布具体分数线）",
    passRate: "参加正规培训后通过率较高",
    suitable: [
      "经常要负责跨团队项目的职场人",
      "IT / 互联网 / 工程 / 咨询领域项目负责人",
      "希望将“拍脑袋做项目”变成“有方法地做项目”的人"
    ],
    tips: [
      "重在理解项目管理思维，而不是死记名词。",
      "多做情景题，揣摩出题人“希望你怎么处理冲突/风险”。",
      "建议配合刷题系统进行模拟训练。"
    ],
    flow: [
      "选择培训机构并完成规定学时",
      "在 PMI 官网提交报名信息",
      "完成缴费并预约考试",
      "参加考试并等待成绩邮件",
      "按要求进行后续 PDU 积分维护证书"
    ],
    careers: [
      "项目经理 / PMO",
      "产品 / 运营 / 交付负责人",
      "跨国公司项目管理岗加分项"
    ],
    heat: 75,
  },

  {
    slug: "psych-consultant",
    name: "心理咨询师（培训与认证）",
    category: "心理类",
    description: "面向想要系统学习心理学、未来从事心理助人工作的人。",
    nextExamDate: "由各培训机构 / 地方协会组织，时间不统一",
    registrationTime: "滚动招生",
    officialLink: "视具体机构而定（建议查看本地权威机构）",
    fee: "数千至上万元不等",
    certificates: ["心理咨询相关培训结业证 / 能力认证证书"],
    difficulty: 3,
    recognition: 3,
    duration: 4,
    subjects: [
      "基础心理学",
      "发展心理学",
      "异常心理学与心理评估",
      "咨询理论与技术",
      "伦理与督导"
    ],
    passLine: "视各机构认证标准而定",
    passRate: "视投入程度与机构质量而定",
    suitable: [
      "希望从事心理咨询、心理支持工作的人员",
      "原本从事教育、人力等工作，希望增加“助人技能”的人",
      "对自我探索与人际关系有强烈兴趣的人"
    ],
    tips: [
      "优先考察机构背景、授课老师资历和后续督导体系。",
      "不要只把它当成“证书”，要预留长期学习与自我体验时间。",
      "建议结合读书、团体成长、小组督导一起进行。"
    ],
    flow: [
      "调研并选择合适的培训机构",
      "完成系统课程学习与作业",
      "参加阶段性考核 / 认证考试",
      "根据兴趣继续参加进阶培训与督导"
    ],
    careers: [
      "心理咨询师（需符合当地执业政策）",
      "学校 / 企业心理健康相关岗位",
      "情绪支持、心理科普内容创作者"
    ],
    heat: 70,
  },

  {
    slug: "law-exam",
    name: "法律职业资格考试（法考）",
    category: "法律类 · 法考",
    description: "从事律师、法官、检察官等职业的基础准入考试。",
    nextExamDate: "一般为每年下半年，分客观题与主观题",
    registrationTime: "通常在上半年开放报名",
    officialLink: "司法部、各地司法厅官网",
    fee: "各地标准不同，一般数百元",
    certificates: ["法律职业资格证书"],
    difficulty: 5,
    recognition: 5,
    duration: 5,
    subjects: [
      "宪法、民法、刑法",
      "民诉法、刑诉法、行政法与行政诉讼法",
      "商法、经济法、社会法、国际法、司法制度与法律职业道德"
    ],
    passLine: "国家统一划线标准",
    passRate: "整体通过率较低，需要长期系统备考",
    suitable: [
      "准备从事律师、法官、检察官等法律职业的人",
      "法学院学生或具备法学基础知识的从业者",
      "希望在工作中大量接触合同、合规、风控的人员"
    ],
    tips: [
      "建议预留 1 年以上系统备考时间。",
      "先通读教材 + 刷题，再根据错题回头精读法条。",
      "把刷题当成“训练法条应用”的过程，而不仅是记答案。"
    ],
    flow: [
      "确认自己是否符合报考条件",
      "在司法部指定网站报名并缴费",
      "参加客观题考试，通过后参加主观题",
      "通过后按要求申请法律职业资格证书"
    ],
    careers: [
      "律师 / 律师助理",
      "公司法务 / 合规岗位",
      "法院、检察院等法律职业体系相关岗位"
    ],
    heat: 85,
  },
];

// ====== 考试成本字段示例（仅添加结构，无数据时可留空） ======
/*
cost: {
  fee: "¥120 / 次",         // 报名费用
  studyHours: "30-50 小时", // 推荐学习时长（客观时长）
  extra: ["需要现场审核", "照片采集"],  // 额外成本提示
},
*/

// FAQ 示例结构（考试可以选择添加或不添加）
/*
faq: [
  { q: "报名条件是什么？", a: "需年满18周岁，具有高中及以上学历。" },
  { q: "多久出成绩？", a: "通常为考试后 45 天公布成绩。" },
],
*/

// 官方资料/链接结构示例
/*
links: [
  { name: "官网报名入口", url: "https://xxx.com" },
  { name: "考试大纲（PDF）", url: "https://xxx.com/dagang.pdf" },
  { name: "历年真题", url: "https://xxx.com/zhenti" },
],
*/
