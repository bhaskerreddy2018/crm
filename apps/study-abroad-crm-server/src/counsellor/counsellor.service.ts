import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CounsellorServiceBase } from "./base/counsellor.service.base";

@Injectable()
export class CounsellorService extends CounsellorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
