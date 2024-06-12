import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ROADMAP_TITLE_FIELD } from "./RoadMapTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const RoadMapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="University"
          target="roadMapId"
          label="Universities"
        >
          <Datagrid rowClick="show">
            <TextField label="CoursesOffered" source="coursesOffered" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="RoadMap"
              source="roadmap.id"
              reference="RoadMap"
            >
              <TextField source={ROADMAP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
