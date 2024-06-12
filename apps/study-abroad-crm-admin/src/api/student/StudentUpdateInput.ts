import { ApplicationUpdateManyWithoutStudentsInput } from "./ApplicationUpdateManyWithoutStudentsInput";
import { AppointmentUpdateManyWithoutStudentsInput } from "./AppointmentUpdateManyWithoutStudentsInput";
import { RoadMapUpdateManyWithoutStudentsInput } from "./RoadMapUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  address?: string | null;
  applications?: ApplicationUpdateManyWithoutStudentsInput;
  appointments?: AppointmentUpdateManyWithoutStudentsInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  roadMaps?: RoadMapUpdateManyWithoutStudentsInput;
};
