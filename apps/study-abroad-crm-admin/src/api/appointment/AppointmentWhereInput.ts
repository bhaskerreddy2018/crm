import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AppointmentWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
  time?: DateTimeNullableFilter;
};
