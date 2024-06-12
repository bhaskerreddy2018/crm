import { CounsellorWhereInput } from "./CounsellorWhereInput";
import { CounsellorOrderByInput } from "./CounsellorOrderByInput";

export type CounsellorFindManyArgs = {
  where?: CounsellorWhereInput;
  orderBy?: Array<CounsellorOrderByInput>;
  skip?: number;
  take?: number;
};
