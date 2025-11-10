"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, FileText } from "lucide-react";

interface Notice {
  _id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
          },
        });
        const data = await res.json();
        const sorted = data.sort(
          (a: Notice, b: Notice) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setNotices(sorted);
      } catch (error) {
        console.error("Failed to load notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) return <p className="p-8 text-green-900">Loading notices...</p>;
  if (notices.length === 0) return <p className="p-8 text-green-900">No notices available.</p>;

  return (
    <div className="p-6 md:p-12 bg-green-50 min-h-screen">
      <h2 className="text-4xl font-bold text-green-900 text-center mb-10">
        All Notices & Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {notices.map((notice) => (
          <Link key={notice._id} href={`/notice/${notice._id}`}>
            <div className="bg-gradient-to-br from-green-200 to-green-400 rounded-2xl shadow-lg hover:shadow-2xl transition w-64 p-4 border border-green-100 cursor-pointer">
              <div className="bg-green-100 w-full h-36 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                {notice.image ? (
                  <img src={notice.image} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-green-600">No Image</span>
                )}
              </div>

              <h2 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                <FileText size={18} /> {notice.title}
              </h2>

              <p className="text-green-800 text-sm flex items-center gap-2 mb-2">
                <CalendarDays size={16} /> {new Date(notice.date).toLocaleDateString()}
              </p>

              <p className="text-sm text-green-900 line-clamp-3">
                {notice.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
