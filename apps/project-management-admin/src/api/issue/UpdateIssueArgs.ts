import { IssueWhereUniqueInput } from "./IssueWhereUniqueInput";
import { IssueUpdateInput } from "./IssueUpdateInput";

export type UpdateIssueArgs = {
  where: IssueWhereUniqueInput;
  data: IssueUpdateInput;
};
