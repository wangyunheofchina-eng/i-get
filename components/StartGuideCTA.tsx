"use client";

export default function StartGuideCTA() {
  return (
    <div className="mt-6 flex justify-center">
      <a
        href="/guide"
        className="
          px-6 py-3 rounded-full text-sm font-medium
          bg-black text-white shadow hover:bg-black/90
          transition inline-flex items-center space-x-2
        "
      >
        <span>🎯 还没想好考什么？</span>
        <span>开始找方向</span>
      </a>
    </div>
  );
}
