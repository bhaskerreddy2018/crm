import { Student } from "../student/Student";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  student?: Student | null;
  time: Date | null;
  updatedAt: Date;
};
