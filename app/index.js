require('./main.css');
import React from 'react'
import ReactDOM from 'react-dom';
// import Demo from './conditional_rendering/demo.jsx';
// import Demo from './refs/custom_text_input'
import Demo from './refs/PassingRefsToChildComponent.jsx';
// import Demo from './refs/RefOnDomElement.jsx';

ReactDOM.render(
  <Demo />,
  document.getElementById('app')
);