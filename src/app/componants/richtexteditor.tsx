"use client";

import dynamic from "next/dynamic";
import React from "react";

// ✅ Dynamically import the actual client editor — no SSR
const QuillEditorClient = dynamic(() => import("./QuillEditorClient"), {
  ssr: false,
  loading: () => <div className="p-4 text-gray-500 text-sm">Loading editor...</div>,
});

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="bg-white border rounded-lg">
      <QuillEditorClient value={value} onChange={onChange} />
    </div>
  );
}
