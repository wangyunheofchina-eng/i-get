"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exams } from "../../data/exams";
import Card from "../../components/ui/Card";
import { getSearchHistory, addSearchHistory, clearSearchHistory } from "../../utils/search";

const HOT_KEYWORDS = [
  "教师资格证",
  "注册会计师 CPA",
  "软考",
  "心理咨询",
  "法律职业资格考试",
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") || "";

  const [keyword, setKeyword] = useState(initial);
  const [results, setResults] = useState(exams);
  const [history, setHistory] = useState<string[]>([]);

  // 初始化历史 & 初始搜索
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHistory(getSearchHistory());
    }
  }, []);

  useEffect(() => {
    handleSearch(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 初次加载时根据 URL 中的 q 过滤

  function handleSearch(term: string) {
    const q = term.trim();
    if (!q) {
      setResults(exams);
      return;
    }

    const lower = q.toLowerCase();
    const filtered = exams.filter((exam) => {
      const text =
        (exam.name || "") +
        " " +
        (exam.category || "") +
        " " +
        (exam.description || "");
      return text.toLowerCase().includes(lower);
    });
    setResults(filtered);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = keyword.trim();
    if (!q) return;
    addSearchHistory(q);
    setHistory(getSearchHistory());
    router.replace(`/search?q=${encodeURIComponent(q)}`);
    handleSearch(q);
  }

  function onClickKeyword(word: string) {
    setKeyword(word);
    addSearchHistory(word);
    setHistory(getSearchHistory());
    router.replace(`/search?q=${encodeURIComponent(word)}`);
    handleSearch(word);
  }

  function onClearHistory() {
    clearSearchHistory();
    setHistory([]);
  }

  return (
    <div className="pt-10 space-y-10">
      {/* 顶部搜索区 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          🔍 搜索你想考的证
        </h1>
        <p className="text-sm text-gray-500">
          支持按证书名称、行业方向、简单描述搜索，比如 “心理”、“教师”、“项目管理”
        </p>

        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto mt-4 flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-5 py-2 shadow-sm border border-black/5"
        >
          <span className="text-gray-400 text-lg">🔍</span>
          <input
            className="flex-1 bg-transparent outline-none text-sm"
            placeholder="输入想要搜索的证书，比如 教资 / CPA / 软考..."
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          {keyword && (
            <button
              type="button"
              onClick={() => {
                setKeyword("");
                handleSearch("");
                router.replace("/search");
              }}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              清空
            </button>
          )}
        </form>
      </div>

      {/* 热门搜索 + 历史 */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-gray-500">热门搜索：</span>
          {HOT_KEYWORDS.map((word) => (
            <button
              key={word}
              onClick={() => onClickKeyword(word)}
              className="px-3 py-1 rounded-full bg-black/5 text-xs text-gray-700 hover:bg-black/10 transition"
            >
              {word}
            </button>
          ))}
        </div>

        {history.length > 0 && (
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex flex-wrap gap-2 items-center">
              <span>搜索历史：</span>
              {history.map((word) => (
                <button
                  key={word}
                  onClick={() => onClickKeyword(word)}
                  className="px-3 py-1 rounded-full border border-black/10 hover:bg-black/5 transition"
                >
                  {word}
                </button>
              ))}
            </div>
            <button
              onClick={onClearHistory}
              className="hover:text-gray-800"
            >
              清除
            </button>
          </div>
        )}
      </div>

      {/* 搜索结果 */}
      <div className="space-y-3 max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-gray-700">
            共找到 {results.length} 个相关考试
          </h2>
        </div>

        {results.length === 0 && (
          <div className="text-center text-gray-500 pt-10">
            <p className="text-4xl mb-4">🪶</p>
            <p>没有找到匹配的证书，可以尝试换个关键词</p>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {results.map((exam) => (
            <a
              key={exam.slug}
              href={`/exams/${exam.slug}`}
              className="block"
            >
              <Card>
                <h3 className="text-base font-semibold">{exam.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{exam.category}</p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  {exam.description}
                </p>
                <div className="flex gap-3 mt-4 text-[11px] text-gray-500">
                  <span>📅 下一次：{exam.nextExamDate}</span>
                  <span>📝 报名：{exam.registrationTime}</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
