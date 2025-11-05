"use client";

import { CemeteryRecord } from "@/types/CemeteryRecord";

interface Props {
  records?: CemeteryRecord[];
}

export default function CemeteryStats({ records = [] }: Props) {
  const totalBuried = records.length;
  const nativeBuried = records.filter(r => r.isNative === true).length;
  const foreignBuried = records.filter(r => r.isNative === false).length;

  const maleBuried = records.filter(r => r.gender?.toLowerCase() === "male").length;
  const femaleBuried = records.filter(r => r.gender?.toLowerCase() === "female").length;
  const otherGenderBuried = records.filter(
    r => r.gender && !["male", "female"].includes(r.gender.toLowerCase())
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 text-white rounded p-4 shadow">
        <h3 className="text-sm font-medium">Total Buried</h3>
        <p className="text-2xl font-bold">{totalBuried}</p>
      </div>
      <div className="bg-green-500 text-white rounded p-4 shadow">
        <h3 className="text-sm font-medium">Native Buried</h3>
        <p className="text-2xl font-bold">{nativeBuried}</p>
      </div>
      <div className="bg-red-500 text-white rounded p-4 shadow">
        <h3 className="text-sm font-medium">Foreigner Buried</h3>
        <p className="text-2xl font-bold">{foreignBuried}</p>
      </div>
      <div className="bg-purple-500 text-white rounded p-4 shadow">
        <h3 className="text-sm font-medium">Male Buried</h3>
        <p className="text-2xl font-bold">{maleBuried}</p>
      </div>
      <div className="bg-pink-500 text-white rounded p-4 shadow">
        <h3 className="text-sm font-medium">Female Buried</h3>
        <p className="text-2xl font-bold">{femaleBuried}</p>
      </div>
      {otherGenderBuried > 0 && (
        <div className="bg-yellow-500 text-white rounded p-4 shadow">
          <h3 className="text-sm font-medium">Other Gender Buried</h3>
          <p className="text-2xl font-bold">{otherGenderBuried}</p>
        </div>
      )}
    </div>
  );
}
