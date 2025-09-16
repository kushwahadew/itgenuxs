"use client";

import dynamic from "next/dynamic";

// ✅ Lazy load MapInner, SSR disable
const MapInner = dynamic(() => import("./MapInner"), { ssr: false });

export default function CompanyMap() {
  return (
    <div className="w-full max-w-4xl mx-auto h-[400px] rounded-xl overflow-hidden shadow-lg border">
      <MapInner />
    </div>
  );
}
