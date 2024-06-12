import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  issue?: IssueWhereUniqueInput | null;
};
