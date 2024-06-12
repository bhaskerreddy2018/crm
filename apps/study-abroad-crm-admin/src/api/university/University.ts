import { Application } from "../application/Application";
import { RoadMap } from "../roadMap/RoadMap";

export type University = {
  applications?: Array<Application>;
  coursesOffered: string | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  roadMap?: RoadMap | null;
  updatedAt: Date;
};
