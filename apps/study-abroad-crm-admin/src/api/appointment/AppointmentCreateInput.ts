import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  location?: string | null;
  student?: StudentWhereUniqueInput | null;
  time?: Date | null;
};
