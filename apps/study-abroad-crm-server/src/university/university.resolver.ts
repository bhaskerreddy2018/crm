import * as graphql from "@nestjs/graphql";
import { UniversityResolverBase } from "./base/university.resolver.base";
import { University } from "./base/University";
import { UniversityService } from "./university.service";

@graphql.Resolver(() => University)
export class UniversityResolver extends UniversityResolverBase {
  constructor(protected readonly service: UniversityService) {
    super(service);
  }
}
