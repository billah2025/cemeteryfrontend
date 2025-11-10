"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CalendarDays, User, MessageSquare } from "lucide-react";

interface Notice {
  _id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  type?: string;
}

export default function NoticeDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [recent, setRecent] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices/${id}`, {
          headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY! },
        });
        const data = await res.json();
        setNotice(data);

        const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`, {
          headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY! },
        });
        const all = await res2.json();
        setRecent(all.slice(0, 6));
      } catch (error) {
        console.error("Notice load error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) return <p className="p-8 text-emerald-800">লোড হচ্ছে...</p>;
  if (!notice) return <p className="p-8 text-red-700">নোটিশ পাওয়া যায়নি</p>;

  return (
    <div
      className="min-h-screen py-10 px-4 md:px-12   relative overflow-hidden"
      style={{
        backgroundColor: "#f0f8f5", // soft Islamic green base
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
          url('/image/bg-n.jpg')`, // Islamic texture
        backgroundRepeat: "repeat",
        backgroundSize: "150px 150px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* Category Tag */}
          <span className="px-4 py-1.5 bg-emerald-700 text-white rounded-full text-sm font-semibold shadow-md border border-yellow-200">
            {notice.type || "Notice"}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-emerald-900 mt-4 mb-4 leading-tight font-[Noto_Naskh_Arabic] tracking-wide">
            {notice.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center text-emerald-800 gap-5 text-sm mb-6">
            <div className="flex items-center gap-1">
              <User size={16} /> প্রশাসক
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays size={16} /> {new Date(notice.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={16} /> ০ মন্তব্য
            </div>
          </div>

          {/* Featured Image */}
          {notice.image && (
            <img
              src={notice.image}
              className="rounded-2xl w-full h-[350px] object-cover mb-8 border-4 border-emerald-200 shadow-lg"
            />
          )}

          {/* Article Text */}
          <p className="text-emerald-900 text-[17px] leading-relaxed whitespace-pre-line font-serif bg-white/70 p-4 rounded-xl shadow-sm border-l-4 border-emerald-500">
            {notice.description}
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">

          {/* Social Networks */}
          <div className="bg-white/80 p-6 rounded-2xl shadow-md border border-emerald-100 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-4 text-emerald-900 border-b border-emerald-200 pb-2">
              সামাজিক যোগাযোগ
            </h3>
            <div className="flex gap-3 flex-wrap">
              {["facebook", "twitter", "instagram", "youtube"].map((s) => (
                <button
                  key={s}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-700 text-white capitalize hover:from-green-700 hover:to-emerald-800 transition-all shadow"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white/80 p-6 rounded-2xl shadow-md border border-emerald-100 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-3 text-emerald-900 border-b border-emerald-200 pb-2">
              বিভাগসমূহ
            </h3>
            <div className="space-y-2">
              {["Notice", "Event", "Meeting", "Announcement"].map((cat) => (
                <span
                  key={cat}
                  className="block text-emerald-800 hover:text-yellow-600 cursor-pointer transition"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Notices */}
          <div className="bg-white/80 p-6 rounded-2xl shadow-md border border-emerald-100 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-3 text-emerald-900 border-b border-emerald-200 pb-2">
              সাম্প্রতিক নোটিশ
            </h3>
            <div className="space-y-4">
              {recent.map((item) => (
                <div
                  key={item._id}
                  onClick={() => router.push(`/notice/${item._id}`)}
                  className="cursor-pointer flex gap-3 hover:bg-emerald-50 p-2 rounded-lg transition border border-transparent hover:border-emerald-200"
                >
                  <img
                    src={item.image || "https://via.placeholder.com/80"}
                    className="w-16 h-16 rounded object-cover border border-emerald-200"
                  />
                  <div>
                    <p className="text-sm font-medium text-emerald-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-emerald-700">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
