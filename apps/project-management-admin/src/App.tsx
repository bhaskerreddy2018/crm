import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { IssueList } from "./issue/IssueList";
import { IssueCreate } from "./issue/IssueCreate";
import { IssueEdit } from "./issue/IssueEdit";
import { IssueShow } from "./issue/IssueShow";
import { LabelList } from "./label/LabelList";
import { LabelCreate } from "./label/LabelCreate";
import { LabelEdit } from "./label/LabelEdit";
import { LabelShow } from "./label/LabelShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { SprintList } from "./sprint/SprintList";
import { SprintCreate } from "./sprint/SprintCreate";
import { SprintEdit } from "./sprint/SprintEdit";
import { SprintShow } from "./sprint/SprintShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"Project Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Issue"
          list={IssueList}
          edit={IssueEdit}
          create={IssueCreate}
          show={IssueShow}
        />
        <Resource
          name="Label"
          list={LabelList}
          edit={LabelEdit}
          create={LabelCreate}
          show={LabelShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Sprint"
          list={SprintList}
          edit={SprintEdit}
          create={SprintCreate}
          show={SprintShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
