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
import { CounsellorService } from "../counsellor.service";
import { CounsellorCreateInput } from "./CounsellorCreateInput";
import { Counsellor } from "./Counsellor";
import { CounsellorFindManyArgs } from "./CounsellorFindManyArgs";
import { CounsellorWhereUniqueInput } from "./CounsellorWhereUniqueInput";
import { CounsellorUpdateInput } from "./CounsellorUpdateInput";

export class CounsellorControllerBase {
  constructor(protected readonly service: CounsellorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Counsellor })
  async createCounsellor(
    @common.Body() data: CounsellorCreateInput
  ): Promise<Counsellor> {
    return await this.service.createCounsellor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Counsellor] })
  @ApiNestedQuery(CounsellorFindManyArgs)
  async counsellors(@common.Req() request: Request): Promise<Counsellor[]> {
    const args = plainToClass(CounsellorFindManyArgs, request.query);
    return this.service.counsellors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Counsellor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async counsellor(
    @common.Param() params: CounsellorWhereUniqueInput
  ): Promise<Counsellor | null> {
    const result = await this.service.counsellor({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Counsellor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCounsellor(
    @common.Param() params: CounsellorWhereUniqueInput,
    @common.Body() data: CounsellorUpdateInput
  ): Promise<Counsellor | null> {
    try {
      return await this.service.updateCounsellor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
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
  @swagger.ApiOkResponse({ type: Counsellor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCounsellor(
    @common.Param() params: CounsellorWhereUniqueInput
  ): Promise<Counsellor | null> {
    try {
      return await this.service.deleteCounsellor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
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
