import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  location?: string | null;
  student?: StudentWhereUniqueInput | null;
  time?: Date | null;
};
