import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { UniversityUpdateManyWithoutRoadMapsInput } from "./UniversityUpdateManyWithoutRoadMapsInput";

export type RoadMapUpdateInput = {
  description?: string | null;
  student?: StudentWhereUniqueInput | null;
  universities?: UniversityUpdateManyWithoutRoadMapsInput;
};
