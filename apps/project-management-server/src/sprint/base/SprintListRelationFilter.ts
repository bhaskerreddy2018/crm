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
import { SprintWhereInput } from "./SprintWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SprintListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SprintWhereInput,
  })
  @ValidateNested()
  @Type(() => SprintWhereInput)
  @IsOptional()
  @Field(() => SprintWhereInput, {
    nullable: true,
  })
  every?: SprintWhereInput;

  @ApiProperty({
    required: false,
    type: () => SprintWhereInput,
  })
  @ValidateNested()
  @Type(() => SprintWhereInput)
  @IsOptional()
  @Field(() => SprintWhereInput, {
    nullable: true,
  })
  some?: SprintWhereInput;

  @ApiProperty({
    required: false,
    type: () => SprintWhereInput,
  })
  @ValidateNested()
  @Type(() => SprintWhereInput)
  @IsOptional()
  @Field(() => SprintWhereInput, {
    nullable: true,
  })
  none?: SprintWhereInput;
}
export { SprintListRelationFilter as SprintListRelationFilter };
