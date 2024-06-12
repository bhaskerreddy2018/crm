import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type IssueWhereInput = {
  assignee?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  reporter?: StringNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
