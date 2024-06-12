import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { RoadMapTitle } from "../roadMap/RoadMapTitle";

export const UniversityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput label="CoursesOffered" multiline source="coursesOffered" />
        <TextInput label="Location" multiline source="location" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="roadMap.id" reference="RoadMap" label="RoadMap">
          <SelectInput optionText={RoadMapTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
