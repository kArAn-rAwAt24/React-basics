/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp(){
  return (
    <div>
      <h1>custom App !</h1>
    </div>
  );
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "rawat"

//predefine syntax to create element 
const reactElement2 = React.createElement(
  'a', // like type
  {href:'https://google.com',target:'_blank'}, // plike rops
  'click me to visit google', // like children
  anotherUser // evaluated expressions
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>
    // <MyApp />
    // MyApp()  also works

    /* reactElement
    <reactElement/>
    reactElement() */  
    //reactElement is a custom react element and we have custom Render function to render this custom react element


    // anotherElement
    // anotherElement will convert to object like reactElement


    // reactElement2

    <App/>
    
);
