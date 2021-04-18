import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Snippet from "./components/Sniper/Sniper";

const HomePage = lazy(() => import("./pages/Home/Home"));
const AuthPage = lazy(() => import("./pages/Auth/Auth"));
const PopulationOverview = lazy(() =>
  import("./pages/PopulationOverview/PopulationOverview")
);

function App() {
  return (
    <>
      <Nav />
      <main style={{ marginTop: "4.5rem", padding: "0 80px" }}>
        <Switch>
          <Suspense fallback={<Snippet />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/auth' component={AuthPage} />
            <Route path='/populationOverview' component={PopulationOverview} />
          </Suspense>
        </Switch>
      </main>
    </>
  );
}

export default App;
