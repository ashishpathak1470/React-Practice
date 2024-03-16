import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function Myapp(){
    return(

      <div>
        <h1>my function</h1>
      </div>

    )
}


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
) 
const username="ash"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank'
  },
  'visit google ',
  username
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
