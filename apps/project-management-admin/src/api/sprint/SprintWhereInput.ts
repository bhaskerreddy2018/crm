import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SprintWhereInput = {
  endDate?: DateTimeNullableFilter;
  goal?: StringNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
