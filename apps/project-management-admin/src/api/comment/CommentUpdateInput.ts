import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  issue?: IssueWhereUniqueInput | null;
};
