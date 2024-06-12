import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoadMapServiceBase } from "./base/roadMap.service.base";

@Injectable()
export class RoadMapService extends RoadMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
