import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./user/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
