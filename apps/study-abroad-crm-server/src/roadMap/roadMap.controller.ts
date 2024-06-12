import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoadMapService } from "./roadMap.service";
import { RoadMapControllerBase } from "./base/roadMap.controller.base";

@swagger.ApiTags("roadMaps")
@common.Controller("roadMaps")
export class RoadMapController extends RoadMapControllerBase {
  constructor(protected readonly service: RoadMapService) {
    super(service);
  }
}
