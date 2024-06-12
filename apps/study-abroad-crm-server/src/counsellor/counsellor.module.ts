import { Module } from "@nestjs/common";
import { CounsellorModuleBase } from "./base/counsellor.module.base";
import { CounsellorService } from "./counsellor.service";
import { CounsellorController } from "./counsellor.controller";
import { CounsellorResolver } from "./counsellor.resolver";

@Module({
  imports: [CounsellorModuleBase],
  controllers: [CounsellorController],
  providers: [CounsellorService, CounsellorResolver],
  exports: [CounsellorService],
})
export class CounsellorModule {}
