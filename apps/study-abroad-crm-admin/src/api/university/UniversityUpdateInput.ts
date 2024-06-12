import { ApplicationUpdateManyWithoutUniversitiesInput } from "./ApplicationUpdateManyWithoutUniversitiesInput";
import { RoadMapWhereUniqueInput } from "../roadMap/RoadMapWhereUniqueInput";

export type UniversityUpdateInput = {
  applications?: ApplicationUpdateManyWithoutUniversitiesInput;
  coursesOffered?: string | null;
  location?: string | null;
  name?: string | null;
  roadMap?: RoadMapWhereUniqueInput | null;
};
