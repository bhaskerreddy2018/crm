import { Counsellor as TCounsellor } from "../api/counsellor/Counsellor";

export const COUNSELLOR_TITLE_FIELD = "name";

export const CounsellorTitle = (record: TCounsellor): string => {
  return record.name?.toString() || String(record.id);
};
