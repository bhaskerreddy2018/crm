import { Issue as TIssue } from "../api/issue/Issue";

export const ISSUE_TITLE_FIELD = "title";

export const IssueTitle = (record: TIssue): string => {
  return record.title?.toString() || String(record.id);
};
