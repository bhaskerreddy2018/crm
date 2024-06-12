import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  studentId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
