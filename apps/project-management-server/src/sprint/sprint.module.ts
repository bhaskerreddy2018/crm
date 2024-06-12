import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SprintModuleBase } from "./base/sprint.module.base";
import { SprintService } from "./sprint.service";
import { SprintController } from "./sprint.controller";
import { SprintResolver } from "./sprint.resolver";

@Module({
  imports: [SprintModuleBase, forwardRef(() => AuthModule)],
  controllers: [SprintController],
  providers: [SprintService, SprintResolver],
  exports: [SprintService],
})
export class SprintModule {}
