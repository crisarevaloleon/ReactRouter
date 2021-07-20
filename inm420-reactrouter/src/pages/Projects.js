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
      <div className="Categories">
        <ul>
          <li className="P-button">
            <Link to="/projecta">Project A</Link>
          </li>
          <li className="P-button">
            <Link to="/projectb">Project B</Link>
          </li>
          <li className="P-button">
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
  return <div className="App projects">
  <header className="App-header">
    <a href="#" className="Project-section A">
      <h2>Project A</h2>
    </a>
  </header>
</div>
}

function Projectb() {
  return <div className="App projects">
  <header className="App-header">
    <a href="#" className="Project-section B">
      <h2>Project B</h2>
    </a>
  </header>
</div>
}

function Projectc() {
  let match = useRouteMatch();

  return (
    <div>
      <div className="App projects">
        <header className="App-header">
          <a href="#" className="Project-section C">
            <h2>Project C</h2>
          </a>
        </header>
      </div>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:projectscId`}>
          <Projectc />
        </Route>
        <Route path={match.path}>
          <h3 className="Thanks">Thank you for checking my projects!</h3>
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
