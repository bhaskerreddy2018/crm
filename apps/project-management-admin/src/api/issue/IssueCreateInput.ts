import { CommentCreateNestedManyWithoutIssuesInput } from "./CommentCreateNestedManyWithoutIssuesInput";

export type IssueCreateInput = {
  assignee?: string | null;
  comments?: CommentCreateNestedManyWithoutIssuesInput;
  description?: string | null;
  dueDate?: Date | null;
  labels?: Array<"Option1">;
  priority?: "Option1" | null;
  reporter?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
