import * as graphql from "@nestjs/graphql";
import { CounsellorResolverBase } from "./base/counsellor.resolver.base";
import { Counsellor } from "./base/Counsellor";
import { CounsellorService } from "./counsellor.service";

@graphql.Resolver(() => Counsellor)
export class CounsellorResolver extends CounsellorResolverBase {
  constructor(protected readonly service: CounsellorService) {
    super(service);
  }
}
