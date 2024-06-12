import * as graphql from "@nestjs/graphql";
import { RoadMapResolverBase } from "./base/roadMap.resolver.base";
import { RoadMap } from "./base/RoadMap";
import { RoadMapService } from "./roadMap.service";

@graphql.Resolver(() => RoadMap)
export class RoadMapResolver extends RoadMapResolverBase {
  constructor(protected readonly service: RoadMapService) {
    super(service);
  }
}
