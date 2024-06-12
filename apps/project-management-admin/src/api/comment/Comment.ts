import { Issue } from "../issue/Issue";

export type Comment = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  issue?: Issue | null;
  updatedAt: Date;
};
