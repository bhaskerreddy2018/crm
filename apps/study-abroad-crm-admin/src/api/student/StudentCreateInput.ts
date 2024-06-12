import { ApplicationCreateNestedManyWithoutStudentsInput } from "./ApplicationCreateNestedManyWithoutStudentsInput";
import { AppointmentCreateNestedManyWithoutStudentsInput } from "./AppointmentCreateNestedManyWithoutStudentsInput";
import { RoadMapCreateNestedManyWithoutStudentsInput } from "./RoadMapCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  address?: string | null;
  applications?: ApplicationCreateNestedManyWithoutStudentsInput;
  appointments?: AppointmentCreateNestedManyWithoutStudentsInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  roadMaps?: RoadMapCreateNestedManyWithoutStudentsInput;
};
