import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}




import './../css/App.css';

export default function Projects() {
  return (
    <div className="App projects">
      <header className="App-header">
        <a href="#" className="Project-section A">
          <h2>Project A</h2>
        </a>
        <a href="#" className="Project-section B">
          <h2>Project B</h2>
        </a>
        <a href="#" className="Project-section C">
          <h2>Project C</h2>
        </a>
      </header>
    </div>

  );
}



import './../css/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Projects() {
  return (
    <Router>
      <div className="App projects">
        <ul className="App-header">
          <li>
            <Link to="/projecta">Project A</Link>
          </li>
          <li>
            <Link to="/projectb">Project B</Link>
          </li>
          <li>
            <Link to="/projectc">Project C</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/projectb">
            <Projectb />
          </Route>
          <Route path="/projectc">
            <Projectc />
          </Route>
          <Route path="/projecta">
            <Projecta />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Projecta() {
  return <h2>Project A</h2>;
}

function Projectb() {
  return <h2>Project B</h2>;
}

function Projectc() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Project C</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:projectscId`}>
          <Projectc />
        </Route>
        <Route path={match.path}>
          <h3>Please select a Project C.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Projectsc() {
  let { projectcsId } = useParams();
  return <h3>Requested topic ID: {projectcsId}</h3>;
}




// import './../css/App.css';

// export default function Projects() {
//   return (
//     <div className="App projects">
//       <header className="App-header">
//         <a href="#" className="Project-section A">
//           <h2>Project A</h2>
//         </a>
//         <a href="#" className="Project-section B">
//           <h2>Project B</h2>
//         </a>
//         <a href="#" className="Project-section C">
//           <h2>Project C</h2>
//         </a>
//       </header>
//     </div>

//   );
// }
