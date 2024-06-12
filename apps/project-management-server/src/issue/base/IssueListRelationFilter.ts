/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IssueWhereInput } from "./IssueWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IssueListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IssueWhereInput,
  })
  @ValidateNested()
  @Type(() => IssueWhereInput)
  @IsOptional()
  @Field(() => IssueWhereInput, {
    nullable: true,
  })
  every?: IssueWhereInput;

  @ApiProperty({
    required: false,
    type: () => IssueWhereInput,
  })
  @ValidateNested()
  @Type(() => IssueWhereInput)
  @IsOptional()
  @Field(() => IssueWhereInput, {
    nullable: true,
  })
  some?: IssueWhereInput;

  @ApiProperty({
    required: false,
    type: () => IssueWhereInput,
  })
  @ValidateNested()
  @Type(() => IssueWhereInput)
  @IsOptional()
  @Field(() => IssueWhereInput, {
    nullable: true,
  })
  none?: IssueWhereInput;
}
export { IssueListRelationFilter as IssueListRelationFilter };
