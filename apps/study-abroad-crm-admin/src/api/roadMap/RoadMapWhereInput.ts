import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { UniversityListRelationFilter } from "../university/UniversityListRelationFilter";

export type RoadMapWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  universities?: UniversityListRelationFilter;
};
