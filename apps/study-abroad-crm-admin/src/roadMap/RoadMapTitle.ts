import { RoadMap as TRoadMap } from "../api/roadMap/RoadMap";

export const ROADMAP_TITLE_FIELD = "id";

export const RoadMapTitle = (record: TRoadMap): string => {
  return record.id?.toString() || String(record.id);
};
