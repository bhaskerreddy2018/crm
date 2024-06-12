import { Label as TLabel } from "../api/label/Label";

export const LABEL_TITLE_FIELD = "name";

export const LabelTitle = (record: TLabel): string => {
  return record.name?.toString() || String(record.id);
};
