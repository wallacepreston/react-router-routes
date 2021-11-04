import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Routes, Route, Outlet} from 'react-router-dom';

import './bootstrap.css';

const App = () => {
  return <div className="d-flex flex-column align-items-center">
    {/* Anything that is not a route cannot be rendered as a child of Routes or Route */}
    <h3>React Router v6 Demo</h3>
    <nav>
    <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
    </nav>
    {/* `Routes` is a new component */}
    <Routes>
      {/* Anytime we use `Route` components, we have to render them as direct children of a `Routes` component */}
      <Route exact path='/' element={<h1>Home</h1>}/>
      <Route path='contact' element={<>
        <h1>Contact</h1>
        <div>Our Contact Info</div>
      </>} />
      <Route path='/about' element={<>
        <h1>About</h1>
        <nav>
          <Link to="story">Story</Link> | <Link to="mission">Mission</Link>
        </nav>
        {/* `Outlet` is like `props.children` for sub-`Route` components */}
        <Outlet />
      </>} >
        <Route path="story" element={<h1>Our Story</h1>} />
        <Route path="mission" element={<h1>Our Mission</h1>} />
      </Route>
    </Routes>
  </div>
}

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('app'),
);