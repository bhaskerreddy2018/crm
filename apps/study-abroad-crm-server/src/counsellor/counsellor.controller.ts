import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CounsellorService } from "./counsellor.service";
import { CounsellorControllerBase } from "./base/counsellor.controller.base";

@swagger.ApiTags("counsellors")
@common.Controller("counsellors")
export class CounsellorController extends CounsellorControllerBase {
  constructor(protected readonly service: CounsellorService) {
    super(service);
  }
}
