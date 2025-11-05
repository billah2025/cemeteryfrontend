"use client";

// interface Record {
//   _id: string;
//   name: string;
//   address?: string;
//   age?: number;
//   birthDate?: string;
//   deathDate?: string;
//   isNative?: boolean;
//   fatherName?: string;
//   motherName?: string;
//   guardianName?: string;
//   image?: string;
//   graveNumber: string;
//   gender?: string;
//   whereDied?: string;
//   description?: string;
// }

import { CemeteryRecord } from "@/types/CemeteryRecord";
interface Props {
  records: CemeteryRecord[];
  onEdit: (record: CemeteryRecord) => void;
  onDelete: (id: string) => void;
}



// interface Props {
//   records: Record[];
//   onEdit: (record: Record) => void;
//   onDelete: (id: string) => void;
// }

export default function CemeteryTable({ records, onEdit, onDelete }: Props) {
  if (!records || records.length === 0)
    return <p>No records found.</p>;

  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Grave #</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Age</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Gender</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Birth Date</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Death Date</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Native</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Where Died</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {records.map((record) => (
            <tr key={record._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">{record.name}</td>
              <td className="px-4 py-2 text-sm">{record.graveNumber}</td>
              <td className="px-4 py-2 text-sm">{record.age ?? "-"}</td>
              <td className="px-4 py-2 text-sm">{record.gender ?? "-"}</td>
              <td className="px-4 py-2 text-sm">
                {record.birthDate ? new Date(record.birthDate).toLocaleDateString() : "-"}
              </td>
              <td className="px-4 py-2 text-sm">
                {record.deathDate ? new Date(record.deathDate).toLocaleDateString() : "-"}
              </td>
              <td className="px-4 py-2 text-sm">{record.isNative ? "Yes" : "No"}</td>
              <td className="px-4 py-2 text-sm">{record.whereDied ?? "-"}</td>
              <td className="px-4 py-2 text-sm space-x-2">
                <button
                  onClick={() => onEdit(record)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(record._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
