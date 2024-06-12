import { Application } from "../application/Application";
import { Appointment } from "../appointment/Appointment";
import { RoadMap } from "../roadMap/RoadMap";

export type Student = {
  address: string | null;
  applications?: Array<Application>;
  appointments?: Array<Appointment>;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  roadMaps?: Array<RoadMap>;
  updatedAt: Date;
};
