import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SprintService } from "./sprint.service";
import { SprintControllerBase } from "./base/sprint.controller.base";

@swagger.ApiTags("sprints")
@common.Controller("sprints")
export class SprintController extends SprintControllerBase {
  constructor(
    protected readonly service: SprintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
