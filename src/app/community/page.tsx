"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
  level: number;
  img?: string;
}

export default function LivingCommunityTree() {
  const members: Member[] = [
    { name: "Leader", role: "Community Head", level: 0, img: "/imam.jpg" },
    { name: "Coordinator 1", role: "Operations", level: 1 },
    { name: "Coordinator 2", role: "Volunteer Coordinator", level: 1 },
    { name: "Volunteer 1", role: "Maintenance", level: 2 },
    { name: "Volunteer 2", role: "Events", level: 2 },
    { name: "Volunteer 3", role: "Media", level: 2 },
    { name: "Volunteer 4", role: "Support", level: 2 },
  ];

  // Group members by level
  const levels = members.reduce((acc, m) => {
    if (!acc[m.level]) acc[m.level] = [];
    acc[m.level].push(m);
    return acc;
  }, {} as Record<number, Member[]>);

  const getX = (index: number, total: number) => {
    if (total === 1) return 50;
    return ((index + 0.5) / total) * 100;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-green-100 py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/islamic-pattern.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-800 mb-3">🌳 Cemetery Community</h1>
        <p className="text-emerald-700 max-w-2xl mx-auto">
          Our living community tree shows members nurturing this cemetery with devotion and love.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated Curved Branches */}
        <svg className="absolute inset-0 w-full h-full z-0">
          {Object.keys(levels)
            .map(Number)
            .slice(0, -1)
            .map((level) => {
              const parents = levels[level];
              const children = levels[level + 1];
              return parents.flatMap((parent, i) =>
                children.map((child, j) => {
                  const parentX = getX(i, parents.length);
                  const parentY = (level + 0.5) * 150;
                  const childX = getX(j, children.length);
                  const childY = (level + 1 + 0.5) * 150;

                  const cpx1 = parentX;
                  const cpy1 = parentY + 50;
                  const cpx2 = childX;
                  const cpy2 = childY - 50;

                  return (
                    <motion.path
                      key={`${parent.name}-${child.name}`}
                      d={`M ${parentX}% ${parentY}px C ${cpx1}% ${cpy1}px, ${cpx2}% ${cpy2}px, ${childX}% ${childY}px`}
                      stroke="#16a34a"
                      strokeWidth={2}
                      fill="transparent"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: level * 0.5 + j * 0.2 }}
                    />
                  );
                })
              );
            })}
        </svg>

        {/* Render Levels */}
        {Object.keys(levels)
          .map(Number)
          .map((level) => (
            <div
              key={level}
              className="relative z-10 flex justify-center gap-12 mb-16 flex-wrap"
            >
              {levels[level].map((member, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-emerald-300 rounded-2xl p-5 w-40 text-center shadow-md hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: level * 0.5 + idx * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {member.img ? (
                    <Image
                      src={member.img}
                      width={70}
                      height={70}
                      alt={member.name}
                      className="rounded-full mx-auto mb-3 border-4 border-emerald-300"
                    />
                  ) : (
                    <div className="bg-emerald-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg mb-3">
                      {member.name.split(" ")[0][0]}
                    </div>
                  )}
                  <h3 className="text-md font-semibold text-emerald-800">{member.name}</h3>
                  <p className="text-emerald-600 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          ))}
      </div>

      {/* Quranic Quote */}
      <div className="text-center mt-16 relative z-10">
        <p className="text-emerald-800 italic font-medium">
          “Verily, the believers are but brothers — so make peace between your brothers.” <br />
          <span className="text-emerald-600">— Quran 49:10</span>
        </p>
        <div className="mt-4 text-sm text-emerald-700">
          Together, we serve and grow this sacred community 🌙
        </div>
      </div>
    </section>
  );
}
