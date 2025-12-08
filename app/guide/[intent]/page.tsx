import { exams } from "../../../data/exams";
import NextSteps from "../../../components/NextSteps";

const rules: any = {
  lost: {
    title: "先找一个“试水型”证书，不用一开始就 All in",
    match: ["教育类", "IT & 互联网", "心理类", "财会类", "法律类"],
    steps: [
      "先从耗时 3-6 个月、难度中等的证书开始，不要一上来就冲顶级证书。",
      "每个方向先选 1 个代表性考试，读完整个介绍页再决定要不要深入。",
      "给自己设定一个“试水周期”（例如 3 个月），只要完成就算成功。",
    ],
  },
  change: {
    title: "你想换方向，要先搞清楚“未来3年愿意赌什么”",
    match: ["IT & 互联网", "教育类", "心理类", "财会类"],
    steps: [
      "先排除明显不适合的：时间不允许、投入太高、自己完全不感兴趣的领域。",
      "从剩下的 2-3 个方向里，优先看“就业路径最清晰”的证书。",
      "不要一次性报太多，只选 1 个主线证书，把它学完。",
    ],
  },
  salary: {
    title: "你想涨薪，需要“岗位技能 + 认可度高的证书”",
    match: ["财会类", "法律类", "IT & 互联网"],
    steps: [
      "先确认你所在行业里，最常被提到的证书是哪几个。",
      "对比这些证书的“学习周期 / 认可度 / 对简历的帮助”。",
      "优先选择能直接写进简历标题、招聘JD里经常出现的证书。",
    ],
  },
  it: {
    title: "你想进入互联网，需要基础能力 + 清晰起点",
    match: ["IT & 互联网"],
    steps: [
      "先想清楚自己更适合偏“逻辑 +沟通”（产品/测试）还是“代码 +系统”（开发/算法）。",
      "为你的方向挑一个门槛相对友好的入门证书或课程体系。",
      "学习时一定要配合做小项目，而不是只背题。",
    ],
  },
  education: {
    title: "你想做教育相关工作，可以从教资体系开始",
    match: ["教育类"],
    steps: [
      "先确定自己更适合小学、初中还是高中学段，或者是培训机构路线。",
      "了解清楚报考条件（学历、专业限制），避免踩雷。",
      "把备考拆成“真题 → 核心知识点 → 模拟考试”三个阶段来安排。",
    ],
  },
  psychology: {
    title: "你对心理 / 助人很感兴趣，可以先做“长期探索”规划",
    match: ["心理类"],
    steps: [
      "先通过入门课程 + 书单确认自己是否能长期投入这个方向。",
      "选择含金量较高、系统性强的心理相关证书作为起点。",
      "提前了解：这个方向往往需要长期积累，不要期待短期暴涨回报。",
    ],
  },
};

export default function GuideDetailPage({ params }: any) {
  const intent = params.intent;
  const rule = rules[intent];

  if (!rule) {
    return (
      <div className="pt-10">
        <p className="text-gray-600">暂时没有这个方向的推荐。</p>
        <a href="/guide" className="text-blue-600 underline text-sm mt-2 inline-block">
          返回选择目标
        </a>
      </div>
    );
  }

  const filtered = exams.filter((e) =>
    rule.match.some((cat: string) => e.category.includes(cat))
  );

  return (
    <div className="pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {rule.title}
      </h1>

      <p className="text-gray-600 max-w-2xl">
        下面这些考试，更有可能和你现在的目标匹配。
        不用一次性都报，先选 1 个作为“试水主线”，把它走完，你的迷茫就会少很多。
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        {filtered.map((exam) => (
          <a
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="p-5 rounded-2xl bg-white shadow border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <p className="text-xs text-gray-500">{exam.category}</p>
            <h3 className="mt-1 text-sm font-semibold text-gray-900">
              {exam.name}
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              下一次考试：{exam.nextExamDate}
            </p>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500">
          暂时还没有匹配这个方向的考试数据，可以先从「考试列表」里挑一个兴趣度最高的开始。
        </p>
      )}

      <NextSteps items={rule.steps} />
    </div>
  );
}
