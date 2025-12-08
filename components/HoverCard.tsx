"use client";

import { useState } from "react";

export default function HoverCard({ children, content }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="
          absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2
          p-4 rounded-xl bg-white shadow-lg border
          z-50 text-sm space-y-2 animate-fadeIn
        ">
          {content}
        </div>
      )}
    </div>
  );
}
