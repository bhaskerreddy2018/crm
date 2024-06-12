/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UniversityWhereUniqueInput } from "../../university/base/UniversityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UniversityUpdateManyWithoutRoadMapsInput {
  @Field(() => [UniversityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UniversityWhereUniqueInput],
  })
  connect?: Array<UniversityWhereUniqueInput>;

  @Field(() => [UniversityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UniversityWhereUniqueInput],
  })
  disconnect?: Array<UniversityWhereUniqueInput>;

  @Field(() => [UniversityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UniversityWhereUniqueInput],
  })
  set?: Array<UniversityWhereUniqueInput>;
}

export { UniversityUpdateManyWithoutRoadMapsInput as UniversityUpdateManyWithoutRoadMapsInput };
