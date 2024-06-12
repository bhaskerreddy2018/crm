import { Module } from "@nestjs/common";
import { UniversityModuleBase } from "./base/university.module.base";
import { UniversityService } from "./university.service";
import { UniversityController } from "./university.controller";
import { UniversityResolver } from "./university.resolver";

@Module({
  imports: [UniversityModuleBase],
  controllers: [UniversityController],
  providers: [UniversityService, UniversityResolver],
  exports: [UniversityService],
})
export class UniversityModule {}
