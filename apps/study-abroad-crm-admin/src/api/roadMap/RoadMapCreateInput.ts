import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { UniversityCreateNestedManyWithoutRoadMapsInput } from "./UniversityCreateNestedManyWithoutRoadMapsInput";

export type RoadMapCreateInput = {
  description?: string | null;
  student?: StudentWhereUniqueInput | null;
  universities?: UniversityCreateNestedManyWithoutRoadMapsInput;
};
