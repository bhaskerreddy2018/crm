import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  issue?: IssueWhereUniqueInput;
};
