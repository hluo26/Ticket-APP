import React, { Component } from 'react';
import NavigationBar from './Navigation';
import Flight from './pages/Flight';
import Hotel from './pages/Hotel';
import Taxi from './pages/Taxi';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar/>
      <br/>
      <br/>
      <div>
              <Row>
              <Col md="auto">
                  <Header />
                  <AuthButton />
                  <ul>
                      <li>
                          <Link to="/public">Public Page</Link>
                      </li>
                      <li>
                          <Link to="/protected">Protected Page</Link>
                      </li>
                  </ul>
              </Col>
              <Col>
                  <Container>
                      <Route exact path="/" component={Flight} />
                      <Route path="/hotel" component={Hotel} />
                      <Route path="/taxi" component={Taxi} />
                      <Route path="/public" component={Public} />
                      <Route path="/login" component={Login} />
                      <PrivateRoute path="/protected" component={Protected} />
                  </Container>
              </Col>
              </Row>
      </div>
    </Router>
    
  );
}


function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Flight</Link>
      </li>
      <li>
        <Link to="/hotel">Hotel</Link>
      </li>
      <li>
        <Link to="/taxi">Taxi</Link>
      </li>
    </ul>
  );
}

export default App;




const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
/*
class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Welcome />
        <PrimarySearchAppBar/>
        <AuthExample />
      </div>
    );
  }
}

export default App;
*/

