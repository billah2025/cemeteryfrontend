export interface CemeteryRecord {
   _id: string;
  name: string;
  address?: string;
  age?: number;
  birthDate?: string;
  deathDate?: string;
  isNative?: boolean;
  fatherName?: string;
  motherName?: string;
  guardianName?: string;
  image?: string;
  graveNumber: string;
  gender?: string;
  whereDied?: string;
  description?: string;
  
  location: string;
   // include optional if some components need it
}
// export interface CemeteryTableProps {
//   records: CemeteryRecord[];                        // Array of records to display
//   onEdit: (record: CemeteryRecord) => void;        // Called when editing a record
//   onDelete?: (record: CemeteryRecord) => void;     // Optional delete handler
// }