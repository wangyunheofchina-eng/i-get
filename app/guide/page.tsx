import Link from "next/link";

const intents = [
  {
    slug: "lost",
    title: "我很迷茫，只想先搞清楚方向",
    desc: "不知道自己适合什么，只想先有个大致的方向。",
  },
  {
    slug: "change",
    title: "我想换个方向，但不敢乱来",
    desc: "目前工作还可以，但想换一个更长期有前景的方向。",
  },
  {
    slug: "salary",
    title: "我想涨薪和提升竞争力",
    desc: "想有更好的薪资、职级，需要有含金量的证书支撑。",
  },
  {
    slug: "it",
    title: "我想转行互联网（技术 / 产品 / 数据）",
    desc: "零基础或跨行，希望进入互联网行业的人。",
  },
  {
    slug: "education",
    title: "我想做教育相关工作",
    desc: "想做老师、培训、教研等职业路径的人。",
  },
  {
    slug: "psychology",
    title: "我想做跟“助人”相关的工作（心理等）",
    desc: "对心理、咨询、助人工作有兴趣，希望慢慢靠近这个领域。",
  },
];

export default function GuidePage() {
  return (
    <div className="pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        找不到方向？先从你的目标开始
      </h1>

      <p className="text-gray-600 max-w-2xl">
        不用一开始就想清楚“一生要做什么”。先选一个最近 1-3 年你最在意的目标，
        我会帮你筛掉不适合的，只保留相对靠谱的证书方向。
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {intents.map((i) => (
          <Link
            key={i.slug}
            href={`/guide/${i.slug}`}
            className="block p-6 rounded-2xl bg-white shadow border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-900">{i.title}</h2>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {i.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
