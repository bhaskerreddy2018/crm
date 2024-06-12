import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { StudentTitle } from "../student/StudentTitle";
import { UniversityTitle } from "../university/UniversityTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="university.id"
          reference="University"
          label="University"
        >
          <SelectInput optionText={UniversityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
