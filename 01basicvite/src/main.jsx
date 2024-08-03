import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// How we define it in our customReact
const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: 'Click me to visit google'
}

// How React needs us to define it
const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "__blank"},
  'click to visit google'
)

const AnotherElement = (
  <a href='http://google.com' target='__blank'>Visit Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)



