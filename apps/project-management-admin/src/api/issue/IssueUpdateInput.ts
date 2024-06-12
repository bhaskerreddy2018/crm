import { CommentUpdateManyWithoutIssuesInput } from "./CommentUpdateManyWithoutIssuesInput";

export type IssueUpdateInput = {
  assignee?: string | null;
  comments?: CommentUpdateManyWithoutIssuesInput;
  description?: string | null;
  dueDate?: Date | null;
  labels?: Array<"Option1">;
  priority?: "Option1" | null;
  reporter?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
