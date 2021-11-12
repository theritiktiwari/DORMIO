import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Buy from "./Components/Buy";
import Manual from "./Components/Manual";
import Profile from "./Components/Profile";
import Superuser from "./Admin/Superuser";

const App = () => {
  const title = "DORMIO";

  const [user, setUser] = useState({});
  const auth = getAuth(app);

  //   Check user login or not
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar title={title} user={user} />
            <Home title={title} user={user} />
          </Route>
          <Route exact path="/profile">
            <Navbar title={title} user={user} />
            <Profile user={user} />
          </Route>
          <Route exact path="/manual">
            <Navbar title={title} user={user} />
            <Manual title={title} />
          </Route>
          <Route exact path="/buy">
            <Navbar title={title} user={user} />
            {user && <Buy user={user} />}
            {!user && <h1 className="text-center position-absolute top-50 start-50 translate-middle">Please login to buy</h1>}
          </Route>
          <Route exact path="/dashboard">
            <Superuser user={user} title={title} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App