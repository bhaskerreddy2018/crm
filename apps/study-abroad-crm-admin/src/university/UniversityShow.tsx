import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { UNIVERSITY_TITLE_FIELD } from "./UniversityTitle";
import { ROADMAP_TITLE_FIELD } from "../roadMap/RoadMapTitle";

export const UniversityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CoursesOffered" source="coursesOffered" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <ReferenceField label="RoadMap" source="roadmap.id" reference="RoadMap">
          <TextField source={ROADMAP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="universityId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="EligibleUniversities"
              source="eligibleUniversities"
            />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="University"
              source="university.id"
              reference="University"
            >
              <TextField source={UNIVERSITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
