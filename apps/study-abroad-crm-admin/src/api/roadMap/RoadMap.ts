import { Student } from "../student/Student";
import { University } from "../university/University";

export type RoadMap = {
  createdAt: Date;
  description: string | null;
  id: string;
  student?: Student | null;
  universities?: Array<University>;
  updatedAt: Date;
};
