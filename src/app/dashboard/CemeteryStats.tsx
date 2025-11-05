"use client";

import { CemeteryRecord } from "@/types/CemeteryRecord";

interface Props {
  records?: CemeteryRecord[];
}

export default function CemeteryStats({ records = [] }: Props) {
  if (!records.length)
    return (
      <p className="text-center text-green-800 bg-green-50 p-4 rounded-md border border-green-200 shadow-sm">
        No cemetery records found
      </p>
    );

  const totalBuried = records.length;
  const nativeBuried = records.filter((r) => r.isNative === true).length;
  const foreignBuried = records.filter((r) => r.isNative === false).length;

  const maleBuried = records.filter(
    (r) => r.gender?.toLowerCase() === "male"
  ).length;
  const femaleBuried = records.filter(
    (r) => r.gender?.toLowerCase() === "female"
  ).length;
  const otherGenderBuried = records.filter(
    (r) => r.gender && !["male", "female"].includes(r.gender.toLowerCase())
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white rounded-xl p-5 shadow-lg border border-green-900 hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm font-semibold text-green-100">Total Buried</h3>
        <p className="text-3xl font-bold mt-1 text-amber-300">{totalBuried}</p>
      </div>

      <div className="bg-gradient-to-br from-green-700 to-green-500 text-white rounded-xl p-5 shadow-lg border border-green-800 hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm font-semibold text-green-100">Native Buried</h3>
        <p className="text-3xl font-bold mt-1 text-amber-300">{nativeBuried}</p>
      </div>

      <div className="bg-gradient-to-br from-emerald-700 to-green-500 text-white rounded-xl p-5 shadow-lg border border-emerald-800 hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm font-semibold text-green-100">Foreigner Buried</h3>
        <p className="text-3xl font-bold mt-1 text-amber-300">{foreignBuried}</p>
      </div>

      <div className="bg-gradient-to-br from-green-800 to-emerald-600 text-white rounded-xl p-5 shadow-lg border border-green-900 hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm font-semibold text-green-100">Male Buried</h3>
        <p className="text-3xl font-bold mt-1 text-amber-300">{maleBuried}</p>
      </div>

      <div className="bg-gradient-to-br from-green-700 to-emerald-500 text-white rounded-xl p-5 shadow-lg border border-green-800 hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm font-semibold text-green-100">Female Buried</h3>
        <p className="text-3xl font-bold mt-1 text-amber-300">{femaleBuried}</p>
      </div>

      {otherGenderBuried > 0 && (
        <div className="bg-gradient-to-br from-teal-700 to-green-600 text-white rounded-xl p-5 shadow-lg border border-green-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-sm font-semibold text-green-100">
            Other Gender Buried
          </h3>
          <p className="text-3xl font-bold mt-1 text-amber-300">
            {otherGenderBuried}
          </p>
        </div>
      )}
    </div>
  );
}
