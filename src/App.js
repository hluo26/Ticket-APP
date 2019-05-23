import React, { Component } from 'react';
import PrimarySearchAppBar from './navigation/SearchBar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <PrimarySearchAppBar/>
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
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/topics" component={Topics} />
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
          <li>
              <Link to={`${match.url}/id`}>ID</Link>
      </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
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

