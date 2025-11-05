"use client";

import React, { useRef } from "react";
import axios from "axios";
import type ReactQuillType from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuill = require("react-quill"); // ✅ require, not import — avoids Next.js bundling findDOMNode at build time

interface QuillEditorClientProps {
  value: string;
  onChange: (value: string) => void;
}

export default function QuillEditorClient({ value, onChange }: QuillEditorClientProps) {
  const quillRef = useRef<ReactQuillType | null>(null);

  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await axios.post("http://localhost:5000/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const imageUrl = res.data.url;

        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection(true);
        if (editor && range) editor.insertEmbed(range.index, "image", imageUrl);
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: { image: handleImageUpload },
    },
  };

  // ✅ Works safely in Next.js 16
  const RQ = ReactQuill.default ?? ReactQuill;
  return (
    <RQ
      ref={quillRef as any}
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      placeholder="Write your notice or event details..."
    />
  );
}
