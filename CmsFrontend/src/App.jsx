import Nav from './components/nav/Nav.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import React from 'react'

function App() {

  return (
    <> 
    
    <ErrorBoundary>
      <Nav />
    </ErrorBoundary>


    </>
  )
}

export default App
