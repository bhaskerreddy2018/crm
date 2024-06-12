/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ApplicationUpdateManyWithoutUniversitiesInput {
  @Field(() => [ApplicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApplicationWhereUniqueInput],
  })
  connect?: Array<ApplicationWhereUniqueInput>;

  @Field(() => [ApplicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApplicationWhereUniqueInput],
  })
  disconnect?: Array<ApplicationWhereUniqueInput>;

  @Field(() => [ApplicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApplicationWhereUniqueInput],
  })
  set?: Array<ApplicationWhereUniqueInput>;
}

export { ApplicationUpdateManyWithoutUniversitiesInput as ApplicationUpdateManyWithoutUniversitiesInput };
