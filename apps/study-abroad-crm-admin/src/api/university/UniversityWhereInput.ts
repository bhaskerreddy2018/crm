import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoadMapWhereUniqueInput } from "../roadMap/RoadMapWhereUniqueInput";

export type UniversityWhereInput = {
  applications?: ApplicationListRelationFilter;
  coursesOffered?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  roadMap?: RoadMapWhereUniqueInput;
};
