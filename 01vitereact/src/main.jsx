import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom Function in Main.jsx</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google!</a>
);

const anotherusername = "React+Vite"

const reactElement = React.createElement(
  'a', {href: "https://google.com", target: "_blank"},
  'Click Me to visit Google.', 
  anotherusername
)


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <App />
</React.StrictMode>
)


// anotherElement
//  reactElement