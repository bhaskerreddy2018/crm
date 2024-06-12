import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IssueTitle } from "../issue/IssueTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="issue.id" reference="Issue" label="issue">
          <SelectInput optionText={IssueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
