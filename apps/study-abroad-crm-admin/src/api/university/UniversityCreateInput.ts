import { ApplicationCreateNestedManyWithoutUniversitiesInput } from "./ApplicationCreateNestedManyWithoutUniversitiesInput";
import { RoadMapWhereUniqueInput } from "../roadMap/RoadMapWhereUniqueInput";

export type UniversityCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutUniversitiesInput;
  coursesOffered?: string | null;
  location?: string | null;
  name?: string | null;
  roadMap?: RoadMapWhereUniqueInput | null;
};
