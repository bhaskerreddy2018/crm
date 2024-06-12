import { Comment } from "../comment/Comment";

export type Issue = {
  assignee: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  labels?: Array<"Option1">;
  priority?: "Option1" | null;
  reporter: string | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
