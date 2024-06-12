import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IssueTitle } from "../issue/IssueTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="issue.id" reference="Issue" label="issue">
          <SelectInput optionText={IssueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
