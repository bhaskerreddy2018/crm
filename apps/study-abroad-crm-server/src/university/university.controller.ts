import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UniversityService } from "./university.service";
import { UniversityControllerBase } from "./base/university.controller.base";

@swagger.ApiTags("universities")
@common.Controller("universities")
export class UniversityController extends UniversityControllerBase {
  constructor(protected readonly service: UniversityService) {
    super(service);
  }
}
