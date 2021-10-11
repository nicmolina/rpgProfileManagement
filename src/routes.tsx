import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/privateRoute";
import paths from "./utils/path";
import Index from "./pages";
import Login from "./pages/login/login";
import Unauthorized from "./pages/interceptors/unauthorized";

function RouteWithSubRoutes(route: any) {
  return (
    <ProtectedRoute
      path={route.path}
      key={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/401" component={Unauthorized} />
      {paths.map((route, index) => {
        <RouteWithSubRoutes exact key={index} {...route} />;
      })}
    </Switch>
  );
}

export default Routes;
