import { SprintWhereInput } from "./SprintWhereInput";
import { SprintOrderByInput } from "./SprintOrderByInput";

export type SprintFindManyArgs = {
  where?: SprintWhereInput;
  orderBy?: Array<SprintOrderByInput>;
  skip?: number;
  take?: number;
};
