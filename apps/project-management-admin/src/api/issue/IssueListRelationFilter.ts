import { IssueWhereInput } from "./IssueWhereInput";

export type IssueListRelationFilter = {
  every?: IssueWhereInput;
  some?: IssueWhereInput;
  none?: IssueWhereInput;
};
