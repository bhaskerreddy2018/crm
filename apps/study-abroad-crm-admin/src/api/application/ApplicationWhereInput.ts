import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type ApplicationWhereInput = {
  eligibleUniversities?: JsonFilter;
  id?: StringFilter;
  status?: "Option1";
  student?: StudentWhereUniqueInput;
  university?: UniversityWhereUniqueInput;
};
