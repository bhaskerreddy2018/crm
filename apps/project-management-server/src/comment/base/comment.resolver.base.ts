/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Comment } from "./Comment";
import { CommentCountArgs } from "./CommentCountArgs";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentFindUniqueArgs } from "./CommentFindUniqueArgs";
import { CreateCommentArgs } from "./CreateCommentArgs";
import { UpdateCommentArgs } from "./UpdateCommentArgs";
import { DeleteCommentArgs } from "./DeleteCommentArgs";
import { Issue } from "../../issue/base/Issue";
import { CommentService } from "../comment.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Comment)
export class CommentResolverBase {
  constructor(
    protected readonly service: CommentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async _commentsMeta(
    @graphql.Args() args: CommentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Comment])
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async comments(
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.service.comments(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Comment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "own",
  })
  async comment(
    @graphql.Args() args: CommentFindUniqueArgs
  ): Promise<Comment | null> {
    const result = await this.service.comment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "create",
    possession: "any",
  })
  async createComment(
    @graphql.Args() args: CreateCommentArgs
  ): Promise<Comment> {
    return await this.service.createComment({
      ...args,
      data: {
        ...args.data,

        issue: args.data.issue
          ? {
              connect: args.data.issue,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  async updateComment(
    @graphql.Args() args: UpdateCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.updateComment({
        ...args,
        data: {
          ...args.data,

          issue: args.data.issue
            ? {
                connect: args.data.issue,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "delete",
    possession: "any",
  })
  async deleteComment(
    @graphql.Args() args: DeleteCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.deleteComment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Issue, {
    nullable: true,
    name: "issue",
  })
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "read",
    possession: "any",
  })
  async getIssue(@graphql.Parent() parent: Comment): Promise<Issue | null> {
    const result = await this.service.getIssue(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}