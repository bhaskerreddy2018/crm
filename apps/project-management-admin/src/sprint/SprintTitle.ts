import { Sprint as TSprint } from "../api/sprint/Sprint";

export const SPRINT_TITLE_FIELD = "id";

export const SprintTitle = (record: TSprint): string => {
  return record.id?.toString() || String(record.id);
};
