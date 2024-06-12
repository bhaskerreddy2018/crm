import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  createdAt?: SortOrder;
  eligibleUniversities?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  universityId?: SortOrder;
  updatedAt?: SortOrder;
};
