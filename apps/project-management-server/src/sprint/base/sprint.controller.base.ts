/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SprintService } from "../sprint.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SprintCreateInput } from "./SprintCreateInput";
import { Sprint } from "./Sprint";
import { SprintFindManyArgs } from "./SprintFindManyArgs";
import { SprintWhereUniqueInput } from "./SprintWhereUniqueInput";
import { SprintUpdateInput } from "./SprintUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SprintControllerBase {
  constructor(
    protected readonly service: SprintService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Sprint })
  @nestAccessControl.UseRoles({
    resource: "Sprint",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSprint(@common.Body() data: SprintCreateInput): Promise<Sprint> {
    return await this.service.createSprint({
      data: data,
      select: {
        createdAt: true,
        endDate: true,
        goal: true,
        id: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Sprint] })
  @ApiNestedQuery(SprintFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Sprint",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sprints(@common.Req() request: Request): Promise<Sprint[]> {
    const args = plainToClass(SprintFindManyArgs, request.query);
    return this.service.sprints({
      ...args,
      select: {
        createdAt: true,
        endDate: true,
        goal: true,
        id: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Sprint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sprint",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sprint(
    @common.Param() params: SprintWhereUniqueInput
  ): Promise<Sprint | null> {
    const result = await this.service.sprint({
      where: params,
      select: {
        createdAt: true,
        endDate: true,
        goal: true,
        id: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Sprint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sprint",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSprint(
    @common.Param() params: SprintWhereUniqueInput,
    @common.Body() data: SprintUpdateInput
  ): Promise<Sprint | null> {
    try {
      return await this.service.updateSprint({
        where: params,
        data: data,
        select: {
          createdAt: true,
          endDate: true,
          goal: true,
          id: true,
          startDate: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Sprint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sprint",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSprint(
    @common.Param() params: SprintWhereUniqueInput
  ): Promise<Sprint | null> {
    try {
      return await this.service.deleteSprint({
        where: params,
        select: {
          createdAt: true,
          endDate: true,
          goal: true,
          id: true,
          startDate: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
