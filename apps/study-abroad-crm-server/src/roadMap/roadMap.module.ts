import { Module } from "@nestjs/common";
import { RoadMapModuleBase } from "./base/roadMap.module.base";
import { RoadMapService } from "./roadMap.service";
import { RoadMapController } from "./roadMap.controller";
import { RoadMapResolver } from "./roadMap.resolver";

@Module({
  imports: [RoadMapModuleBase],
  controllers: [RoadMapController],
  providers: [RoadMapService, RoadMapResolver],
  exports: [RoadMapService],
})
export class RoadMapModule {}
