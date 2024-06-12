import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { UniversityList } from "./university/UniversityList";
import { UniversityCreate } from "./university/UniversityCreate";
import { UniversityEdit } from "./university/UniversityEdit";
import { UniversityShow } from "./university/UniversityShow";
import { RoadMapList } from "./roadMap/RoadMapList";
import { RoadMapCreate } from "./roadMap/RoadMapCreate";
import { RoadMapEdit } from "./roadMap/RoadMapEdit";
import { RoadMapShow } from "./roadMap/RoadMapShow";
import { CounsellorList } from "./counsellor/CounsellorList";
import { CounsellorCreate } from "./counsellor/CounsellorCreate";
import { CounsellorEdit } from "./counsellor/CounsellorEdit";
import { CounsellorShow } from "./counsellor/CounsellorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StudyAbroadCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="University"
          list={UniversityList}
          edit={UniversityEdit}
          create={UniversityCreate}
          show={UniversityShow}
        />
        <Resource
          name="RoadMap"
          list={RoadMapList}
          edit={RoadMapEdit}
          create={RoadMapCreate}
          show={RoadMapShow}
        />
        <Resource
          name="Counsellor"
          list={CounsellorList}
          edit={CounsellorEdit}
          create={CounsellorCreate}
          show={CounsellorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
