import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type ApplicationCreateInput = {
  eligibleUniversities?: InputJsonValue;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
  university?: UniversityWhereUniqueInput | null;
};
