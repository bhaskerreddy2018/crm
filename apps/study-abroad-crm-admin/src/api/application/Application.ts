import { JsonValue } from "type-fest";
import { Student } from "../student/Student";
import { University } from "../university/University";

export type Application = {
  createdAt: Date;
  eligibleUniversities: JsonValue;
  id: string;
  status?: "Option1" | null;
  student?: Student | null;
  university?: University | null;
  updatedAt: Date;
};
