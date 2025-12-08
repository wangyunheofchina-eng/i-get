export default function WikiGuidePage() {
  return (
    <div className="max-w-4xl mx-auto pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        考试字段说明
      </h1>

      <p className="text-sm text-gray-600">
        这里解释一下在考试详情页里出现的各个指标和字段，方便你理解这些分数、标签的含义。
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">📊 难度 / 认可度 / 学习周期</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>难度</strong>（1–5）：
            综合考试内容宽度、深度、通过率、备考门槛等维度的主观评估。
          </li>
          <li>
            <strong>认可度</strong>（1–5）：
            这个证在行业内的普遍认可程度，比如招聘 JD 中是否常出现。
          </li>
          <li>
            <strong>学习周期</strong>（1–5）：
            从零开始，一般需要投入的时间强度；数字越大，周期越长。
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">📘 考试结构相关字段</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>subjects（科目）</strong>：考试主要考哪些板块，方便你快速判断“是不是自己感兴趣的内容”。
          </li>
          <li>
            <strong>passLine（合格线）</strong>：一般为 60 分或各地单独划线，以官方公告为准。
          </li>
          <li>
            <strong>passRate（通过率）</strong>：若官方未公布，则会用“中等 / 较难”这种信息帮助你感性判断。
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">🎯 适合人群 / 职业方向</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>适合人群（suitable）</strong>：
            用尽量白话的方式描述“什么背景的人报这个证更划算”，避免盲目跟风。
          </li>
          <li>
            <strong>职业方向（careers）</strong>：
            通过这个证后，现实世界中常见的去向，而不是理想化宣传语。
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">🛠 备考建议 & 报考流程</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>tips（备考建议）</strong>：
            帮你避免“信息噪音”，强调时间分配和资料选择，而不是让你买更多课。
          </li>
          <li>
            <strong>flow（报考流程）</strong>：
            只做关键节点提示（报名 → 备考 → 考试 → 取证），具体细节以官方公告为准。
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">🔥 热度（heat）</h2>
        <p className="text-sm text-gray-700">
          热度并不代表“一定适合你”，它只是一个综合指标：
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>用户访问量 / 收藏量</li>
          <li>行业讨论度、招聘中出现频率</li>
          <li>我们在运营过程中的观察与判断</li>
        </ul>
        <p className="text-sm text-gray-700">
          真正适合你的考试，应该是：
          <strong>和你的背景、时间、职业目标匹配的</strong>，
          而不是“热度最高”的那个。
        </p>
      </section>
    </div>
  );
}
