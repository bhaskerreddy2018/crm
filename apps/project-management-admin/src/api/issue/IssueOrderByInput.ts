import { SortOrder } from "../../util/SortOrder";

export type IssueOrderByInput = {
  assignee?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  labels?: SortOrder;
  priority?: SortOrder;
  reporter?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
