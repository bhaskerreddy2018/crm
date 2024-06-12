import { IssueWhereInput } from "./IssueWhereInput";
import { IssueOrderByInput } from "./IssueOrderByInput";

export type IssueFindManyArgs = {
  where?: IssueWhereInput;
  orderBy?: Array<IssueOrderByInput>;
  skip?: number;
  take?: number;
};
