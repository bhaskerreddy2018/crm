import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SprintServiceBase } from "./base/sprint.service.base";

@Injectable()
export class SprintService extends SprintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
