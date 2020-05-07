import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./history";
import { AuthContext } from "./Context/AuthConext";

function App() {
  return (
    <AuthContext>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthContext>
  );
}

export default App;
