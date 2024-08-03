import Youtube  from './Youtube.jsx'

function App() {
  const username = "Carlos"
  return (
 /*  inside the {} we only should pass values already evaluated, not values that need to be evaluated */  
    <>
      <h1>Vite react app {2+2}</h1>
      <h1>Vite react app {username}</h1> 
      <Youtube/>
    </>
  )
}

export default App
