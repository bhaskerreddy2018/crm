export type Sprint = {
  createdAt: Date;
  endDate: Date | null;
  goal: string | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
