import { SortOrder } from "../../util/SortOrder";

export type SprintOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  goal?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
