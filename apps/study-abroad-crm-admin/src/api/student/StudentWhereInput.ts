import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoadMapListRelationFilter } from "../roadMap/RoadMapListRelationFilter";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  applications?: ApplicationListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  roadMaps?: RoadMapListRelationFilter;
};
